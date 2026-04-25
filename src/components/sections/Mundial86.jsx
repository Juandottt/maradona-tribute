import { motion } from 'framer-motion'

export default function Mundial86() {
  return (
    <section id="mundial86" className="py-24 px-4 bg-gradient-to-b from-dark-bg via-yellow-950/10 to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">Capítulo IV</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
            Mundial 86
          </h2>
          <p className="text-gray-400 mt-2 text-lg">México · Junio 1986</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hand of God */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-8"
          >
            <div className="text-5xl mb-4">✋</div>
            <h3 className="text-2xl font-bold text-white mb-3">La Mano de Dios</h3>
            <p className="text-gray-300 leading-relaxed">
              22 de junio de 1986. Cuartos de final vs. Inglaterra. Con la mano izquierda,
              Maradona anotó el primer gol. "Fue un poco con la cabeza de Maradona y un poco
              con la mano de Dios", dijo él mismo.
            </p>
            <div className="mt-4 text-gold font-bold text-xl">Minuto 51′</div>
          </motion.div>

          {/* Goal of the Century */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-card border border-gold/30 rounded-2xl p-8"
          >
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-2xl font-bold text-gold mb-3">El Gol del Siglo</h3>
            <p className="text-gray-300 leading-relaxed">
              En el mismo partido, cuatro minutos después, Diego recibió el balón en su propia
              cancha, regateó a 5 jugadores ingleses y al portero, y anotó el gol más grande
              de la historia del fútbol. Elegido por la FIFA como el Gol del Siglo.
            </p>
            <div className="mt-4 text-gold font-bold text-xl">Minuto 55′</div>
          </motion.div>
        </div>

        {/* Trophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-dark-card border border-gold/40 rounded-2xl px-12 py-8">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-bold text-gold">Campeón del Mundo</h3>
            <p className="text-gray-400 mt-2">Argentina 3 — 2 Alemania Occidental</p>
            <p className="text-gray-500 text-sm mt-1">29 de junio de 1986 · Estadio Azteca, México</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gold">5</p>
                <p className="text-gray-400 text-sm">Goles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">5</p>
                <p className="text-gray-400 text-sm">Asistencias</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">Balón de Oro</p>
                <p className="text-gray-400 text-sm">Mejor jugador</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
