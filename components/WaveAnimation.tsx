'use client'

export default function WaveAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep ocean gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0C2340] to-[#0F172A]" />

      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '45%' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Back wave - slowest, most transparent */}
        <path
          fill="#06B6D4"
          fillOpacity="0.04"
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{
            animation: 'waveMove1 12s ease-in-out infinite',
          }}
        />
        {/* Mid wave */}
        <path
          fill="#06B6D4"
          fillOpacity="0.07"
          d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{
            animation: 'waveMove2 9s ease-in-out infinite',
          }}
        />
        {/* Front wave - fastest, most opaque */}
        <path
          fill="#06B6D4"
          fillOpacity="0.10"
          d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,256C672,267,768,277,864,266.7C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{
            animation: 'waveMove3 6s ease-in-out infinite',
          }}
        />
      </svg>

      {/* Shimmer/glint effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)',
        }}
      />

      <style>{`
        @keyframes waveMove1 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          25% { transform: translateX(-3%) scaleY(1.05); }
          50% { transform: translateX(-6%) scaleY(0.97); }
          75% { transform: translateX(-3%) scaleY(1.03); }
        }
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          33% { transform: translateX(4%) scaleY(1.04); }
          66% { transform: translateX(-4%) scaleY(0.96); }
        }
        @keyframes waveMove3 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(5%) scaleY(1.06); }
        }
      `}</style>
    </div>
  )
}
