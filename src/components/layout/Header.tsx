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
    <header className="bg-white border-b border-black sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="PepLabRx" width={140} height={35} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={item.href} className="text-gray-900 hover:text-gray-500 transition-colors text-sm font-medium flex items-center">
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 w-48 bg-white border border-black rounded-lg py-2 mt-2 shadow-sm">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2 text-gray-600 hover:bg-secondary-100 hover:text-gray-900 text-sm">
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - just cart */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative text-gray-900 hover:text-gray-500 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && <span className="absolute -top-2 -right-2 bg-primary-300 text-gray-900 text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">{state.itemCount}</span>}
            </Link>

            <button className="lg:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden border-t border-black">
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="block py-3 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
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
