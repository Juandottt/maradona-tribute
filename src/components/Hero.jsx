import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-dark-bg to-dark-bg pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/20 opacity-20" />

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-gold uppercase text-sm md:text-base tracking-[0.3em] mb-6"
        >
          30 Octubre 1960 — 25 Noviembre 2020
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight"
        >
          Diego
          <br />
          <span className="text-gold">Maradona</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl mx-auto"
        >
          El más grande. El Dios del fútbol. El 10 eterno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#infancia"
            className="inline-flex items-center gap-2 text-gold border border-gold/50 px-6 py-3 rounded-full hover:bg-gold/10 transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Conoce su historia
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
