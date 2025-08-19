import { motion } from 'framer-motion'

export interface Service {
  title: string
  description: string
  stat?: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, stat, icon }: Service) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-[#00A3E0]/20 flex items-center justify-center" aria-hidden>
          {icon ?? <span className="text-xl">⚡️</span>}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      {stat && (
        <div className="mt-4 text-[#00A3E0] font-semibold">{stat}</div>
      )}
    </motion.div>
  )
}
