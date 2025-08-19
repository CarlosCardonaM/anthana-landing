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
      className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-transparent hover:border-[#00A3E0]/30 transition-all duration-300 ease-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Glow effect en hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00A3E0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Borde luminoso en hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00A3E0]/20 via-[#00A3E0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center gap-3 mb-3">
        <motion.div 
          className="h-10 w-10 rounded-lg bg-[#00A3E0]/20 flex items-center justify-center group-hover:bg-[#00A3E0]/30 transition-all duration-300" 
          aria-hidden
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          {icon ?? <span className="text-xl">⚡️</span>}
        </motion.div>
        <h3 className="text-xl font-semibold group-hover:text-[#00A3E0] transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      {stat && (
        <motion.div 
          className="mt-4 text-[#00A3E0] font-semibold group-hover:text-[#00A3E0]/80 transition-colors duration-300"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {stat}
        </motion.div>
      )}
    </motion.div>
  )
}
