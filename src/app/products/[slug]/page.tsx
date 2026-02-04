import { notFound } from 'next/navigation';
import Link from 'next/link';

const products = {
  'valora-red': {
    name: "Valora Red",
    category: "Lipstick",
    description: "Bold, unapologetic color that speaks volumes",
    price: "$45",
    fullDescription: "Valora Red is more than just a lipstick—it's a statement. Inspired by the courage it takes to stand out, this bold red shade is designed for women who refuse to blend in. With a rich, long-lasting formula that glides on smoothly, Valora Red delivers intense color payoff and a luxurious satin finish. Whether you're conquering the boardroom or owning the night, this is your signature shade of confidence.",
    features: [
      "Long-lasting formula - up to 8 hours",
      "Rich, pigmented color in one swipe",
      "Satin finish with comfortable wear",
      "Infused with nourishing oils",
      "Cruelty-free and vegan"
    ]
  },
  'brave-flush': {
    name: "Brave Flush",
    category: "Lip Tint",
    description: "Subtle courage in every application",
    price: "$32",
    fullDescription: "Brave Flush celebrates the quiet strength within. This lip tint offers a natural, buildable flush of color that adapts to your unique chemistry. Perfect for the woman who leads with grace, it provides a soft, ethereal finish that enhances your natural beauty. The lightweight formula feels like nothing on your lips while delivering all-day color that moves with you.",
    features: [
      "Buildable, customizable color",
      "Lightweight, barely-there feel",
      "Natural-looking flush",
      "Hydrating formula with vitamin E",
      "Long-wearing without drying"
    ]
  },
  'fearless': {
    name: "Fearless",
    category: "Perfume",
    description: "A scent that commands attention",
    price: "$120",
    fullDescription: "Fearless is the signature scent of self-made success. Opening with bold notes of bergamot and black pepper, it evolves into a heart of jasmine and leather, settling into a warm base of amber and sandalwood. This sophisticated fragrance embodies the journey from survival to triumph—complex, powerful, and unforgettable. Wear it as your invisible armor.",
    features: [
      "Top notes: Bergamot, Black Pepper, Pink Grapefruit",
      "Heart notes: Jasmine, Leather, Iris",
      "Base notes: Amber, Sandalwood, Vanilla",
      "Eau de Parfum - 50ml",
      "Long-lasting 8-12 hour wear"
    ]
  },
  'steel-rose': {
    name: "Steel Rose",
    category: "Soap",
    description: "Strength wrapped in elegance",
    price: "$28",
    fullDescription: "Steel Rose combines the toughness of steel with the delicacy of a rose—just like you. This luxurious soap cleanses deeply while maintaining your skin's natural moisture barrier. Infused with rose extract and activated charcoal, it purifies without stripping, leaving your skin feeling refreshed, balanced, and resilient. Turn your daily cleanse into a ritual of self-care.",
    features: [
      "Activated charcoal for deep cleansing",
      "Rose extract for hydration",
      "Gentle enough for daily use",
      "Free from sulfates and parabens",
      "Handcrafted with natural ingredients"
    ]
  },
  'soft-armor': {
    name: "Soft Armor",
    category: "Lotion",
    description: "Protection that feels like luxury",
    price: "$38",
    fullDescription: "Soft Armor is your daily shield against the elements. This rich, fast-absorbing lotion creates an invisible protective layer on your skin while delivering intense hydration that lasts. Formulated with shea butter, ceramides, and antioxidants, it strengthens your skin's natural barrier, keeping it soft, smooth, and resilient through whatever the day brings.",
    features: [
      "24-hour hydration",
      "Fast-absorbing, non-greasy formula",
      "Shea butter and ceramides",
      "Antioxidant protection",
      "Suitable for all skin types"
    ]
  },
  'power-concentrate': {
    name: "Power Concentrate",
    category: "Serum",
    description: "Potent beauty from within",
    price: "$85",
    fullDescription: "Power Concentrate is pure, concentrated strength for your skin. This advanced serum combines retinol, vitamin C, and hyaluronic acid in a potent formula that targets multiple skin concerns at once. It brightens, firms, and smooths, revealing your skin's true potential. For women who demand results, this is beauty that works as hard as you do.",
    features: [
      "Triple-action formula: retinol, vitamin C, hyaluronic acid",
      "Brightens and evens skin tone",
      "Reduces fine lines and wrinkles",
      "Boosts collagen production",
      "Lightweight, fast-absorbing texture"
    ]
  },
  'warrior-glow': {
    name: "Warrior Glow",
    category: "Body Oil",
    description: "Radiance born from resilience",
    price: "$52",
    fullDescription: "Warrior Glow celebrates the beauty of your journey. This luxurious body oil blends precious oils—argan, jojoba, and rosehip—to nourish deeply and create a luminous, golden sheen on your skin. It's not just about looking radiant; it's about honoring the strength and resilience that brought you here. Massage it in and let your inner light shine through.",
    features: [
      "Blend of argan, jojoba, and rosehip oils",
      "Creates a natural, luminous glow",
      "Deep nourishment for dry skin",
      "Subtle golden shimmer",
      "Absorbs quickly without greasiness"
    ]
  }
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_70%_at_50%_0%,rgba(201,168,96,0.10)_0%,rgba(10,10,10,0)_60%)]" />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/products" 
              className="font-[var(--font-inter)] text-sm text-gray-400 hover:text-[#c9a860] transition-colors"
            >
              ← Back to Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-[#c9a860]"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-[#c9a860]"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-[#c9a860]"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-[#c9a860]"></div>
              
              <div className="aspect-square bg-gradient-to-br from-[#c9a860]/12 via-black/40 to-transparent border border-[#c9a860]/30 flex items-center justify-center shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <svg className="w-32 h-32 text-[#c9a860]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-black/35 backdrop-blur-md border border-[#c9a860]/20 p-8 shadow-[0_0_60px_rgba(201,168,96,0.08)]">
              <p className="font-[var(--font-inter)] text-[#c9a860] text-sm uppercase tracking-wider mb-3">
                {product.category}
              </p>
              <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
                {product.name}
              </h1>
              <p className="font-[var(--font-inter)] text-gray-400 text-lg mb-6">
                {product.description}
              </p>
              
              <div className="mb-8">
                <span className="font-[var(--font-cormorant)] text-4xl text-[#c9a860] font-light">
                  {product.price}
                </span>
              </div>

              <div className="h-px bg-gradient-to-r from-[#c9a860] via-[#c9a860]/50 to-transparent mb-8"></div>

              {/* Full Description */}
              <div className="mb-8">
                <h2 className="font-[var(--font-cormorant)] text-2xl text-white mb-4 tracking-wide">
                  About This Product
                </h2>
                <p className="font-[var(--font-inter)] text-gray-300 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-[var(--font-cormorant)] text-2xl text-white mb-4 tracking-wide">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="font-[var(--font-inter)] text-gray-300 flex items-start">
                      <span className="text-[#c9a860] mr-3">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-gradient-to-r from-[#c9a860] via-[#c9a860]/50 to-transparent mb-8"></div>

              {/* Note about purchasing */}
              <p className="font-[var(--font-inter)] text-sm text-gray-500 italic">
                Online purchasing coming soon. Contact us for availability.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 left-12 opacity-20">
        <svg className="w-16 h-16 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    </div>
  );
}
