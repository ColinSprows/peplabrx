'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-6">
              Premium Research
              <br />
              <span className="text-primary-500">Peptides, For Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">Get lab-tested, USA-made peptides with 99%+ purity. Trusted by researchers worldwide for quality and reliability.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                Shop Peptides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <p className="text-sm text-gray-500">Free shipping on orders over $150</p>
          </motion.div>

          {/* Hero image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-100 rounded-full opacity-60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-200 rounded-full opacity-40" />

              {/* Main image container */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image src="/vial.png" alt="Premium Research Peptides" width={400} height={400} className="w-3/4 h-auto object-contain drop-shadow-2xl" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500 mb-4">Trusted by researchers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-gray-400 font-semibold text-lg">🔬 Lab Tested</div>
            <div className="text-gray-400 font-semibold text-lg">🇺🇸 USA Made</div>
            <div className="text-gray-400 font-semibold text-lg">✓ 99%+ Purity</div>
            <div className="text-gray-400 font-semibold text-lg">📦 Fast Shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
}
