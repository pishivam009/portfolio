'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Shield, Trophy } from 'lucide-react'
import { certifications } from '@/lib/data'

const badgeIcons: Record<string, React.ElementType> = {
  AWS: Shield,
  Oracle: Award,
  Award: Trophy,
}

const badgeColors: Record<string, string> = {
  AWS: 'from-orange-400 to-amber-500',
  Oracle: 'from-red-500 to-rose-600',
  Award: 'from-indigo-500 to-purple-600',
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Certifications & Awards
          </p>
          <h2 className="section-heading">
            Credentials &amp; <span className="gradient-text">recognition</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = badgeIcons[cert.badge] || Award
            const gradient = badgeColors[cert.badge] || 'from-indigo-500 to-teal-500'
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-6 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-1">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* In progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 card p-5 border-dashed border-2 border-slate-200 dark:border-slate-700"
        >
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            In progress
          </p>
          <div className="flex flex-wrap gap-3">
            {['AWS Solutions Architect Associate', 'ACT Certificate in Treasury Fundamentals (if relocating)'].map(
              (cert) => (
                <span key={cert} className="pill-slate text-xs">
                  {cert}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
