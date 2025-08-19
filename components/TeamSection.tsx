'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()
  const basePath = router.basePath || ''

  const team = [
    {
      name: 'Victor Gallo',
      role: 'Estratega de Marketing Digital',
      description: 'Especialista en estrategias de crecimiento y optimización de campañas. Con más de 8 años de experiencia en marketing digital, Victor ha ayudado a más de 200 empresas a escalar sus operaciones y maximizar su ROI.',
      position: 'left' as const,
      image: null, // Placeholder hasta tener la foto
      hasImage: false
    },
    {
      name: 'Carlos Cardona',
      role: 'CEO & Director de Tecnología',
      description: 'Líder visionario con pasión por la innovación tecnológica. Carlos combina experiencia en desarrollo de software, IA y marketing digital para crear soluciones únicas que transforman negocios.',
      position: 'center' as const,
      image: `${basePath}/team/carlos-cardona.JPG`,
      hasImage: true
    },
    {
      name: 'Jose Cardona',
      role: 'Director Creativo & Diseño',
      description: 'Artista digital y estratega creativo con un ojo excepcional para el diseño. Jose transforma ideas en experiencias visuales impactantes que conectan emocionalmente con las audiencias.',
      position: 'right' as const,
      image: null, // Placeholder hasta tener la foto
      hasImage: false
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#00A3E0]/5 via-transparent to-[#00A3E0]/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Conoce a los expertos que hacen posible la transformación digital de tu negocio
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className={`text-center group ${
                member.position === 'left' ? 'md:order-1' : 
                member.position === 'center' ? 'md:order-2' : 'md:order-3'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
            >
              {/* Foto del miembro */}
              <div className="relative mb-6">
                <div className={`relative w-48 h-48 mx-auto ${
                  member.hasImage ? '' : 'bg-gradient-to-br from-[#00A3E0]/20 to-[#00A3E0]/10 rounded-full flex items-center justify-center'
                }`}>
                  {member.hasImage ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0] via-[#00A3E0]/80 to-[#00A3E0]/60 rounded-full p-1 group-hover:p-2 transition-all duration-300"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-[#00A3E0]/20 to-[#00A3E0]/10 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={member.image!} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Si la imagen falla, mostrar placeholder
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const placeholder = target.nextElementSibling as HTMLElement
                            if (placeholder) placeholder.style.display = 'flex'
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hidden">
                          <span className="text-white/40 text-sm">Foto de {member.name}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl opacity-60">👤</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Información del miembro */}
              <div className="space-y-3">
                {/* Nombre */}
                <motion.div 
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <h3 
                    className={`text-xl font-bold text-white ${
                      member.position === 'center' ? 'text-[#00A3E0]' : ''
                    }`}
                  >
                    {member.name}
                  </h3>
                  
                  {/* Check azul para Carlos */}
                  {member.position === 'center' && (
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-[#00A3E0] to-[#00A3E0]/80 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>

                {/* Rol */}
                <motion.p 
                  className="text-[#00A3E0] font-medium text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {member.role}
                </motion.p>

                {/* Descripción */}
                <motion.p 
                  className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {member.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-white/60 text-sm mb-4">
            ¿Listo para trabajar con nuestro equipo de expertos?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3E0] hover:bg-[#00A3E0]/80 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <span>Hablemos de tu proyecto</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
