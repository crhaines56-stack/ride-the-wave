'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const founders = [
  {
    name: 'Chris Haines',
    emoji: '🌊',
    bio: 'Chris is a northwest Austin resident who started Ride the Wave because he kept having the same conversation with neighbors at the coffee shop, at school pickup, at neighborhood events:',
    quote: '"I know AI is important, but I don\'t know where to start."',
  },
  {
    name: 'Doug Vigliano',
    emoji: '⚡',
    bio: 'Doug is a northwest Austin resident and co-founder of Ride the Wave AI. He brings a passion for helping his community understand and apply AI in practical, meaningful ways.',
    quote: null,
  },
]

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto" ref={ref}>
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

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#0F1F35] border border-[#1E293B] rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)',
                      border: '2px solid rgba(6,182,212,0.3)',
                    }}
                  >
                    {founder.emoji}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {founder.name}
                  </h3>
                </div>

                <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                  <p>{founder.bio}</p>
                  {founder.quote && (
                    <blockquote className="border-l-2 border-[#06B6D4] pl-4 text-white italic">
                      {founder.quote}
                    </blockquote>
                  )}
                  {!founder.quote && (
                    <p>This meetup is their answer — not a product pitch, not a tech conference. Just neighbors getting together once a month to figure it out together.</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
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
        </motion.div>
      </div>
    </section>
  )
}
