import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import { products } from '@/data/products'

export async function GET() {
  try {
    await connectDB()

    // Clear existing products
    await Product.deleteMany({})

    // Insert products
    const insertedProducts = await Product.insertMany(products)

    return NextResponse.json({
      message: 'Database seeded successfully',
      count: insertedProducts.length,
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}

