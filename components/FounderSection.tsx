'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#06B6D4] bg-opacity-10 border border-[#06B6D4] border-opacity-30 text-[#06B6D4] text-sm font-medium px-4 py-2 rounded-full mb-6">
              👋 About the Founders
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Your neighbors, leading the way.
            </h2>
          </div>

          <div className="bg-[#0F1F35] border border-[#1E293B] rounded-2xl p-8 md:p-10">
            {/* Founders row */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
                    border: '2px solid rgba(6,182,212,0.3)',
                  }}
                >
                  🌊
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Chris Haines</span>
              </div>
              <div className="text-[#334155] text-2xl font-light">&</div>
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
                    border: '2px solid rgba(6,182,212,0.3)',
                  }}
                >
                  ⚡
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Doug Vigliano</span>
              </div>
              <div className="text-[#334155] text-2xl font-light">&</div>
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
                    border: '2px solid rgba(6,182,212,0.3)',
                  }}
                >
                  🌊
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Lynn Duke</span>
              </div>
            </div>

            {/* Shared story */}
            <div className="space-y-4 text-[#94A3B8] leading-relaxed">
              <p>
                Chris, Doug, and Lynn are Hill Country neighbors who kept having the same conversation — at the coffee shop, at school pickup, at neighborhood events:
              </p>
              <blockquote className="border-l-2 border-[#06B6D4] pl-4 text-white italic">
                "I know AI is important, but I don't know where to start."
              </blockquote>
              <p>
                So they decided to do something about it. Ride the Wave AI is their answer — not a product pitch, not a tech conference. Just neighbors getting together once a month to figure it out together.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#signup"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#06B6D4] border border-[#06B6D4] border-opacity-40 px-6 py-3 rounded-full hover:bg-[#06B6D4] hover:bg-opacity-10 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                🌊 Join the Meetup
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
