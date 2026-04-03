import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#080E1A] border-t border-[#1E293B] py-12 px-4">
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

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748B] hover:text-[#06B6D4] text-sm transition-colors"
              >
                <span>👥</span> Facebook Group
              </a>
              <a
                href="https://nextdoor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748B] hover:text-[#06B6D4] text-sm transition-colors"
              >
                <span>🏘️</span> Nextdoor
              </a>

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
