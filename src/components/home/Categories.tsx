'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Find the Right Peptide',
    description: 'Browse our extensive catalog of premium research peptides, all with 99%+ purity and full COA documentation.',
    link: '/products?category=peptides',
    linkText: 'Shop Peptides',
  },
  {
    title: 'Full-Spectrum Products',
    description: 'From peptides and SARMs to blends and diluents, everything you need for research in one place.',
    link: '/products',
    linkText: 'View All Products',
  },
  {
    title: 'Convenient & Accessible',
    description: 'Order online with fast shipping. No long waits—quality research compounds delivered to your door.',
    link: '/how-it-works',
    linkText: 'Learn More',
  },
  {
    title: 'Truly Quality Focused',
    description: 'Every batch is third-party tested. Access COA reports for complete transparency on purity and quality.',
    link: '/about',
    linkText: 'Our Standards',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white border-b border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research peptides, the way you always hoped they could be</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Finally, a supplier that connects all the dots.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <div className="h-full bg-[#fafafa] rounded-2xl p-8 border border-[#e5e5e5] hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Link href={feature.link} className="inline-flex items-center text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors">
                  {feature.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
