export default function Faq() {
  const faqs = [
    {
      question: "What is VALORA?",
      answer:
        "VALORA is a luxury beauty brand for women who built themselves from nothing. Every product celebrates courage, ambition, and self-made success."
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Yes. VALORA products are cruelty-free and never tested on animals."
    },
    {
      question: "When will online purchasing be available?",
      answer:
        "We are preparing for online purchasing. For now, please contact us for availability and launch updates."
    },
    {
      question: "Do you ship internationally?",
      answer:
        "International shipping will be available at launch. We will announce regions and rates closer to release."
    },
    {
      question: "How can I stay updated?",
      answer:
        "Follow us on social media or reach out through the Contact page to get the latest updates."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_70%_at_50%_0%,rgba(201,168,96,0.10)_0%,rgba(10,10,10,0)_60%)]" />

      <main className="relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex items-center gap-4 w-full max-w-md mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
            <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white mb-4">
              FREQUENTLY ASKED
            </h1>
            <p className="font-[var(--font-inter)] text-gray-400 text-sm md:text-base tracking-wide">
              Answers to the most common questions about VALORA
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/35 backdrop-blur-md border border-[#c9a860]/20 p-6 md:p-8 shadow-[0_0_50px_rgba(201,168,96,0.08)]"
              >
                <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#c9a860] mb-3 tracking-wide">
                  {faq.question}
                </h2>
                <p className="font-[var(--font-inter)] text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
