import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET(request: Request) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const bestSeller = searchParams.get('bestSeller')
    const search = searchParams.get('search')
    const limit = searchParams.get('limit')

    let query: any = {}

    if (category) {
      query.category = category
    }

    if (featured === 'true') {
      query.featured = true
    }

    if (bestSeller === 'true') {
      query.bestSeller = true
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    let productsQuery = Product.find(query).sort({ createdAt: -1 })

    if (limit) {
      productsQuery = productsQuery.limit(parseInt(limit))
    }

    const products = await productsQuery

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

