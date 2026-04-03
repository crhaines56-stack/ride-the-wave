'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    icon: '🙌',
    title: 'No Tech Background Needed',
    desc: 'We meet people where they are. Whether you\'ve never touched ChatGPT or you\'re already experimenting — there\'s a seat at the table for you.',
  },
  {
    icon: '🛠️',
    title: 'Real Tools, Real Results',
    desc: 'No fluff, no hype. Every session focuses on AI tools you can actually use in your business or daily life — this week, not someday.',
  },
  {
    icon: '🏘️',
    title: 'Neighbors Helping Neighbors',
    desc: 'This is your community. We learn from each other, share what\'s working, and figure out the hard stuff together. No gatekeeping.',
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C2340] to-transparent opacity-50" />

      <div className="relative max-w-5xl mx-auto">
        {/* Big quote */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block text-[#06B6D4] text-opacity-60 text-6xl font-serif mb-4">"</div>
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Where community meets{' '}
              <span className="text-[#06B6D4]">competitive advantage.</span>
            </blockquote>
            <div className="inline-block text-[#06B6D4] text-opacity-60 text-6xl font-serif mt-2">"</div>
          </div>
        </FadeIn>

        {/* Why this exists */}
        <FadeIn delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
              AI is moving fast — faster than most of us can keep up with. And if you're a small business owner, a freelancer, or just a curious neighbor in northwest Austin, it can feel overwhelming.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Ride the Wave AI exists to change that. We meet monthly to share what's working, demo real tools, and help each other navigate this shift — practically, together, without the jargon.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.1}>
              <div className="group bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#06B6D4] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3
                  className="text-white font-bold text-lg mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
