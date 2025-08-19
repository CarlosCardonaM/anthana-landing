import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'



// Partículas flotantes que reaccionan al scroll
const floatingParticles = [
  { id: 1, x: '15%', y: '25%', size: 8, color: 'rgba(255,255,255,0.4)' },
  { id: 2, x: '85%', y: '15%', size: 6, color: 'rgba(0,163,224,0.5)' },
  { id: 3, x: '25%', y: '75%', size: 10, color: 'rgba(255,255,255,0.35)' },
  { id: 4, x: '75%', y: '80%', size: 7, color: 'rgba(0,163,224,0.45)' },
  { id: 5, x: '45%', y: '35%', size: 9, color: 'rgba(255,255,255,0.3)' },
  { id: 6, x: '90%', y: '60%', size: 5, color: 'rgba(0,163,224,0.4)' },
  { id: 7, x: '10%', y: '65%', size: 8, color: 'rgba(255,255,255,0.4)' },
  { id: 8, x: '65%', y: '25%', size: 7, color: 'rgba(0,163,224,0.5)' },
  { id: 9, x: '35%', y: '85%', size: 6, color: 'rgba(255,255,255,0.35)' },
  { id: 10, x: '80%', y: '45%', size: 9, color: 'rgba(0,163,224,0.45)' },
]

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden flex items-center justify-center">
      {/* Gradient de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a30] via-[#132341] to-[#0a1530]" />
      
      {/* Halo animado */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,163,224,0.35) 0%, rgba(0,163,224,0) 70%)' }}
        animate={prefersReduced ? undefined : { x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Partículas flotantes que reaccionan al scroll */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `translateY(${scrollY * 0.3}px)`, // Efecto parallax MUCHO más pronunciado
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`, // Glow effect
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={prefersReduced ? { opacity: 0.6 } : { 
            opacity: [0.4, 1, 0.4], 
            scale: [0.9, 1.3, 0.9],
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 4, 
            delay: particle.id * 0.1, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}





      {/* Contenido central */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <Logo size="xl" showText={false} />
        </motion.div>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Agencia de Marketing y Tecnología — creatividad aplicada, automatización inteligente y decisiones basadas en datos.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contacto" className="px-6 py-3 rounded-md bg-[#00A3E0] hover:bg-[#00A3E0]/80 text-white font-semibold transition" aria-label="Ir a formulario de contacto">Contáctanos</a>
          <a href="#servicios" className="px-6 py-3 rounded-md border border-white/20 hover:bg-white/10 transition" aria-label="Ver servicios">Ver servicios</a>
        </div>
      </div>

      {/* Decoración de rejilla sutil */}
      <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
    </section>
  )
}
