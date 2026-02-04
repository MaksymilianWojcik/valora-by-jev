 "use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_70%_at_50%_0%,rgba(201,168,96,0.10)_0%,rgba(10,10,10,0)_60%)]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <div className="text-center max-w-xl">
          <div className="mb-8 flex items-center gap-4 w-full max-w-md mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
            <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          </div>

          <h1 className="font-[var(--font-cormorant)] text-6xl md:text-7xl font-light text-white tracking-[0.2em] mb-4">
            404
          </h1>
          <p className="font-[var(--font-inter)] text-gray-400 text-base md:text-lg mb-8">
            This page couldn't be found. Let's return to something beautiful.
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center border border-[#c9a860]/60 px-6 py-3 rounded-full text-[#c9a860] uppercase tracking-[0.2em] text-xs hover:bg-[#c9a860] hover:text-black transition-colors"
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
}
