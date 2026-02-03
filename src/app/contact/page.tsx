export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#c9a860] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9a860] rounded-full blur-[150px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32">
        {/* Top Decorative Element */}
        <div className="mb-12 flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white mb-4">
            CONTACT US
          </h1>
          <p className="font-[var(--font-inter)] text-gray-400 text-sm md:text-base tracking-wide">
            We'd love to hear from you
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l border-t border-[#c9a860]"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-[#c9a860]"></div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-[#c9a860]/20 p-8">
                <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#c9a860] mb-6 tracking-wide">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 font-[var(--font-inter)]">
                  <div>
                    <h3 className="text-[#c9a860] text-sm uppercase tracking-wider mb-2">Email</h3>
                    <p className="text-gray-300">contact@valorabyjev.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#c9a860] text-sm uppercase tracking-wider mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#c9a860] text-sm uppercase tracking-wider mb-2">Address</h3>
                    <p className="text-gray-300">
                      123 Luxury Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#c9a860] text-sm uppercase tracking-wider mb-2">Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l border-t border-[#c9a860]"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-[#c9a860]"></div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-[#c9a860]/20 p-8">
              <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#c9a860] mb-6 tracking-wide">
                Send a Message
              </h2>
              
              <form className="space-y-5 font-[var(--font-inter)]">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-[#c9a860]/30 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c9a860] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-[#c9a860]/30 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c9a860] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black/50 border border-[#c9a860]/30 rounded px-4 py-3 text-white focus:outline-none focus:border-[#c9a860] transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#c9a860] text-black font-medium py-3 px-6 rounded uppercase tracking-wider hover:bg-[#e5d5a8] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
          <div className="w-2 h-2 bg-[#c9a860] rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a860] to-transparent"></div>
        </div>
      </main>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 right-12 opacity-20">
        <svg className="w-16 h-16 text-[#c9a860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    </div>
  );
}
