'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EventSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="event" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-[0.03]" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-[#1E293B] rounded-3xl border border-[#334155] overflow-hidden"
        >
          {/* Top banner */}
          <div className="bg-gradient-to-r from-[#06B6D4] to-[#0891B2] px-8 py-5 flex items-center gap-3">
            <span className="text-2xl">🌊</span>
            <div>
              <div className="text-[#0F172A] font-bold text-sm uppercase tracking-wider">
                Northwest Austin
              </div>
              <div className="text-[#0F172A] text-xs opacity-70">Rotating venues — TBD</div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F59E0B] bg-opacity-15 border border-[#F59E0B] border-opacity-30 text-[#F59E0B] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  ⚡ Coming Soon
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  First Meeting
                </h2>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#94A3B8]">
                    <span className="text-[#06B6D4] text-lg">📅</span>
                    <span>Second Tuesday of each month</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#94A3B8]">
                    <span className="text-[#06B6D4] text-lg">🕡</span>
                    <span>6:30 – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#94A3B8]">
                    <span className="text-[#06B6D4] text-lg">📍</span>
                    <span>Northwest Austin (venue TBD)</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#94A3B8]">
                    <span className="text-[#06B6D4] text-lg">💰</span>
                    <span>Always free</span>
                  </div>
                </div>


              </div>

              {/* Right: visual card */}
              <div className="relative">
                <div
                  className="rounded-2xl p-8 text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
                    border: '1px solid rgba(6,182,212,0.2)',
                  }}
                >
                  {/* Animated wave dots */}
                  <div className="text-7xl mb-4 animate-bounce">🌊</div>
                  <p
                    className="text-white font-bold text-xl mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Steiner Ranch
                  </p>
                  <p className="text-[#64748B] text-sm mb-1">Lakeway • River Place</p>
                  <p className="text-[#64748B] text-sm">Four Points • Northwest Austin</p>

                  <div className="mt-6 pt-6 border-t border-[#1E293B]">
                    <p className="text-[#06B6D4] font-bold text-sm">
                      "Your neighbors are already using AI.<br />
                      Let's figure it out together."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
