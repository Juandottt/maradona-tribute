import { motion } from 'framer-motion'

const achievements = [
  { icon: '🏆', title: 'Serie A', desc: '1986–87 y 1989–90' },
  { icon: '🏅', title: 'Copa de Italia', desc: '1987' },
  { icon: '⭐', title: 'Copa UEFA', desc: '1989' },
  { icon: '🌟', title: 'Supercopa italiana', desc: '1990' },
]

export default function Napoli() {
  return (
    <section id="napoli" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">Capítulo III</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
            Nápoli
          </h2>
          <p className="text-gray-400 mt-2 text-lg">S.S.C. Napoli · Italia · 1984–1991</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Nápoles era una ciudad humilde del sur de Italia, discriminada y olvidada. Cuando
            Maradona llegó en 1984, la ciudad entera se rindió a sus pies. Diego no solo jugó
            al fútbol — transformó una ciudad entera, dándole al pueblo napolitano algo en lo
            que creer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-dark-card border border-dark-border rounded-xl p-6 text-center hover:border-gold/40 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-serif text-gold/90 italic">
            "Nápoles me dio todo. El amor de su gente es algo que jamás podré pagar."
          </p>
          <footer className="mt-4 text-gray-500">— Diego Armando Maradona</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
