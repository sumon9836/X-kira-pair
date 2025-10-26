
'use client';

import Link from 'next/link';

export default function BlockedPage() {
  const developerWhatsApp = "+917003815486";
  const whatsappLink = `https://wa.me/${developerWhatsApp.replace(/[^0-9]/g, '')}?text=Hello,%20I%20am%20contacting%20you%20regarding%20my%20blocked%20access%20to%20the%20WhatsApp%20Bot%20Dashboard.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-deep via-black-primary to-black-secondary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-primary/10 via-transparent to-blue-primary/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 backdrop-blur-xl bg-black/60 border-2 border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center shadow-2xl">
        {/* Icon */}
        <div className="mb-8 relative">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-pink-primary to-pink-secondary rounded-full flex items-center justify-center border-4 border-pink-primary/30 shadow-lg shadow-pink-primary/50 animate-bounce">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"></path>
              <circle cx="12" cy="12" r="9" strokeWidth="2.5"></circle>
            </svg>
          </div>
          
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-pink-primary via-pink-light to-blue-primary bg-clip-text text-transparent animate-pulse">
            Access Blocked
          </h1>
          
          <div className="space-y-6 text-blue-text">
            <p className="text-xl md:text-2xl font-bold text-pink-light">
              You Are Blocked
            </p>
            <div className="p-6 bg-gradient-to-br from-pink-primary/10 to-blue-primary/10 border border-pink-primary/30 rounded-2xl backdrop-blur-sm">
              <p className="text-lg md:text-xl font-semibold text-white mb-3">
                <i className="fas fa-exclamation-triangle text-pink-primary mr-2"></i>
                Reason for Block:
              </p>
              <p className="text-base md:text-lg text-gray-light leading-relaxed">
                You've been banned for having toxic behavior with bot developers or anyone in the community.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-6 mt-10">
          <div className="p-6 bg-gradient-to-br from-blue-primary/10 to-pink-primary/10 border border-blue-primary/30 rounded-2xl backdrop-blur-sm">
            <p className="text-blue-primary text-base md:text-lg font-semibold mb-4">
              <i className="fas fa-info-circle mr-2"></i>
              If you believe this is an error or would like to appeal this decision:
            </p>
            <p className="text-gray-light text-sm md:text-base mb-6">
              Please contact the developer to discuss your situation
            </p>

            {/* WhatsApp Contact Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30 group w-full md:w-auto"
            >
              <i className="fab fa-whatsapp text-3xl group-hover:animate-bounce"></i>
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-wider text-green-100">Contact Developer</div>
                <div className="text-xl font-black">{developerWhatsApp}</div>
              </div>
              <i className="fas fa-arrow-right text-xl group-hover:translate-x-2 transition-transform"></i>
            </a>

            <p className="text-xs text-gray-light mt-4 italic">
              <i className="fas fa-hand-point-up mr-1"></i>
              Tap to open WhatsApp and message the developer directly
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-primary/20 to-pink-primary/20 border-2 border-blue-primary/40 text-blue-primary hover:text-white rounded-xl hover:bg-gradient-to-r hover:from-blue-primary/40 hover:to-pink-primary/40 transition-all duration-300 font-semibold text-base md:text-lg group"
            >
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-medium italic">
            <i className="fas fa-shield-alt mr-1"></i>
            This restriction is in place to maintain a positive and respectful community environment.
          </p>
        </div>
      </div>
    </div>
  );
}
