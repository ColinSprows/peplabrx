'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  name: string;
  slug: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  dosage: string;
  purity: string;
  image: string;
  bestSeller?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      dosage: product.dosage,
    });
  };

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden hover:shadow-lg">
      <Link href={`/products/${product.slug}`}>
        <div className="relative">
          <div className="aspect-square bg-cream-50 relative overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Purity badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-medium rounded-full">{product.purity}</span>
          </div>
        </div>

        <div className="p-5">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{product.category}</span>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-primary-600 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.shortDescription}</p>

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div>
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>}
            </div>
            <button onClick={handleAddToCart} className="p-2.5 bg-gray-900 hover:bg-primary-500 text-white rounded-full transition-colors">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
