'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Michael R.',
    content: 'Before finding PepLabRx, I tried countless suppliers without consistent results. They provide peptides with verified purity that I can trust. My research has never been more reliable.',
  },
  {
    name: 'Sarah K.',
    content: 'I was hesitant about ordering peptides online, but PepLabRx exceeded my expectations. The COA reports give me confidence, and their customer support actually responds within hours.',
  },
  {
    name: 'James T.',
    content: 'I joined PepLabRx for the BPC-157 and TB-500 blend. The quality is exactly as described, shipping was fast, and I feel like they actually care about supporting researchers.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Researchers, Real Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from researchers who&apos;ve transformed their work with PepLabRx</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-lg">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="font-semibold text-gray-900">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
