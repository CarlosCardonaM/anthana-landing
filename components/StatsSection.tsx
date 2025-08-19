'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
  icon: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  {
    value: '300',
    label: 'Incremento en ventas',
    icon: 'chart',
    suffix: '%'
  },
  {
    value: '5',
    label: 'Más visualizaciones de perfil',
    icon: 'eye',
    suffix: 'x'
  },
  {
    value: '2.5',
    label: 'Mayor impacto social',
    icon: 'globe',
    suffix: 'x'
  },
  {
    value: '48',
    label: 'Horas para ver resultados',
    icon: 'lightning',
    suffix: 'h'
  }
]

export default function StatsSection() {
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
            Resultados que hablan por sí solos
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Nuestras estrategias de marketing digital han transformado negocios y generado 
            resultados extraordinarios para nuestros clientes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              data-stat={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Icono */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A3E0]/20 to-[#00A3E0]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <StatIcon icon={stat.icon} />
              </div>

              {/* Número animado */}
              <div className="mb-2">
                <motion.span 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00A3E0] to-white bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  {stat.prefix}
                  <AnimatedNumber 
                    value={parseFloat(stat.value)} 
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    delay={index * 0.1 + 0.5}
                    onComplete={() => {
                      // Efecto de zoom in y zoom out cuando el número termina de animarse
                      const element = document.querySelector(`[data-stat="${stat.label}"]`) as HTMLElement
                      if (element) {
                        element.style.transform = 'scale(1.1)'
                        element.style.transition = 'transform 0.3s ease-out'
                        setTimeout(() => {
                          element.style.transform = 'scale(1)'
                        }, 300)
                      }
                    }}
                  />
                </motion.span>
              </div>

              {/* Label */}
              <motion.p 
                className="text-white/80 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.8 
                }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-white/60 text-sm mb-4">
            ¿Quieres resultados similares para tu negocio?
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

// Componente para renderizar iconos SVG
function StatIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'chart':
      return (
        <svg className="w-8 h-8 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'eye':
      return (
        <svg className="w-8 h-8 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    case 'globe':
      return (
        <svg className="w-8 h-8 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'lightning':
      return (
        <svg className="w-8 h-8 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    default:
      return <span className="text-2xl">📊</span>
  }
}

// Componente para números animados
function AnimatedNumber({ 
  value, 
  suffix, 
  isVisible, 
  delay,
  onComplete
}: { 
  value: number
  suffix?: string
  isVisible: boolean
  delay: number
  onComplete?: () => void
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isVisible) {
      // Empezar inmediatamente desde 0
      setDisplayValue(0)
      
      const timer = setTimeout(() => {
        const startValue = 0
        const endValue = value
        const duration = 1200 // 1.2 segundos para animación más rápida y emocionante
        const startTime = Date.now()

        const animate = () => {
          const currentTime = Date.now()
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Función de easing para una animación más emocionante con rebote
          const easeOutBack = 1 + 2.5949095 * Math.pow(progress - 1, 3) + 1.5949095 * Math.pow(progress - 1, 2)
          const currentValue = startValue + (endValue - startValue) * easeOutBack
          
          setDisplayValue(currentValue)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            // Llamar a onComplete cuando la animación termine
            onComplete?.()
          }
        }

        animate()
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <span>
      {suffix === 'x' ? 
        `${displayValue.toFixed(1)}${suffix}` : 
        suffix === '%' ? 
          `${Math.round(displayValue)}${suffix}` :
          suffix === 'h' ?
            `${Math.round(displayValue)}${suffix}` :
            `${Math.round(displayValue)}`
      }
    </span>
  )
}
