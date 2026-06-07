'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'from-indigo-500 to-violet-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/piyush-shivam',
      href: siteConfig.linkedin,
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: `${siteConfig.location} · Relocation open`,
      href: undefined,
      color: 'from-teal-400 to-teal-600',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Contact
          </p>
          <h2 className="section-heading mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            I&apos;m actively exploring roles in FinTech SaaS — Implementation Engineer,
            Technical Operations, Automation Engineer, and Solutions Engineer.
            Open to India and international opportunities (Singapore, UK, Netherlands).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {links.map((link) => {
            const Icon = link.icon
            const content = (
              <div className="card p-5 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group w-full text-left">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
                    {link.value}
                  </p>
                </div>
                {link.href && (
                  <ArrowRight
                    size={14}
                    className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                {content}
              </a>
            ) : (
              <div key={link.label}>{content}</div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card p-8 text-center bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-950/50 dark:to-teal-950/50 border-indigo-200/50 dark:border-indigo-800/50"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Ready to discuss a role?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Whether it&apos;s an implementation, operations, or automation engineering role —
            I&apos;d love to hear about the problem you&apos;re solving.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              <Mail size={16} aria-hidden="true" />
              Send me an email
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
