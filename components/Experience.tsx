'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react'
import { roles, type Role } from '@/lib/data'

function RoleCard({ role, index }: { role: Role; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const headingId = `role-heading-${role.id}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div
        aria-hidden="true"
        className={`absolute left-0 top-6 w-3 h-3 rounded-full border-2 ${
          role.type === 'current'
            ? 'bg-indigo-500 border-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]'
            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
        }`}
      />

      <div className={`card transition-all duration-200 hover:shadow-md ${
        role.type === 'current' ? 'border-indigo-200 dark:border-indigo-800/60' : ''
      }`}>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`role-content-${role.id}`}
          className="w-full text-left p-6 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {role.type === 'current' && (
                  <span className="pill bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 text-xs gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
                    Current
                  </span>
                )}
                {role.id === 'coral-lead' && (
                  <span className="pill bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300 text-xs gap-1">
                    <Sparkles size={10} aria-hidden="true" />
                    Self-initiated
                  </span>
                )}
              </div>

              <h3
                id={headingId}
                className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1"
              >
                {role.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Building2 size={13} aria-hidden="true" />
                <span>{role.company}</span>
                <span aria-hidden="true">·</span>
                <span>{role.period}</span>
              </div>
            </div>

            <span className="flex-shrink-0 text-slate-400 dark:text-slate-500 mt-1" aria-hidden="true">
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 text-left">{role.tagline}</p>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`role-content-${role.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              role="region"
              aria-labelledby={headingId}
            >
              <div className="px-6 pb-6">
                {role.highlight && (
                  <div className="mb-4 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/50">
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                      {role.highlight}
                    </p>
                  </div>
                )}

                <ul className="space-y-2.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 mt-2" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Experience
          </p>
          <h2 className="section-heading">
            5 years · one company ·{' '}
            <span className="gradient-text">four distinct roles</span>
          </h2>
          <p className="section-subheading">
            From QA automation to founding a TechOps team to leading enterprise migrations —
            a deliberate progression at each step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Work experience timeline">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-6 bottom-6 w-0.5 timeline-line rounded-full" aria-hidden="true" />

          <div className="space-y-6">
            {roles.map((role, i) => (
              <div key={role.id} role="listitem">
                <RoleCard role={role} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
