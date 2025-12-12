'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navigation = [
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'All Products', href: '/products' },
      { name: 'Peptides', href: '/products?category=peptides' },
      { name: 'SARMs', href: '/products?category=sarms' },
      { name: 'Blends & Kits', href: '/products?category=blends' },
      { name: 'Diluents', href: '/products?category=diluents' },
    ],
  },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { state } = useCart();

  return (
    <header className="bg-cream-50 border-b border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="PepLabRx" width={160} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={item.href} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium flex items-center rounded-full hover:bg-gray-100">
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-2xl py-2 mt-2 border border-gray-100">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2.5 text-gray-600 hover:bg-cream-50 hover:text-primary-600 text-sm">
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/cart" className="relative p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-0.5 -right-0.5 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {state.itemCount}
                </motion.span>
              )}
            </Link>

            <Link href="/products" className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              Shop Now
            </Link>

            <button className="lg:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-full" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden border-t border-gray-100">
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <Link href="/products" className="block py-3 px-4 mt-2 bg-primary-500 text-white text-center rounded-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Shop Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
