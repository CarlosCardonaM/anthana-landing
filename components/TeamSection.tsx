'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  position: 'left' | 'center' | 'right'
}

const teamMembers: TeamMember[] = [
  {
    name: 'Victor Gallo',
    role: 'Estratega de Marketing Digital',
    description: 'Especialista en estrategias de crecimiento y optimización de campañas. Con más de 8 años de experiencia en marketing digital, Victor ha ayudado a más de 200 empresas a escalar sus operaciones y maximizar su ROI.',
    image: '/team/victor-gallo.jpg',
    position: 'left'
  },
  {
    name: 'Carlos Cardona',
    role: 'CEO & Director de Tecnología',
    description: 'Líder visionario con pasión por la innovación tecnológica. Carlos combina experiencia en desarrollo de software, IA y marketing digital para crear soluciones únicas que transforman negocios.',
    image: '/team/carlos-cardona.jpg',
    position: 'center'
  },
  {
    name: 'Jose Cardona',
    role: 'Director Creativo & Diseño',
    description: 'Artista digital y estratega creativo con un ojo excepcional para el diseño. Jose transforma ideas en experiencias visuales impactantes que conectan emocionalmente con las audiencias.',
    image: '/team/jose-cardona.jpg',
    position: 'right'
  }
]

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#00A3E0]/5 via-transparent to-[#00A3E0]/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Conoce a los expertos que hacen posible la transformación digital de tu negocio
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={`text-center group ${
                member.position === 'center' ? 'md:order-2' : 
                member.position === 'left' ? 'md:order-1' : 'md:order-3'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              {/* Foto del equipo */}
              <div className="relative mb-6">
                {/* Frame circular con gradiente */}
                <div className="relative w-48 h-48 mx-auto">
                  {/* Borde luminoso */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0] via-[#00A3E0]/80 to-[#00A3E0]/60 rounded-full p-1 group-hover:p-2 transition-all duration-300" />
                  
                  {/* Contenedor de la imagen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#00A3E0]/20 to-[#00A3E0]/10 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder de imagen */}
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                      <span className="text-white/40 text-sm">Foto de {member.name}</span>
                    </div>
                    
                    {/* Imagen real (se mostrará cuando agregues las fotos) */}
                    {/* <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>

                {/* Indicador de posición especial para Carlos */}
                {member.position === 'center' && (
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#00A3E0] to-[#00A3E0]/80 rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Información del miembro */}
              <div className="space-y-3">
                {/* Nombre */}
                <motion.h3 
                  className={`text-xl font-bold text-white ${
                    member.position === 'center' ? 'text-[#00A3E0]' : ''
                  }`}
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {member.name}
                </motion.h3>

                {/* Rol */}
                <motion.p 
                  className="text-[#00A3E0] font-medium text-sm"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {member.role}
                </motion.p>

                {/* Descripción */}
                <motion.p 
                  className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
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
