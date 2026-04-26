import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Infancia', href: '#infancia' },
  { label: 'Barcelona', href: '#barcelona' },
  { label: 'Nápoli', href: '#napoli' },
  { label: 'Mundial 86', href: '#mundial86' },
  { label: 'Despedida', href: '#despedida' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (event, href) => {
    event.preventDefault()

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) return

    const navOffset = 86
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })

    setActiveHref(href)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/88 backdrop-blur-md border-b border-gold/20 shadow-[0_14px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[74px]">
          <a
            href="#hero"
            onClick={(event) => handleNavClick(event, '#hero')}
            className="text-gold font-['Bebas_Neue'] text-[28px] leading-none tracking-[0.08em] no-underline"
          >
            D10S
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={activeHref === link.href ? 'page' : undefined}
                className={`font-mono text-[10px] tracking-[0.18em] uppercase no-underline transition-all duration-300 ${
                  activeHref === link.href
                    ? 'text-gold'
                    : 'text-white/60 hover:text-[#75AADB]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/75 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-md border border-gold/20 rounded-b-lg mb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`block px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] no-underline transition-colors ${
                  activeHref === link.href
                    ? 'text-gold bg-gold/10'
                    : 'text-white/70 hover:text-[#75AADB]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
