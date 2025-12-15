'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Orders are processed within 24 hours. Standard shipping takes 5-7 business days, while priority shipping (free on orders over $150) takes 3-5 business days.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we only ship within the United States. We are working on expanding our shipping options to international destinations.',
      },
      {
        q: 'How can I track my order?',
        a: "Once your order ships, you will receive an email with tracking information. You can use this to monitor your package's progress.",
      },
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery for unopened products in original packaging. Please contact our support team to initiate a return.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        q: 'What purity are your peptides?',
        a: 'All our peptides are manufactured to 99%+ purity standards. Each batch is third-party tested, and Certificate of Analysis (COA) reports are available for all products.',
      },
      {
        q: 'Where are your products manufactured?',
        a: 'All our products are manufactured in FDA-registered facilities in the United States, following strict quality control protocols.',
      },
      {
        q: 'How should I store peptides?',
        a: 'Lyophilized (freeze-dried) peptides should be stored in a cool, dry place. For long-term storage, refrigeration or freezing is recommended. Once reconstituted, store in the refrigerator.',
      },
      {
        q: 'What is bacteriostatic water?',
        a: "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol as a preservative. It's used to reconstitute lyophilized peptides and allows for multiple uses from a single vial.",
      },
    ],
  },
  {
    category: 'Payment & Discounts',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) through our secure Stripe payment system.',
      },
      {
        q: 'Do you offer bulk discounts?',
        a: 'Yes! We offer tiered bulk discounts: 10% off for 5-9 vials, 15% off for 10-19 vials, and 20% off for 20+ vials.',
      },
      {
        q: 'Is there free shipping?',
        a: 'Yes, we offer free priority shipping on all orders over $150.',
      },
    ],
  },
  {
    category: 'Research & Usage',
    questions: [
      {
        q: 'Are these products for human consumption?',
        a: 'No. All products are sold strictly for research purposes only and are not intended for human consumption. You must be 18+ to purchase.',
      },
      {
        q: 'Do you provide research guidance?',
        a: 'While we cannot provide specific research protocols, our support team can answer general questions about our products. We also provide COA reports and product specifications.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter((q) => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase())),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-secondary-100 py-12 border-b border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h1>
            <p className="text-gray-700 mb-8">Find answers to common questions about our products and services.</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300 border border-black" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-primary-300 border-b border-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {filteredFaqs.map((category, catIndex) => (
            <motion.div key={category.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIndex * 0.1 }} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const id = `${catIndex}-${index}`;
                  const isOpen = openItems.includes(id);
                  return (
                    <div key={id} className="bg-white rounded-xl border border-black overflow-hidden">
                      <button onClick={() => toggleItem(id)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors">
                        <span className="font-medium text-gray-900">{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <p className="px-6 pb-4 text-gray-600">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
