import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const router = useRouter()
  const basePath = router.basePath || ''
  
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-60 w-96',  // Para el header
    xl: 'h-100 w-[500px]'  // ¡ENORMEMENTE GRANDE para el Hero!
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-4xl md:text-5xl'
  }

  return (
    <Link href="#home" className={`flex items-center gap-3 ${className}`}>
      {/* Logo SVG */}
      <div className={`relative ${sizeClasses[size]} shrink-0`}>
        <Image
          src={`${basePath}/logos/anthana-logo.svg`}
          alt="Anthana Logo"
          fill
          sizes={`${size === 'sm' ? '24px' : size === 'md' ? '32px' : '48px'}`}
          className="object-contain"
          unoptimized
          onError={(e) => {
            // Si falla la carga del SVG, ocultamos el logo y mostramos solo texto
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </div>
      
      {/* Texto del logo (opcional) */}
      {showText && (
        <span className={`font-bold tracking-wide ${textSizes[size]}`}>
          Anthana
        </span>
      )}
    </Link>
  )
}
