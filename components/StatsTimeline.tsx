import { motion } from 'framer-motion'

export default function StatsTimeline() {
  const items = [
    { label: 'Automatización de campañas', value: 'x3', desc: 'Escala procesos sin aumentar headcount.' },
    { label: 'Personalización con IA', value: '+30%', desc: 'Mejoras típicas en conversión.' },
    { label: 'Detección de oportunidades', value: '24/7', desc: 'Monitoreo continuo con data.' },
    { label: 'Integraciones', value: 'API', desc: 'Conecta tu stack y orquesta flujos.' },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
      {items.map((it, idx) => (
        <motion.div
          key={it.label}
          className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="text-4xl font-extrabold text-[#00A3E0] mb-3">{it.value}</div>
          <div className="text-lg font-semibold mb-2">{it.label}</div>
          <p className="text-sm text-white/70 leading-relaxed">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
