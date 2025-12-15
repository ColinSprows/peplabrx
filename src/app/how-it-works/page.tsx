'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, ShoppingBag, CreditCard, Truck, FlaskConical, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. Browse Our Catalog',
    description: 'Explore our extensive selection of premium research peptides, SARMs, blends, and supplies. Use filters to find exactly what you need for your research.',
  },
  {
    icon: ShoppingBag,
    title: '2. Add to Cart',
    description: 'Select your products and quantities. Take advantage of our bulk discounts - save up to 20% when ordering 20+ vials.',
  },
  {
    icon: CreditCard,
    title: '3. Secure Checkout',
    description: 'Complete your purchase through our secure, encrypted checkout powered by Stripe. We accept all major credit cards.',
  },
  {
    icon: Truck,
    title: '4. Fast Shipping',
    description: 'Orders are processed within 24 hours and shipped with tracking. Free priority shipping on orders over $150.',
  },
  {
    icon: FileCheck,
    title: '5. Receive COA',
    description: 'Every order includes access to Certificate of Analysis reports, verifying the purity and quality of your products.',
  },
  {
    icon: FlaskConical,
    title: '6. Begin Research',
    description: 'Receive your lab-tested, 99%+ purity compounds and begin your research with confidence.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-secondary-100 py-12 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h1>
            <p className="text-gray-700 max-w-2xl">Getting started with PepLabRx is simple. Follow these easy steps to receive your premium research compounds.</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-primary-300 border-b border-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border border-black flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction to Peptides */}
      <section className="py-20 bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Introduction to Peptides</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>Peptides are short chains of amino acids linked by peptide bonds. They are the building blocks of proteins and play crucial roles in biological processes.</p>
              <p>In research settings, synthetic peptides are used to study various biological mechanisms, including cell signaling, hormone regulation, and tissue repair. Their specificity and relatively small size make them valuable tools for scientific investigation.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Common Research Applications</h3>
              <ul className="space-y-2">
                <li>
                  <strong>BPC-157:</strong> Studied for tissue healing and regeneration
                </li>
                <li>
                  <strong>TB-500:</strong> Research into wound healing and recovery
                </li>
                <li>
                  <strong>Semaglutide:</strong> Metabolic and appetite regulation studies
                </li>
                <li>
                  <strong>CJC-1295/Ipamorelin:</strong> Growth hormone release research
                </li>
                <li>
                  <strong>Melanotan 2:</strong> Melanogenesis and pigmentation studies
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Reconstitution Guide</h3>
              <p>Most peptides come in lyophilized (freeze-dried) form and require reconstitution before use. We recommend using bacteriostatic water for multi-use applications or sterile water for single-use applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-100 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Start?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Browse our catalog and find the perfect products for your research needs.</p>
          <Link href="/products" className="inline-flex items-center px-8 py-4 bg-primary-300 text-black rounded-full font-semibold hover:bg-primary-400 transition-colors border border-black">
            Shop Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
