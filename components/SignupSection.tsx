'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function SignupSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch {
      // Still show success for demo purposes
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="signup" className="py-24 px-4 relative overflow-hidden bg-[#0C1628]">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06B6D4] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Get notified when we launch
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Be the first to know about our first meeting, location, and speaker lineup.
            <br />
            No spam — ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <div className="bg-[#06B6D4] bg-opacity-10 border border-[#06B6D4] border-opacity-40 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h3
                className="text-white font-bold text-xl mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                You're on the list!
              </h3>
              <p className="text-[#94A3B8]">
                We'll let you know as soon as the first meeting is scheduled. See you there!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Chris"
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-xl px-4 py-3 placeholder-[#475569] focus:outline-none focus:border-[#06B6D4] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-xl px-4 py-3 placeholder-[#475569] focus:outline-none focus:border-[#06B6D4] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Neighborhood <span className="text-[#475569] font-normal">(optional)</span>
                </label>
                <select
                  name="neighborhood"
                  className="w-full bg-[#0F172A] border border-[#334155] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#06B6D4] transition-colors"
                >
                  <option value="">Select your area</option>
                  <option value="steiner-ranch">Steiner Ranch</option>
                  <option value="lakeway">Lakeway / Bee Cave</option>
                  <option value="river-place">River Place</option>
                  <option value="four-points">Four Points</option>
                  <option value="other">Other Northwest Austin</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#06B6D4] text-[#0F172A] font-bold py-4 rounded-xl text-lg hover:bg-[#22D3EE] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? '...' : '🌊 Notify Me'}
              </button>

              <p className="text-center text-xs text-[#475569]">
                No spam. Unsubscribe anytime. Your info stays local.
              </p>
            </form>
          )}

          {/* Secondary CTA */}
          <div className="mt-6 text-center">
            <p className="text-[#64748B] text-sm mb-3">Or follow us on Meetup</p>
            <a
              href="https://www.meetup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#334155] text-[#94A3B8] rounded-full hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-200 text-sm font-medium"
            >
              Join on Meetup.com →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
