'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Browse Products',
    description: 'Explore our extensive catalog of premium research peptides, SARMs, and supplies with detailed product information.',
  },
  {
    number: '02',
    title: 'Place Your Order',
    description: 'Add items to cart and check out securely. All orders come with third-party COA reports for complete transparency.',
  },
  {
    number: '03',
    title: 'Fast Delivery',
    description: 'Orders ship within 24 hours. Free priority shipping on orders over $150 with tracking provided.',
  },
  {
    number: '04',
    title: 'Start Research',
    description: 'Receive lab-tested, 99%+ purity compounds ready for your research applications with ongoing support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - sticky header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
            <span className="text-primary-500 font-medium mb-4 block">How it Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your path to quality research compounds is simple</h2>
            <p className="text-lg text-gray-600">Four easy steps to get premium peptides delivered to your lab</p>
          </motion.div>

          {/* Right side - steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-6 p-6 rounded-2xl hover:bg-cream-50 transition-colors">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-primary-200">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
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
