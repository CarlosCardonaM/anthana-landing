import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  
  try {
    const data = schema.parse(req.body)

    // TODO: aquí podrías enviar un email, guardar en DB o integrar con tu CRM.
    // Por ahora, solo logueamos de forma segura en el servidor.
    console.log('[CONTACT] New lead:', {
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message,
      at: new Date().toISOString(),
    })

    return res.status(200).json({ ok: true })
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : 'Invalid payload'
    return res.status(400).json({ error: errorMessage })
  }
}
