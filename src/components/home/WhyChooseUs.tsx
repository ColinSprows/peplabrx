'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Truck, HeadphonesIcon, RefreshCw, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '99%+ Purity Guaranteed',
    description: 'Every batch is third-party tested with COA reports available for all products.',
  },
  {
    icon: Shield,
    title: 'USA Made',
    description: 'All products are manufactured in FDA-registered facilities in the United States.',
  },
  {
    icon: Truck,
    title: 'Free Priority Shipping',
    description: 'Orders over $150 ship free with priority delivery in 3-5 business days.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our expert team is available around the clock to answer your questions.',
  },
  {
    icon: RefreshCw,
    title: 'Bulk Discounts',
    description: 'Save up to 20% on bulk orders. The more you buy, the more you save.',
  },
  {
    icon: FileCheck,
    title: 'COA Reports',
    description: 'Certificate of Analysis available for every product batch for transparency.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PepLabRx?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the highest quality research compounds 
            with exceptional service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bulk discount tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Bulk Discount Tiers</h3>
            <p className="text-primary-100">Save more when you buy more!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">10% OFF</div>
              <div className="text-primary-100">5-9 Vials</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">15% OFF</div>
              <div className="text-primary-100">10-19 Vials</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">20% OFF</div>
              <div className="text-primary-100">20+ Vials</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

