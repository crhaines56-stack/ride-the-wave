export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg', subtext: 'text-base' },
    md: { icon: 40, text: 'text-2xl', subtext: 'text-xl' },
    lg: { icon: 56, text: 'text-4xl', subtext: 'text-3xl' },
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      {/* Wave SVG icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#06B6D4" fillOpacity="0.15" />
        <path
          d="M4 22C6.5 18, 10 16, 13 20C16 24, 20 16, 23 20C26 24, 30 18, 36 22"
          stroke="#06B6D4"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M4 27C6.5 23, 10 21, 13 25C16 29, 20 21, 23 25C26 29, 30 23, 36 27"
          stroke="#06B6D4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M4 17C6.5 13, 10 11, 13 15C16 19, 20 11, 23 15C26 19, 30 13, 36 17"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      </svg>

      {/* Wordmark */}
      <div className="leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`${s.text} font-bold text-white tracking-tight`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Ride the Wave
          </span>
          <span
            className={`${s.subtext} font-bold text-[#06B6D4]`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            AI
          </span>
        </div>
      </div>
    </div>
  )
}
