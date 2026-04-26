// ─────────────────────────────────────────────────────────────────────────────
// Hero.jsx — Maradona Tribute
// Drop into: src/components/Hero.jsx  OR  src/sections/Hero.jsx
//
// Dependencies:
//   npm install framer-motion
//
// Usage in App.jsx:
//   import Hero from './components/Hero'
//   ...
//   <Hero />
//
// Optional props:
//   backgroundImage  — path to bg image (default: imported heroImg)
//   overlayOpacity   — number 0–1 (default: 0.72)
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'

// ── Swap this for the real image path in your project ──
// import heroImg from '../assets/hero.png'
// Or use a public-folder path: '/images/86blue.jpeg'
const DEFAULT_BG = '/images/86blue.jpeg'

// ── Shared animation variants ──
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, delay, ease: 'easeOut' },
})

const expandLine = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const letterExpand = {
  initial: { opacity: 0, letterSpacing: '0.5em' },
  animate: { opacity: 1, letterSpacing: '0.25em' },
  transition: { duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
}

// ── Scroll indicator ──
function ScrollIndicator() {
  return (
    <motion.div
      {...fadeIn(2.5)}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold/50">
        Scroll
      </span>
      <div className="w-[22px] h-[38px] border border-gold/35 rounded-xl flex justify-center pt-[6px]">
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[3px] h-[8px] bg-gold/70 rounded-full"
        />
      </div>
    </motion.div>
  )
}

// ── Main Hero component ──
export default function Hero({
  backgroundImage = DEFAULT_BG,
  overlayOpacity = 0.72,
  showNav = true,
}) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* ── Background image ── */}
      <div
        className="absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(1px) brightness(0.55)',
        }}
      />

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(10,10,10,${overlayOpacity})` }}
      />

      {/* ── Bottom vignette ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/90 pointer-events-none" />

      {/* ── Gold radial glow ── */}
      <motion.div
        {...fadeIn(0.5)}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 46%, rgba(212,175,55,0.26) 0%, rgba(212,175,55,0.07) 55%, transparent 80%)',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}
      />

      {/* ── Optional navbar (disabled when using global fixed Navbar) ── */}
      {showNav && (
        <motion.nav
          {...fadeIn(0.1)}
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-12 py-7 border-b border-gold/[0.07] z-20"
        >
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-gold/60 flex items-center justify-center">
              <span className="font-['Bebas_Neue'] text-gold text-[13px] leading-none">10</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              El Diez
            </span>
          </div>
        </motion.nav>
      )}

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">

        {/* Dates */}
        <motion.p
          style={{ letterSpacing: '0.25em' }}
          {...letterExpand}
          className="font-mono text-[11px] uppercase text-gold mb-6"
        >
          30 Octubre 1960 &nbsp;—&nbsp; 25 Noviembre 2020
        </motion.p>

        {/* Main title */}
        <motion.h1
          {...fadeUp(0.5)}
          className="font-['Bebas_Neue'] text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.92] text-white tracking-[0.03em]"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}
        >
          Diego Armando
          <br />
          <span className="text-[#FFD700]">Maradona</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          {...expandLine}
          className="h-px mx-auto my-5 max-w-md origin-center"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(117,170,219,0.55), transparent)',
          }}
        />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(1.0)}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#75AADB] mb-4"
        >
          El mejor de todos los tiempos
        </motion.p>

        {/* Supporting text */}
        <motion.p
          {...fadeUp(1.3)}
          className="font-serif text-base md:text-[17px] leading-relaxed text-white/55 max-w-lg mx-auto mb-8"
        >
          Una experiencia inmersiva para recorrer la vida,
          <br className="hidden md:block" /> la gloria y el legado del Diez.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          {...fadeIn(1.7)}
          className="font-serif italic text-xl md:text-[21px] leading-snug text-white/75 max-w-md mx-auto mb-10 border-l-2 border-gold/40 pl-5 text-left"
        >
          "La pelota no se mancha."
          <cite className="block mt-2 font-mono not-italic text-[9px] uppercase tracking-[0.15em] text-gold/55">
            — Discurso de despedida, 2001
          </cite>
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          {...fadeUp(2.0)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#infancia"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dark-bg bg-gold px-8 py-[13px] border border-gold hover:bg-[#FFD700] hover:scale-[1.02] transition-all duration-300 no-underline"
          >
            Conoce su historia
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#despedida"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 border border-white/15 px-8 py-[13px] hover:border-[#75AADB]/50 hover:text-[#75AADB] transition-all duration-300 no-underline"
          >
            Ver el legado
          </a>
        </motion.div>
      </div>

      {/* ── Decorative corner "10" ── */}
      <motion.div
        {...fadeIn(2.2)}
        className="absolute right-11 bottom-11 font-['Bebas_Neue'] text-[120px] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(212,175,55,0.04)' }}
      >
        10
      </motion.div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator />
    </section>
  )
}
