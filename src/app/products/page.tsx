import Link from 'next/link';

export default function Products() {
  const products = [
    {
      name: "Valora Red",
      category: "Lipstick",
      description: "Bold, unapologetic color that speaks volumes",
      price: "$45",
      slug: "valora-red"
    },
    {
      name: "Brave Flush",
      category: "Lip Tint",
      description: "Subtle courage in every application",
      price: "$32",
      slug: "brave-flush"
    },
    {
      name: "Fearless",
      category: "Perfume",
      description: "A scent that commands attention",
      price: "$120",
      slug: "fearless"
    },
    {
      name: "Steel Rose",
      category: "Soap",
      description: "Strength wrapped in elegance",
      price: "$28",
      slug: "steel-rose"
    },
    {
      name: "Soft Armor",
      category: "Lotion",
      description: "Protection that feels like luxury",
      price: "$38",
      slug: "soft-armor"
    },
    {
      name: "Power Concentrate",
      category: "Serum",
      description: "Potent beauty from within",
      price: "$85",
      slug: "power-concentrate"
    },
    {
      name: "Warrior Glow",
      category: "Body Oil",
      description: "Radiance born from resilience",
      price: "$52",
      slug: "warrior-glow"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_70%_at_50%_0%,rgba(201,168,96,0.10)_0%,rgba(10,10,10,0)_60%)]" />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-32">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Top Decorative Element */}
          <div className="mb-12 flex items-center gap-4 w-full max-w-md mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
            <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white mb-4">
              OUR COLLECTION
            </h1>
            <p className="font-[var(--font-inter)] text-gray-400 text-sm md:text-base tracking-wide max-w-2xl mx-auto">
              Each product tells a story of strength, courage, and self-made beauty
            </p>
          </div>

          {/* Decorative Center Element */}
          <div className="mb-12 flex items-center gap-3 justify-center">
            <div className="w-12 h-px bg-[#c9a860]"></div>
            <div className="w-1.5 h-1.5 bg-[#c9a860] rotate-45"></div>
            <svg className="w-8 h-8 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <div className="w-1.5 h-1.5 bg-[#c9a860] rotate-45"></div>
            <div className="w-12 h-px bg-[#c9a860]"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div key={index} className="group relative">
                {/* Corner Decorations */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l border-t border-[#c9a860] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r border-t border-[#c9a860] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l border-b border-[#c9a860] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-[#c9a860] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Product Card */}
                <div className="bg-black/35 backdrop-blur-md border border-[#c9a860]/20 p-8 h-full flex flex-col transition-all duration-300 group-hover:border-[#c9a860]/50 group-hover:bg-black/55 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                  {/* Product Image Placeholder */}
                  <div className="mb-6 aspect-square bg-gradient-to-br from-[#c9a860]/12 via-black/40 to-transparent border border-[#c9a860]/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#c9a860]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <p className="font-[var(--font-inter)] text-[#c9a860] text-xs uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
                      {product.name}
                    </h3>
                    <p className="font-[var(--font-inter)] text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#c9a860]/20">
                      <span className="font-[var(--font-inter)] text-[#c9a860] text-lg font-medium">
                        {product.price}
                      </span>
                      <Link 
                        href={`/products/${product.slug}`}
                        className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.2em] text-[#c9a860] border border-[#c9a860]/50 px-3 py-1.5 rounded-full hover:bg-[#c9a860] hover:text-black transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-20">
          {/* Bottom Decorative Element */}
          <div className="flex items-center gap-4 w-full max-w-md mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
            <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 right-12 opacity-20">
        <svg className="w-16 h-16 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-16 opacity-20">
        <svg className="w-12 h-12 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    </div>
  );
}
