'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Clear cart after successful checkout
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full mx-4"
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
          >
            <CheckCircle className="h-10 w-10 text-green-500" />
          </motion.div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We&apos;ve received your payment and will begin 
            processing your order right away.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-6 w-6 text-primary-500" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Confirmation Email</p>
                <p className="text-sm text-gray-500">Check your inbox for order details</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Package className="h-6 w-6 text-primary-500" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Shipping Updates</p>
                <p className="text-sm text-gray-500">You&apos;ll receive tracking info soon</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/products"
              className="block w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="block w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

