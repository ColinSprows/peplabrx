'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Minus, Plus, Star, Shield, Truck, ArrowLeft, Check, Sparkles, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        dosage: product.dosage,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.bestSeller && (
                <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Best Seller
                </span>
              )}
              {discount > 0 && <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">{discount}% OFF</span>}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-primary-600 font-medium uppercase tracking-wide">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <span className="text-sm text-gray-500">Dosage</span>
                <p className="font-semibold text-gray-900">{product.dosage}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-sm text-gray-500">Purity</span>
                <p className="font-semibold text-green-600">{product.purity}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-sm text-gray-500">SKU</span>
                <p className="font-semibold text-gray-900">{product.sku}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-sm text-gray-500">Availability</span>
                <p className="font-semibold text-green-600">In Stock</p>
              </div>
            </div>

            {/* Clean Rating & Ingredients */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 mb-6 border border-teal-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-teal-600" />
                <h3 className="font-semibold text-gray-900">Clean Rating</h3>
                <div className="flex items-center ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Leaf key={i} className={`h-5 w-5 ${i < (product.cleanRating || 5) ? 'text-teal-500 fill-teal-500' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 font-bold text-teal-700">{product.cleanRating || 5}/5</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Transparent Ingredients:</p>
                <div className="flex flex-wrap gap-2">
                  {(product.ingredients || []).map((ingredient, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/80 text-sm text-gray-700 rounded-full border border-teal-200">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100 transition-colors">
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <button onClick={handleAddToCart} className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${added ? 'bg-green-500 text-white' : 'bg-primary-500 hover:bg-primary-600 text-white'}`}>
                {added ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-primary-500" />
                Lab Tested
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-primary-500" />
                Free shipping over $150
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
