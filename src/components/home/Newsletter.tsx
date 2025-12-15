'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-primary-300 border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your path to quality research compounds begins now</h2>
            <p className="text-gray-700 mb-8">Get started with premium peptides from researchers who understand your needs</p>

            <Link href="/products" className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden md:block flex-shrink-0">
            <Image src="/microscope.png" alt="Microscope" width={300} height={300} className="w-48 lg:w-64 h-auto object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
