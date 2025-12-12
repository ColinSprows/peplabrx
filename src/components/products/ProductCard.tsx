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
    <div className="group bg-white rounded-2xl border border-[#e5e5e5] hover:border-gray-300 transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="relative">
          <div className="aspect-square bg-[#fafafa] relative overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Purity badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-white border border-[#e5e5e5] text-gray-600 text-xs font-medium rounded-md">{product.purity}</span>
          </div>
        </div>

        <div className="p-4">
          <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
          <h3 className="text-base font-semibold text-gray-900 mt-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.shortDescription}</p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#e5e5e5]">
            <div>
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>}
            </div>
            <button onClick={handleAddToCart} className="p-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
