import Head from 'next/head'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

/**
 * Layout global con navbar y footer.
 * Incluye Toaster para notificaciones y estilos base.
 */
export default function Layout({ title, description, children }: LayoutProps) {
  useEffect(() => {
    // Soporte reduced motion: agrega clase para desactivar animaciones pesadas si el usuario lo prefiere
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) document.documentElement.classList.add('motion-reduce')
  }, [])

  return (
    <>
      <Head>
        <title>{title ?? 'Anthana - Agencia de Marketing y Tecnología'}</title>
        <meta name="description" content={description ?? 'Anthana: Fusionamos marketing y tecnología con IA, automatización y estrategias data-driven para potenciar tu negocio.'} />
        {/* Open Graph / Twitter */}
        <meta property="og:title" content={title ?? 'Anthana - Agencia de Marketing y Tecnología'} />
        <meta property="og:description" content={description ?? 'Creatividad + IA + Automatización = Crecimiento.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-anthana.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ?? 'Anthana - Agencia de Marketing y Tecnología'} />
        <meta name="twitter:description" content={description ?? 'Creatividad + IA + Automatización = Crecimiento.'} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="#home" className="text-xl md:text-2xl font-bold tracking-wide">Anthana</Link>
            <ul className="hidden md:flex items-center gap-8 text-sm">
              <li><a href="#servicios" className="hover:text-anthana-accent transition" aria-label="Ir a Servicios">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-anthana-accent transition" aria-label="Ir a Portafolio">Portafolio</a></li>
              <li><a href="#tecnologia" className="hover:text-anthana-accent transition" aria-label="Ir a Importancia de la tecnología">Tecnología</a></li>
              <li><a href="#contacto" className="px-4 py-2 rounded-md bg-anthana-accent text-white hover:bg-[#00A3E0]/80 transition" aria-label="Ir a Contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 items-center gap-4">
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Anthana. Todos los derechos reservados.</p>
            <div className="flex md:justify-end gap-4 text-sm opacity-80">
              <a href="#" aria-label="LinkedIn" className="hover:text-anthana-accent">LinkedIn</a>
              <a href="#" aria-label="Instagram" className="hover:text-anthana-accent">Instagram</a>
              <a href="#" aria-label="X / Twitter" className="hover:text-anthana-accent">X</a>
            </div>
          </div>
        </footer>
      </div>

      <Toaster position="top-right" toastOptions={{ style: { background: '#0b1324', color: '#fff' } }} />
    </>
  )
}
