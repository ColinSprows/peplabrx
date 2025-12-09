'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-accent-500/20 rounded-full text-accent-300 text-sm font-medium mb-6">🔬 Premium Research Peptides</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advancing Research with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Premium Peptides</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Lab-tested, USA-made peptides with 99%+ purity. Trusted by researchers worldwide for quality and reliability. Free shipping on orders over $150.</p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/products" className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-all transform hover:scale-105">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all backdrop-blur-sm">
                Learn More
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-sm text-gray-300">Lab Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-primary-400" />
                <span className="text-sm text-gray-300">Fast Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary-400" />
                <span className="text-sm text-gray-300">99%+ Purity</span>
              </div>
            </div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />
              <div className="relative glass rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image src="/shot1.png" alt="Syringe" width={96} height={96} className="absolute inset-0 w-full h-full object-contain rotate-[160deg] opacity-60" />
                      <Image src="/vial.png" alt="Peptide Vial" width={96} height={96} className="relative w-full h-full object-contain drop-shadow-lg" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Research Grade</h3>
                    <p className="text-gray-300">Premium quality peptides for advanced research applications</p>
                    <div className="mt-6 flex justify-center gap-2">
                      <span className="px-3 py-1 bg-primary-500/20 rounded-full text-sm">99%+ Purity</span>
                      <span className="px-3 py-1 bg-accent-500/20 rounded-full text-sm">USA Made</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400">16,200+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">50+</div>
              <div className="text-sm text-gray-400">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">99%+</div>
              <div className="text-sm text-gray-400">Purity Guaranteed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">24/7</div>
              <div className="text-sm text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
