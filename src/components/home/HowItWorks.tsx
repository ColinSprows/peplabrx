'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Browse Products',
    description: 'Explore our extensive catalog of premium research peptides, SARMs, and supplies with detailed product information.',
  },
  {
    title: 'Place Your Order',
    description: 'Add items to cart and check out securely. All orders come with third-party COA reports for complete transparency.',
  },
  {
    title: 'Fast Delivery',
    description: 'Orders ship within 24 hours. Free priority shipping on orders over $150 with tracking provided.',
  },
  {
    title: 'Ongoing Support',
    description: 'Receive lab-tested, 99%+ purity compounds ready for your research applications with expert support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-secondary-100 border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - sticky header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-24">
            <span className="text-sm text-primary-600 mb-4 block font-medium">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your path to quality research compounds is simple</h2>
            <p className="text-gray-600">Four easy steps to get premium peptides delivered to your lab</p>
          </motion.div>

          {/* Right side - steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-6 p-6 bg-white border border-black rounded-2xl">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-300 text-gray-900 rounded-full flex items-center justify-center text-sm font-medium">{index + 1}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
