import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const bestSeller = searchParams.get('bestSeller');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');

  let result = [...products];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (featured === 'true') {
    result = result.filter((p) => p.featured);
  }

  if (bestSeller === 'true') {
    result = result.filter((p) => p.bestSeller);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower) || p.tags.some((t) => t.toLowerCase().includes(searchLower)));
  }

  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  return NextResponse.json(result);
}
