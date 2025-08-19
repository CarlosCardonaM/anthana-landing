import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ImageViewerProps {
  images: string[]
  currentImageIndex: number
  onClose: () => void
  onImageChange: (index: number) => void
}

export default function ImageViewer({ images, currentImageIndex, onClose, onImageChange }: ImageViewerProps) {

  // Cerrar modal con ESC
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length
        onImageChange(prevIndex)
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentImageIndex + 1) % images.length
        onImageChange(nextIndex)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleArrowKeys)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleArrowKeys)
    }
  }, [onClose, currentImageIndex, images.length, onImageChange])



  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    onImageChange(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    onImageChange(prevIndex)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Cerrar visor de imagen"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>



          {/* Navegación entre imágenes */}
          {images.length > 1 && (
            <>
              {/* Flecha izquierda */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              {/* Flecha derecha */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Contador de imágenes */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-2 rounded-full">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}

          {/* Imagen */}
          <img
            src={images[currentImageIndex]}
            alt="Vista ampliada"
            className="w-full h-auto max-h-[95vh] object-contain"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
