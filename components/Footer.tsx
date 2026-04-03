'use client'

import Logo from './Logo'
import { useState } from 'react'

export default function Footer() {
  const [toast, setToast] = useState(false)

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <footer className="bg-[#080E1A] border-t border-[#1E293B] py-12 px-4 relative">
      {/* Coming soon toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1E293B] border border-[#06B6D4] border-opacity-40 text-white text-sm px-6 py-3 rounded-full shadow-lg shadow-cyan-500/10 transition-all">
          🌊 Coming soon — stay tuned!
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo + mission */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
              To ensure our community rides the AI wave and is not crushed by it.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Connect
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleComingSoon}
                className="flex items-center gap-2 text-[#64748B] hover:text-[#06B6D4] text-sm transition-colors"
              >
                <span>👥</span> Facebook Group
              </button>
              <button
                onClick={handleComingSoon}
                className="flex items-center gap-2 text-[#64748B] hover:text-[#06B6D4] text-sm transition-colors"
              >
                <span>🏘️</span> Nextdoor
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#334155] text-xs">
            Northwest Austin • Free • Monthly • 🌊
          </p>
          <p className="text-[#334155] text-xs">
            © {new Date().getFullYear()} Ride the Wave AI. Made with ❤️ in northwest Austin.
          </p>
        </div>
      </div>
    </footer>
  )
}
