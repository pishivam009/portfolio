import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Skills />
      <Certifications />
      <Contact />
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-500">
        <p>© 2026 Piyush Shivam · Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </main>
  )
}
