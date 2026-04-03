'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Avatar/visual */}
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative">
                {/* Avatar placeholder */}
                <div
                  className="w-48 h-48 rounded-3xl flex items-center justify-center text-7xl"
                  style={{
                    background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
                    border: '2px solid rgba(6,182,212,0.3)',
                  }}
                >
                  🌊
                </div>
                {/* Forge Agency badge */}
                <div className="absolute -bottom-3 -right-3 bg-[#F59E0B] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Forge Agency
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-[#06B6D4] bg-opacity-10 border border-[#06B6D4] border-opacity-30 text-[#06B6D4] text-sm font-medium px-4 py-2 rounded-full mb-6">
                👋 About the Founder
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Chris Haines
              </h2>

              <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                <p>
                  Chris is a northwest Austin resident, father of four, and founder of{' '}
                  <a
                    href="https://forgeagency.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F59E0B] hover:text-[#FCD34D] underline underline-offset-2 transition-colors"
                  >
                    Forge Agency
                  </a>{' '}
                  — an AI consulting firm helping small businesses harness the power of AI without the overwhelm.
                </p>

                <p>
                  He started Ride the Wave AI because he kept having the same conversation with neighbors at the coffee shop, at school pickup, at neighborhood events:
                </p>

                <blockquote className="border-l-2 border-[#06B6D4] pl-4 text-white italic">
                  "I know AI is important, but I don't know where to start."
                </blockquote>

                <p>
                  This meetup is his answer to that. Not a product pitch, not a tech conference — just neighbors getting together once a month to figure it out together.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://forgeagency.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[#F59E0B] border border-[#F59E0B] border-opacity-40 px-4 py-2 rounded-full hover:bg-[#F59E0B] hover:bg-opacity-10 transition-all duration-200"
                >
                  ⚡ forgeagency.ai
                </a>
                <a
                  href="#signup"
                  className="flex items-center gap-2 text-sm font-medium text-[#06B6D4] border border-[#06B6D4] border-opacity-40 px-4 py-2 rounded-full hover:bg-[#06B6D4] hover:bg-opacity-10 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  🌊 Join the Meetup
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
