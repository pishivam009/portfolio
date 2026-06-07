'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, ChevronDown, Linkedin, FileText } from 'lucide-react'
import Image from 'next/image'
import { siteConfig, heroTagline, heroStats } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-gradient pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pill-indigo mb-6 inline-flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse self-center" aria-hidden="true" />
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-6"
          >
            Piyush{' '}
            <span className="gradient-text">Shivam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-4"
          >
            Implementation Engineer · FinTech SaaS · Bank Connectivity
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl"
          >
            {heroTagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn Profile
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
              <Mail size={16} aria-hidden="true" />
              Get in Touch
            </a>
            <a href="#contact" className="btn-secondary">
              <FileText size={16} aria-hidden="true" />
              View Resume
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500 dark:text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-indigo-500" aria-hidden="true" />
              {siteConfig.location}
            </span>
            <span className="hidden sm:block" aria-hidden="true">·</span>
            <span className="text-slate-400 dark:text-slate-500">{siteConfig.openToRelocation}</span>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-shrink-0 justify-center"
        >
          <div className="relative w-64 h-64 xl:w-72 xl:h-72">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 blur-2xl opacity-25" aria-hidden="true" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl ring-1 ring-indigo-500/30">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/headshot.jpg`}
                alt="Piyush Shivam — Implementation Engineer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 288px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pb-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" role="list" aria-label="Career highlights">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="card p-4 text-center hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {stat.value}
                <span className="text-sm font-normal text-slate-400 ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#achievements"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll to achievements"
      >
        <ChevronDown size={24} aria-hidden="true" />
      </a>
    </section>
  )
}
