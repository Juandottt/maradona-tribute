import { motion } from 'framer-motion'

const stats = [
  { label: 'Temporadas', value: '2' },
  { label: 'Partidos', value: '58' },
  { label: 'Goles', value: '38' },
  { label: 'Copa del Rey', value: '1' },
]

export default function Barcelona() {
  return (
    <section id="barcelona" className="py-24 px-4 bg-gradient-to-b from-dark-bg via-blue-950/10 to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-right"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">Capítulo II</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
            Barcelona
          </h2>
          <p className="text-gray-400 mt-2 text-lg">F.C. Barcelona · España · 1982–1984</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
              >
                <p className="text-4xl font-bold text-gold">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En 1982, el FC Barcelona pagó 7,6 millones de dólares por Diego — el traspaso
              más caro de la historia en ese momento. Europa conocía al genio.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A pesar de las lesiones y una hepatitis severa, Maradona deslumbró al Camp Nou
              con jugadas que quedaron grabadas en la memoria del fútbol. Su paso por Barcelona
              fue breve pero brillante.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
