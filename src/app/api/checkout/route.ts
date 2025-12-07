import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import connectDB from '@/lib/mongodb'
import Order from '@/models/Order'

export async function POST(request: Request) {
  try {
    const { items, email, shippingAddress } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      )
    }

    await connectDB()

    // Calculate totals
    const subtotal = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    )
    const shipping = subtotal >= 150 ? 0 : 9.99
    const tax = subtotal * 0.0 // No tax for research chemicals
    const total = subtotal + shipping + tax

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
      customer_email: email,
      metadata: {
        orderId: 'pending',
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: Math.round(shipping * 100),
              currency: 'usd',
            },
            display_name: shipping === 0 ? 'Free Priority Shipping' : 'Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
      ],
    })

    // Create order in database
    const order = await Order.create({
      email: email || 'guest@peplabrx.com',
      items: items.map((item: any) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      subtotal,
      shipping,
      tax,
      total,
      status: 'pending',
      paymentStatus: 'pending',
      stripeSessionId: session.id,
      shippingAddress: shippingAddress || {
        firstName: 'Guest',
        lastName: 'Customer',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'US',
      },
    })

    // Update session metadata with order ID
    await stripe.checkout.sessions.update(session.id, {
      metadata: { orderId: order._id.toString() },
    })

    return NextResponse.json({ url: session.url, sessionId: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

