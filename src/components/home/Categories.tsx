'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beaker, Pill, FlaskConical, Droplets, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Peptides',
    slug: 'peptides',
    description: 'Premium research peptides with 99%+ purity',
    icon: Beaker,
    count: 15,
    color: 'from-primary-500 to-primary-600',
  },
  {
    name: 'SARMs & Liquids',
    slug: 'sarms',
    description: 'Selective androgen receptor modulators',
    icon: FlaskConical,
    count: 8,
    color: 'from-accent-500 to-accent-600',
  },
  {
    name: 'Blends & Kits',
    slug: 'blends',
    description: 'Synergistic research combinations',
    icon: Pill,
    count: 5,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Diluents',
    slug: 'diluents',
    description: 'Sterile reconstitution solutions',
    icon: Droplets,
    count: 3,
    color: 'from-amber-500 to-amber-600',
  },
  {
    name: 'Clean Ingredients',
    slug: 'clean',
    description: 'All products verified pure with full ingredient transparency',
    icon: Sparkles,
    count: 26,
    color: 'from-teal-500 to-teal-600',
    isHighlight: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our comprehensive selection of research compounds, all lab-tested and manufactured to the highest standards.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <motion.div key={category.slug} variants={item} className="h-full">
              <Link href={category.slug === 'clean' ? '/products' : `/products?category=${category.slug}`} className="block group h-full">
                <div className={`h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${category.isHighlight ? 'ring-2 ring-teal-400' : ''}`}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} mb-4 self-start`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{category.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{category.description}</p>
                  <span className="text-primary-600 font-medium text-sm mt-auto">{category.isHighlight ? 'View All Products →' : `${category.count} Products →`}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
