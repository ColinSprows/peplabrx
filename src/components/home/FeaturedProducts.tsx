'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary-500 font-medium mb-2 block">Popular Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by researchers worldwide</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Our most popular research peptides with verified purity and full documentation.</p>
          </div>
          <Link href="/products" className="mt-6 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div key={product.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
