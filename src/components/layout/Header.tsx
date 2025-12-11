'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navigation = [
  { name: 'Home', href: '/' },
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
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="PepLabRx" width={180} height={48} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={item.href} className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </motion.span>
              )}
            </Link>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
