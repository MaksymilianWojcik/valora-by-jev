'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#c9a860]/20 relative">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c9a860]/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" onClick={() => setIsOpen(false)}>
            <Image
              src="/valora-logo.png?v=2"
              alt="VALORA by Jev"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto transition-opacity group-hover:opacity-80"
              priority
              unoptimized
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-[var(--font-inter)] text-sm tracking-[0.2em] uppercase transition-colors ${
                pathname === '/'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-[var(--font-inter)] text-sm tracking-[0.2em] uppercase transition-colors ${
                pathname === '/products'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Products
            </Link>
            <Link
              href="/faq"
              className={`font-[var(--font-inter)] text-sm tracking-[0.2em] uppercase transition-colors ${
                pathname === '/faq'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`font-[var(--font-inter)] text-sm tracking-[0.2em] uppercase transition-colors ${
                pathname === '/contact'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Contact
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#c9a860]/30 rounded-full text-[#c9a860] hover:bg-[#c9a860] hover:text-black transition-colors"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-[#c9a860]/20 bg-black/90`}>
        <div className="px-6 py-6 flex flex-col gap-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`font-[var(--font-inter)] text-sm tracking-[0.3em] uppercase transition-colors ${
              pathname === '/'
                ? 'text-[#c9a860]'
                : 'text-white/80 hover:text-[#c9a860]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={`font-[var(--font-inter)] text-sm tracking-[0.3em] uppercase transition-colors ${
              pathname === '/products'
                ? 'text-[#c9a860]'
                : 'text-white/80 hover:text-[#c9a860]'
            }`}
          >
            Products
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className={`font-[var(--font-inter)] text-sm tracking-[0.3em] uppercase transition-colors ${
              pathname === '/faq'
                ? 'text-[#c9a860]'
                : 'text-white/80 hover:text-[#c9a860]'
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`font-[var(--font-inter)] text-sm tracking-[0.3em] uppercase transition-colors ${
              pathname === '/contact'
                ? 'text-[#c9a860]'
                : 'text-white/80 hover:text-[#c9a860]'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
