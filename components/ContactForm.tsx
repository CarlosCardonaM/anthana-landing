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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">Nombre *</label>
        <input 
          id="name" 
          type="text" 
          aria-invalid={!!errors.name} 
          {...register('name')} 
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 focus:border-[#00A3E0] focus:outline-none" 
          placeholder="Tu nombre" 
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email *</label>
        <input 
          id="email" 
          type="email" 
          aria-invalid={!!errors.email} 
          {...register('email')} 
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 focus:border-[#00A3E0] focus:outline-none" 
          placeholder="tucorreo@ejemplo.com" 
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm mb-1">Teléfono (opcional)</label>
        <input 
          id="phone" 
          type="text" 
          {...register('phone')} 
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 focus:border-[#00A3E0] focus:outline-none" 
          placeholder="+52 ..." 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm mb-1">Mensaje *</label>
        <textarea 
          id="message" 
          aria-invalid={!!errors.message} 
          {...register('message')} 
          rows={5} 
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 focus:border-[#00A3E0] focus:outline-none" 
          placeholder="¿En qué te ayudamos?" 
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00A3E0] hover:bg-[#00A3E0]/80 text-white font-semibold transition disabled:opacity-60"
      >
        {isSubmitting && <span className="h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" aria-hidden />}
        {isSubmitting ? 'Enviando…' : 'Enviar'}
      </button>
      
      {submitted && <p className="text-green-400 text-sm">Hemos recibido tu mensaje.</p>}
    </form>
  )
}
