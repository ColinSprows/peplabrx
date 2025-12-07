'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Michael R.',
    role: 'Research Scientist',
    content: 'PepLabRx has been my go-to supplier for over 2 years. The purity is consistently excellent, and their customer service is unmatched. Highly recommend for any serious researcher.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Sarah K.',
    role: 'Lab Director',
    content: 'The quality of peptides from PepLabRx is outstanding. Fast shipping, great prices, and the COA reports give me confidence in every order. Will continue to be a loyal customer.',
    rating: 5,
    verified: true,
  },
  {
    name: 'James T.',
    role: 'Independent Researcher',
    content: 'I\'ve tried many suppliers, but PepLabRx stands out for their consistency and reliability. The BPC-157 and TB-500 blend has been perfect for my research needs.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Dr. Emily W.',
    role: 'Biochemist',
    content: 'Excellent products and service. The team is knowledgeable and always helpful. Shipping is fast and packaging is discreet and professional. 10/10 would recommend.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Robert M.',
    role: 'Research Associate',
    content: 'Been ordering from PepLabRx for 6 months now. Never had an issue. Products arrive quickly and are always as described. The bulk discounts are a nice bonus too!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Lisa P.',
    role: 'Graduate Student',
    content: 'As a grad student on a budget, I appreciate the competitive pricing without sacrificing quality. The Semaglutide I ordered was exactly what I needed for my research.',
    rating: 5,
    verified: true,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Researchers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join over 16,200+ satisfied customers who trust PepLabRx for their research needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-200" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
                {testimonial.verified && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

