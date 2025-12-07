'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface Product {
  name: string
  slug: string
  shortDescription: string
  price: number
  originalPrice?: number
  category: string
  dosage: string
  purity: string
  image: string
  bestSeller?: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      dosage: product.dosage,
    })
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestSeller && (
              <span className="px-2 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full flex items-center">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Best Seller
              </span>
            )}
            {discount > 0 && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-primary-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{product.dosage}</span>
              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                {product.purity}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div>
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

