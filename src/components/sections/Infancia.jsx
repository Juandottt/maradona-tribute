import { motion } from 'framer-motion'

const facts = [
  { year: '1960', text: 'Nace el 30 de octubre en Villa Fiorito, Buenos Aires' },
  { year: '1969', text: 'A los 8 años domina el balón con maestría hipnótica' },
  { year: '1976', text: 'Debuta profesionalmente con Argentinos Juniors a los 15 años' },
  { year: '1979', text: 'Campeón Mundial Juvenil con Argentina en Japón' },
]

export default function Infancia() {
  return (
    <section id="infancia" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-gold text-sm uppercase tracking-[0.3em]">Capítulo I</span>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
          Infancia
        </h2>
        <p className="text-gray-400 mt-2 text-lg">Villa Fiorito · Buenos Aires · 1960–1981</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            En las calles de tierra de Villa Fiorito, en los suburbios del sur de Buenos Aires,
            nació la leyenda. Diego Armando Maradona creció en la pobreza, pero con una pelota
            en los pies encontró su destino.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Desde niño, su talento era tan extraordinario que aparecía en televisión haciendo
            malabares con el balón durante los descansos de partidos. Con apenas 15 años,
            ya era profesional.
          </p>
        </motion.div>

        <div className="space-y-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.year}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-4 items-start bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <span className="text-gold font-bold text-lg min-w-[60px]">{fact.year}</span>
              <p className="text-gray-300">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
