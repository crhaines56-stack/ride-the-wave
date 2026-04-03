'use client'

import { motion } from 'framer-motion'
import WaveAnimation from './WaveAnimation'
import Logo from './Logo'

export default function HeroSection() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <WaveAnimation />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10"
      >
        <Logo size="sm" />
        <button
          onClick={scrollToSignup}
          className="text-sm font-medium text-[#06B6D4] border border-[#06B6D4] border-opacity-50 px-4 py-2 rounded-full hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all duration-200"
        >
          Join the Wave
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-[#06B6D4] bg-opacity-10 border border-[#06B6D4] border-opacity-30 text-[#06B6D4] text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span>🌊</span>
          <span>Northwest Austin • Free • Monthly</span>
        </motion.div>

        {/* Logo Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Logo size="lg" />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Ride the wave.{' '}
          <span className="text-[#06B6D4]">Don't get buried by it.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10"
        >
          A free monthly AI meetup for Steiner Ranch, Lakeway, River Place &amp; Four Points.
          <br className="hidden md:block" />
          Neighbors helping neighbors figure out AI — together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToSignup}
            className="group relative px-8 py-4 bg-[#06B6D4] text-[#0F172A] font-bold rounded-full text-lg hover:bg-[#22D3EE] transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              🌊 Join the Wave
            </span>
          </button>
          <a
            href="https://www.meetup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white border-opacity-20 text-white font-medium rounded-full text-lg hover:border-opacity-50 hover:bg-white hover:bg-opacity-5 transition-all duration-200"
          >
            View on Meetup.com
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-[#475569] text-xs">
            <span>scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#475569] to-transparent animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
