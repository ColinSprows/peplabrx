'use client';

import { motion } from 'framer-motion';
import { Beaker, Shield, Award, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-secondary-100 py-12 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">About PepLabRx</h1>
            <p className="text-gray-700 max-w-2xl">We&apos;re dedicated to advancing scientific research by providing the highest quality peptides and research compounds to researchers worldwide.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">At PepLabRx, our mission is to support the scientific community by providing premium-quality research peptides that meet the highest standards of purity and consistency.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">We believe that groundbreaking research requires exceptional materials. That&apos;s why every product we offer undergoes rigorous third-party testing to ensure 99%+ purity, giving researchers the confidence they need to pursue their work.</p>
              <p className="text-gray-600 leading-relaxed">Based in the United States, we manufacture all our products in FDA-registered facilities, adhering to strict quality control protocols at every step of the production process.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-100 rounded-2xl p-6 text-center border border-black">
                <div className="text-4xl font-bold text-black mb-2">16,200+</div>
                <div className="text-gray-700">Happy Customers</div>
              </div>
              <div className="bg-secondary-100 rounded-2xl p-6 text-center border border-black">
                <div className="text-4xl font-bold text-black mb-2">99%+</div>
                <div className="text-gray-700">Purity Guaranteed</div>
              </div>
              <div className="bg-secondary-100 rounded-2xl p-6 text-center border border-black">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-700">Products</div>
              </div>
              <div className="bg-secondary-100 rounded-2xl p-6 text-center border border-black">
                <div className="text-4xl font-bold text-black mb-2">5+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-300 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These core principles guide everything we do at PepLabRx.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Quality First', description: 'We never compromise on quality. Every product meets our strict 99%+ purity standards.' },
              { icon: Shield, title: 'Transparency', description: 'COA reports available for every batch. We believe in complete transparency with our customers.' },
              { icon: Users, title: 'Customer Focus', description: 'Our dedicated support team is available 24/7 to assist with any questions or concerns.' },
              { icon: Target, title: 'Innovation', description: 'We continuously expand our catalog to meet the evolving needs of the research community.' },
              { icon: Heart, title: 'Integrity', description: 'We operate with honesty and integrity in all our business practices.' },
              { icon: Beaker, title: 'Scientific Excellence', description: 'We support the advancement of science through premium research materials.' },
            ].map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 border border-black">
                <div className="inline-flex p-3 rounded-xl bg-secondary-100 border border-black text-black mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-100 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Browse our extensive catalog of premium research peptides and experience the PepLabRx difference.</p>
          <a href="/products" className="inline-flex items-center px-8 py-4 bg-primary-300 text-black rounded-full font-semibold hover:bg-primary-400 transition-colors border border-black">
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
