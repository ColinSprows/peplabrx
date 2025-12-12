'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  products: [
    { name: 'Peptides', href: '/products?category=peptides' },
    { name: 'SARMs', href: '/products?category=sarms' },
    { name: 'Blends', href: '/products?category=blends' },
    { name: 'Diluents', href: '/products?category=diluents' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-end">
            <Link href="/">
              <Image src="/logo.png" alt="PepLabRx" width={120} height={30} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">©{new Date().getFullYear()} PepLabRx. All rights reserved.</p>
            <p className="text-xs text-gray-400 max-w-xl text-center md:text-right">Products are sold for research purposes only. Not for human consumption. Must be 18+ to purchase.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
