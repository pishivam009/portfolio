'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { summary } from '@/lib/data'
import { GraduationCap, Briefcase, Trophy } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: Briefcase,
      label: 'Experience',
      value: '5 years',
      sub: 'ION Group · Aug 2021–Present',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech ECE',
      sub: 'VIT · 9.2 CGPA · 2021',
    },
    {
      icon: Trophy,
      label: 'Performance',
      value: '5/5 (2024)',
      sub: '"Goes far beyond expectations"',
    },
  ]

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Text */}
          <div>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="section-heading mb-6">
              Not just an engineer —<br />
              <span className="gradient-text">a team builder.</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {summary.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Highlights + fact cards */}
          <div className="space-y-4">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="card p-5 flex items-center gap-4 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                    <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                      {h.label}
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">{h.value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{h.sub}</p>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-5 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-950/50 dark:to-teal-950/50 border-indigo-200/50 dark:border-indigo-800/50"
            >
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                Domain specialisation
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Bank connectivity · ISO 20022 · SWIFT · TMS integration · SaaS operations
                across FinTech enterprise clients
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
