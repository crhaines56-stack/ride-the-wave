'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const agenda = [
  {
    time: '0:00',
    label: 'Open Networking',
    desc: 'Grab a drink, meet your neighbors, trade business cards.',
    color: '#06B6D4',
    icon: '👋',
  },
  {
    time: '0:15',
    label: 'Welcome & Mission',
    desc: 'A quick intro from the founders — why we\'re here, who we are, what\'s new.',
    color: '#06B6D4',
    icon: '🎯',
  },
  {
    time: '0:20',
    label: 'Main AI Demo / Talk',
    desc: 'A member volunteer demos an AI tool or shares how they\'ve been using it in their work or life.',
    color: '#22D3EE',
    icon: '🚀',
  },
  {
    time: '0:45',
    label: 'What Are You Working On?',
    desc: '3 members each take 2–3 minutes to share what they\'re experimenting with. Questions welcome.',
    color: '#22D3EE',
    icon: '🧪',
  },
  {
    time: '1:05',
    label: 'Open Q&A / Group Problem Solving',
    desc: 'Bring your AI questions, challenges, or "I saw this thing — does it work?" moments. The whole group helps.',
    color: '#F59E0B',
    icon: '💡',
  },
  {
    time: '1:20',
    label: 'Wrap-Up + Next Speaker Sign-Up',
    desc: 'Quick recap, upcoming events, and sign up to speak or demo at the next meetup.',
    color: '#F59E0B',
    icon: '✅',
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function AgendaSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="agenda" className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#06B6D4] bg-opacity-10 border border-[#06B6D4] border-opacity-30 text-[#06B6D4] text-sm font-medium px-4 py-2 rounded-full mb-6">
            ⏱ 90-Minute Format
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            What to Expect
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Every meeting follows a simple structure that keeps things moving and everyone engaged.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-[36px] top-4 bottom-4 w-px bg-gradient-to-b from-[#06B6D4] via-[#334155] to-[#F59E0B] opacity-30" />

          <div className="space-y-8">
            {agenda.map((item, i) => (
              <FadeIn key={item.time} delay={i * 0.08}>
                <div className="flex gap-5 md:gap-7 items-start">
                  {/* Icon dot */}
                  <div
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl relative z-10"
                    style={{
                      background: `${item.color}18`,
                      border: `1.5px solid ${item.color}40`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 pb-2">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <span
                        className="text-sm font-bold font-mono"
                        style={{ color: item.color }}
                      >
                        {item.time}
                      </span>
                      <h3
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
