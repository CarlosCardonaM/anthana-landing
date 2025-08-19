import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import toast from 'react-hot-toast'

const schema = z.object({
  name: z.string().min(1, 'Tu nombre es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Cuéntanos más: mínimo 10 caracteres'),
})

export type ContactValues = z.infer<typeof schema>

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(schema) })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: ContactValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Error al enviar. Intenta de nuevo.')
      setSubmitted(true)
      reset()
      toast.success('¡Gracias! Te contactaremos pronto ✨')
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'Ocurrió un error'
      toast.error(errorMessage)
    }
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0]/5 via-transparent to-transparent rounded-3xl" />
      
      {/* Contenedor principal del formulario */}
      <div data-form-container className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500">
        {/* Efecto de iluminación emocionante en hover del botón */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E0]/20 via-[#00A3E0]/10 to-[#00A3E0]/20 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none form-illuminated:opacity-100" />
        
        {/* Borde luminoso que se activa en hover del botón */}
        <div className="absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 pointer-events-none form-illuminated:border-[#00A3E0]/30" />
        
        {/* Efecto de glow sutil en hover del botón */}
        <div className="absolute inset-0 bg-[#00A3E0]/5 rounded-3xl opacity-0 transition-opacity duration-700 pointer-events-none blur-sm form-illuminated:opacity-100" />
        {/* Header del formulario */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A3E0] to-[#00A3E0]/80 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">¡Hablemos de tu proyecto!</h3>
          <p className="text-white/70">Cuéntanos tus objetivos y te proponemos un plan en menos de 48h</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Nombre */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-[#00A3E0] transition-colors">
              Nombre *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white/40 group-focus-within:text-[#00A3E0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input 
                id="name" 
                type="text" 
                aria-invalid={!!errors.name} 
                {...register('name')} 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 focus:outline-none transition-all duration-300 placeholder:text-white/40 text-white" 
                placeholder="Tu nombre completo" 
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name.message}
              </p>
            )}
          </div>
          
          {/* Campo Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-[#00A3E0] transition-colors">
              Email *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white/40 group-focus-within:text-[#00A3E0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                id="email" 
                type="email" 
                aria-invalid={!!errors.email} 
                {...register('email')} 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 focus:outline-none transition-all duration-300 placeholder:text-white/40 text-white" 
                placeholder="tucorreo@ejemplo.com" 
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email.message}
              </p>
            )}
          </div>
          
          {/* Campo Teléfono */}
          <div className="group">
            <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-[#00A3E0] transition-colors">
              Teléfono (opcional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white/40 group-focus-within:text-[#00A3E0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.554.894l-1.5 8a1 1 0 01-.554.894H6M7 16a4 4 0 100-8 4 4 0 000 8zM9 12h2m2 0h2m-6 4h.01M9 16h.01" />
                </svg>
              </div>
              <input 
                id="phone" 
                type="tel" 
                {...register('phone')} 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 focus:outline-none transition-all duration-300 placeholder:text-white/40 text-white" 
                placeholder="+52 55 1234 5678" 
              />
            </div>
          </div>
          
          {/* Campo Mensaje */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-[#00A3E0] transition-colors">
              Mensaje *
            </label>
            <div className="relative">
              <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                <svg className="w-5 h-5 text-white/40 group-focus-within:text-[#00A3E0] transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <textarea 
                id="message" 
                aria-invalid={!!errors.message} 
                {...register('message')} 
                rows={5} 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 focus:outline-none transition-all duration-300 placeholder:text-white/40 text-white resize-none" 
                placeholder="¿En qué te ayudamos? Cuéntanos sobre tu proyecto, objetivos y expectativas..." 
              />
            </div>
            {errors.message && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.message.message}
              </p>
            )}
          </div>
          
          {/* Botón de envío */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00A3E0] to-[#00A3E0]/80 hover:from-[#00A3E0]/90 hover:to-[#00A3E0] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none hover:animate-pulse"
              onMouseEnter={() => {
                // Activar efectos de iluminación del formulario
                const formContainer = document.querySelector('[data-form-container]');
                if (formContainer) {
                  formContainer.classList.add('form-illuminated');
                }
              }}
              onMouseLeave={() => {
                // Desactivar efectos de iluminación del formulario
                const formContainer = document.querySelector('[data-form-container]');
                if (formContainer) {
                  formContainer.classList.remove('form-illuminated');
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="h-5 w-5 border-2 border-white/60 border-t-transparent rounded-full animate-spin" aria-hidden />
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Enviar mensaje</span>
                </>
              )}
            </button>
          </div>
          
          {/* Mensaje de éxito */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500/20 rounded-full mb-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-green-400 font-medium">¡Mensaje enviado con éxito!</p>
              <p className="text-green-400/80 text-sm mt-1">Te contactaremos en menos de 48 horas</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
