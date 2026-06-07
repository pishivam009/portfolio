'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/lib/data'
import clsx from 'clsx'

const levelConfig = {
  expert: {
    label: 'Expert',
    bar: 'w-full',
    color: 'bg-indigo-500',
    pill: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
  },
  proficient: {
    label: 'Proficient',
    bar: 'w-4/5',
    color: 'bg-teal-500',
    pill: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
  },
  working: {
    label: 'Working knowledge',
    bar: 'w-3/5',
    color: 'bg-slate-400',
    pill: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
  },
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
            Verified skills — every item here can be demonstrated in conversation or code.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-4">
            {(Object.entries(levelConfig) as [keyof typeof levelConfig, typeof levelConfig['expert']][]).map(([key, cfg]) => (
              <span key={key} className={clsx('pill text-xs', cfg.pill)}>
                {cfg.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="card p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => {
                  const cfg = levelConfig[skill.level]
                  return (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className={clsx('pill text-[10px] py-0.5 px-2', cfg.pill)}>
                          {cfg.label}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: undefined } : { width: 0 }}
                          transition={{ duration: 0.8, delay: gi * 0.07 + 0.3 }}
                          className={clsx('h-full rounded-full', cfg.color, cfg.bar)}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
