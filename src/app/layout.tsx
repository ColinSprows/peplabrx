import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: 'PepLabRx | Premium Research Peptides',
  description: 'Your trusted source for high-quality research peptides. Lab-tested, USA-made peptides with fast shipping and exceptional customer service.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${ebGaramond.variable}`}>
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
