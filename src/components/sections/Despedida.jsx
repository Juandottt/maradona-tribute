import { motion } from 'framer-motion'

export default function Despedida() {
  return (
    <section id="despedida" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-dark-bg to-dark-bg pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">Capítulo Final</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
            Despedida
          </h2>
          <p className="text-gray-400 mt-2 text-lg">25 de noviembre de 2020</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-xl leading-relaxed mb-12"
        >
          El 25 de noviembre de 2020, el mundo entero lloró. Diego Armando Maradona dejó
          este mundo a los 60 años, en Tigre, provincia de Buenos Aires. Tres días de duelo
          nacional en Argentina. Millones de personas en las calles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-dark-card border border-gold/30 rounded-2xl p-10 mb-16"
        >
          <p className="text-3xl md:text-4xl font-serif text-gold italic leading-relaxed">
            "El pueblo nunca olvidará a Maradona."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {[
            { num: '491', label: 'Goles en clubes' },
            { num: '34', label: 'Títulos en su carrera' },
            { num: '∞', label: 'Legado eterno' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-5xl font-bold text-gold">{item.num}</p>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-gray-500 text-sm tracking-widest uppercase"
        >
          <p>D10S · 1960 — 2020</p>
          <p className="mt-2">Eternamente en el corazón del pueblo</p>
        </motion.div>
      </div>
    </section>
  )
}
