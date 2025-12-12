'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-primary-600 text-white border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your path to quality research compounds begins now</h2>
          <p className="text-primary-100 mb-8">Get started with premium peptides from researchers who understand your needs</p>

          <Link href="/products" className="inline-flex items-center px-6 py-3 bg-white hover:bg-secondary-100 text-gray-900 rounded-full text-sm font-medium transition-colors">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
