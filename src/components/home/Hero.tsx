'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-gray-900 mb-6">
              Premium Research
              <br />
              <span className="font-serif italic">Peptides, For Life</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">Get lab-tested, USA-made peptides with 99%+ purity. Trusted by researchers worldwide for quality and reliability.</p>

            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 bg-primary-300 hover:bg-primary-400 text-gray-900 rounded-full text-sm font-medium transition-colors">
              Shop Peptides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <p className="text-sm text-gray-500 mt-6">Free shipping on orders over $150</p>
          </motion.div>

          {/* Hero image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative flex items-center justify-center">
            <Image src="/vial.png" alt="Premium Research Peptides" width={400} height={400} className="w-full max-w-sm h-auto object-contain" priority />
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-black bg-secondary-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm text-gray-600">
            <span>🔬 Lab Tested</span>
            <span>🇺🇸 USA Made</span>
            <span>✓ 99%+ Purity</span>
            <span>📦 Fast Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
