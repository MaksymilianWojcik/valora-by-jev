'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#c9a860]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="/valora-logo.png?v=2"
              alt="VALORA by Jev"
              width={200}
              height={60}
              className="h-14 w-auto transition-opacity group-hover:opacity-80"
              priority
              unoptimized
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`font-[var(--font-inter)] text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === '/'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-[var(--font-inter)] text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === '/products'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className={`font-[var(--font-inter)] text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === '/contact'
                  ? 'text-[#c9a860]'
                  : 'text-white/70 hover:text-[#c9a860]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
