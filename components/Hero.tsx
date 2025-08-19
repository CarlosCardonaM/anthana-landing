import { motion, useReducedMotion } from 'framer-motion'

const keywords = [
  { text: 'IA', x: '60%', y: '-40%', delay: 0.4 },
  { text: 'Marketing', x: '-60%', y: '-40%', delay: 0.8 },
  { text: 'Automatización', x: '40%', y: '35%', delay: 1.2 },
  { text: 'Data', x: '-45%', y: '35%', delay: 1.6 },
]

export default function Hero() {
  const prefersReduced = useReducedMotion()

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

      {/* Palabras clave flotantes */}
      {keywords.map((k) => (
        <motion.span
          key={k.text}
          aria-hidden
          className="absolute text-white/20 text-2xl md:text-4xl font-semibold select-none"
          style={{ transform: `translate(${k.x}, ${k.y})` }}
          initial={{ opacity: 0, y: 10 }}
          animate={prefersReduced ? { opacity: 0.3 } : { opacity: [0.1, 0.35, 0.15], y: [10, -10, 10] }}
          transition={{ duration: 6, delay: k.delay, repeat: Infinity }}
        >
          {k.text}
        </motion.span>
      ))}

      {/* Contenido central */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          Anthana
        </motion.h1>
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
