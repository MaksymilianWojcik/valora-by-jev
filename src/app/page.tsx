import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,168,96,0.12)_0%,rgba(10,10,10,0)_60%)]" />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 pt-32">
        {/* Top Decorative Element */}
        <div className="mb-4 flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-3">
            <Image
              src="/valora-logo.png?v=2"
              alt="VALORA by Jev"
              width={900}
              height={340}
              className="h-40 md:h-48 lg:h-56 w-auto drop-shadow-[0_0_40px_rgba(201,168,96,0.15)]"
              priority
              unoptimized
            />
          </div>
          <p className="font-[var(--font-inter)] text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase">
            Luxury Beauty
          </p>
        </div>

        {/* Decorative Center Element */}
        <div className="mb-16 flex items-center gap-3">
          <div className="w-12 h-px bg-[#c9a860]"></div>
          <div className="w-1.5 h-1.5 bg-[#c9a860] rotate-45"></div>
          <svg className="w-8 h-8 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <div className="w-1.5 h-1.5 bg-[#c9a860] rotate-45"></div>
          <div className="w-12 h-px bg-[#c9a860]"></div>
        </div>

        {/* Brand Story Section */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Corner Decorations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-[#c9a860]"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-[#c9a860]"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-[#c9a860]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-[#c9a860]"></div>

            {/* Content */}
            <div className="px-10 md:px-12 py-14 md:py-16 bg-black/40 backdrop-blur-md border border-[#c9a860]/20 shadow-[0_0_60px_rgba(201,168,96,0.08)]">
              <h2 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#c9a860] text-center mb-8 tracking-wide">
                Our Story
              </h2>
              <div className="space-y-6 font-[var(--font-inter)] text-gray-300 text-base md:text-lg leading-relaxed">
                <p className="text-center text-white/90">
                  She wasn't born into luxury. She built it.
                </p>
                <p className="text-center">
                  Every shade tells a chapter of her journey— from survival, to ambition, to success.
                </p>
                <p className="text-[#c9a860] font-medium text-center pt-4 text-lg">
                  This is not just beauty. This is Selfmade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
        </div>

        {/* Subtle Tagline */}
        <p className="mt-12 font-[var(--font-inter)] text-xs text-gray-500 tracking-[0.2em] uppercase">
          Perfumes · Serums · Lotions
        </p>
      </main>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-12 opacity-20">
        <svg className="w-16 h-16 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-16 opacity-20">
        <svg className="w-12 h-12 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    </div>
  );
}
