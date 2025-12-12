'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beaker, FlaskConical, Pill, Droplets, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Beaker,
    title: 'Find the Right Peptide',
    description: 'Browse our extensive catalog of premium research peptides, all with 99%+ purity and full COA documentation.',
    link: '/products?category=peptides',
    linkText: 'Shop Peptides',
  },
  {
    icon: FlaskConical,
    title: 'Full-Spectrum Products',
    description: 'From peptides and SARMs to blends and diluents, everything you need for research in one place.',
    link: '/products',
    linkText: 'View All Products',
  },
  {
    icon: Pill,
    title: 'Convenient & Accessible',
    description: 'Order online with fast shipping. No long waits—quality research compounds delivered to your door.',
    link: '/how-it-works',
    linkText: 'Learn More',
  },
  {
    icon: Droplets,
    title: 'Quality Guaranteed',
    description: 'Every batch is third-party tested. Access COA reports for complete transparency on purity and quality.',
    link: '/about',
    linkText: 'Our Standards',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research peptides, the way you always hoped they could be</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Finally, a supplier that connects all the dots.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <div className="h-full bg-cream-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300">
                <div className="inline-flex p-3 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Link href={feature.link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
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
