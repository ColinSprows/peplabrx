'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingBag, Truck, FlaskConical } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Browse Products',
    description: 'Explore our extensive catalog of premium research peptides, SARMs, and supplies.',
  },
  {
    icon: ShoppingBag,
    title: 'Place Your Order',
    description: 'Add items to your cart and checkout securely with our encrypted payment system.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Orders ship within 24 hours. Free priority shipping on orders over $150.',
  },
  {
    icon: FlaskConical,
    title: 'Start Research',
    description: 'Receive lab-tested, 99%+ purity compounds ready for your research applications.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Getting started with PepLabRx is simple. Follow these easy steps to receive 
            your research compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
              )}
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

