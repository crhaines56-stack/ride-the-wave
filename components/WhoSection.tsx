'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const personas = [
  {
    icon: '🏪',
    title: 'Small Business Owners',
    desc: 'Save time, cut costs, and compete with larger players using AI tools built for you.',
  },
  {
    icon: '💼',
    title: 'Freelancers & Consultants',
    desc: 'Do more with less. Deliver better work, faster — without hiring a team.',
  },
  {
    icon: '🧑‍💻',
    title: 'Professionals',
    desc: 'Stay ahead at work. Learn to use AI to accelerate your career before your colleagues do.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Parents & Families',
    desc: 'From homework help to home management, AI can make family life a little easier.',
  },
  {
    icon: '🌅',
    title: 'Retirees',
    desc: 'Curious about what all the AI fuss is about? We\'ll show you the fun, practical stuff.',
  },
  {
    icon: '🤔',
    title: 'Just Curious',
    desc: 'You don\'t need a reason. If you\'re curious about AI\'s role in the world, pull up a chair.',
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function WhoSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="who" className="py-24 px-4 bg-[#0C1628]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            This is for you if...
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {personas.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className="group flex gap-4 bg-[#1E293B] rounded-2xl p-5 border border-[#334155] hover:border-[#06B6D4] hover:border-opacity-40 transition-all duration-300 h-full">
                <div className="text-3xl flex-shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <h3
                    className="text-white font-bold mb-1"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-[#F59E0B] bg-opacity-10 border border-[#F59E0B] border-opacity-30 text-[#F59E0B] rounded-2xl px-6 py-4 max-w-xl">
              <span className="text-2xl">✨</span>
              <p className="text-sm text-left">
                <strong className="block mb-0.5">Everyone is welcome.</strong>
                From "what's ChatGPT?" to daily AI power users — all experience levels belong here.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
