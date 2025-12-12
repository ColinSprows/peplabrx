'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const oldWay = ['Inconsistent purity between batches', 'No COA documentation available', 'Long shipping times, unreliable delivery', 'Limited product selection', 'No customer support or guidance'];

const newWay = ['99%+ purity guaranteed, every batch', 'Full COA reports for all products', 'Fast shipping, orders ship within 24hrs', 'Comprehensive peptide & SARM catalog', 'Expert support available 24/7'];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Redefining what it means to source research peptides</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">You don&apos;t have to settle for inconsistent quality anymore. Here, you&apos;re not just another order—you&apos;re a researcher we&apos;re committed to supporting.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* The Old Way */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary-50 border border-black rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-400 mb-6">The Old Way</h3>
            <ul className="space-y-4">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The New Way */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary-600 border border-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-lg font-semibold mb-6">The PepLabRx Way</h3>
            <ul className="space-y-4">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary-200 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-100">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
