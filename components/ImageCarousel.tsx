import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ImageCarouselProps {
  images: string[]
  onImageClick?: (image: string) => void
}

export default function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="h-48 bg-gradient-to-br from-[#00A3E0]/20 to-[#1A2A44]/40 flex items-center justify-center rounded-t-xl">
        <span className="text-4xl opacity-60">📁</span>
      </div>
    )
  }

  return (
    <div className="relative h-48 bg-black rounded-t-xl overflow-hidden">
      {/* Imagen actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center cursor-pointer"
            style={{ 
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: 'cover'
            }}
            onClick={() => onImageClick?.(images[currentIndex])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onImageClick?.(images[currentIndex])
              }
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay para mejor legibilidad de las flechas - NO bloquea clicks */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Flecha izquierda */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
      )}

      {/* Flecha derecha */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      )}

      {/* Indicadores de puntos */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
