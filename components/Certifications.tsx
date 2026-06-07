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
                  aria-hidden="true"
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
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Next cert — framed as a goal, not a gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-indigo-950/30 dark:to-teal-950/30 border border-indigo-100 dark:border-indigo-900/50"
        >
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
            Next: AWS Solutions Architect Associate
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Advancing from Cloud Practitioner to Solutions Architect — building on 5 years of AWS OpenSearch, CloudWatch, and Boto3 usage in production.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
