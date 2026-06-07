'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Activity, Settings, BarChart2, Building2, Users } from 'lucide-react'
import { skillGroups } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Code,
  Activity,
  Settings,
  BarChart: BarChart2,
  Building: Building2,
  Users,
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Skills
          </p>
          <h2 className="section-heading">
            Technical depth +{' '}
            <span className="gradient-text">FinTech domain</span>
          </h2>
          <p className="section-subheading">
            Every skill here is demonstrated in production — not self-assessed from a course.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.07 }}
                className="card p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
