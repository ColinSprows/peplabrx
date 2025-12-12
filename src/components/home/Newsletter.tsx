'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Your path to quality research compounds begins now</h2>
          <p className="text-lg text-gray-400 mb-10">Get started with premium peptides from researchers who understand your needs</p>

          <Link href="/products" className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-lg">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
