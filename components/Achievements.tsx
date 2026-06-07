'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Clock, Zap, ArrowRight, BookOpen, Star } from 'lucide-react'
import { achievements } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Clock,
  Zap,
  ArrowRight,
  BookOpen,
  Star,
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Key Achievements
          </p>
          <h2 className="section-heading">
            Impact that&apos;s{' '}
            <span className="gradient-text">measured, not claimed</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every number here is confirmed and defensible. No inflated estimates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Star
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {a.metric}
                      </span>
                      {a.unit && (
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
                          {a.unit}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                      {a.label}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {a.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
