import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import ImageViewer from './ImageViewer'

export interface Portfolio {
  title: string
  subtitle?: string
  description: string
  images?: string[]
  metrics?: Array<{ label: string; value: string; icon: string }>
  url: string
}

export default function PortfolioItem({ title, subtitle, description, images, metrics, url }: Portfolio) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleImageClick = (image: string) => {
    const imageIndex = images?.findIndex(img => img === image) ?? 0
    setSelectedImageIndex(imageIndex)
  }

  return (
    <>
      <motion.div
        className="group block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00A3E0] hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
                {/* Carrusel de imágenes */}
        <ImageCarousel
          images={images || []}
          onImageClick={handleImageClick}
        />
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1 group-hover:text-[#00A3E0] transition">{title}</h3>
            {subtitle && (
              <p className="text-[#00A3E0] text-sm font-medium mb-3">{subtitle}</p>
            )}
            <p className="text-sm text-white/80 leading-relaxed">{description}</p>
          </div>
          
          {metrics && (
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{metric.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">{metric.label}</div>
                    <div className="text-sm font-semibold text-white">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Botón de enlace separado */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00A3E0] hover:text-[#00A3E0]/80 text-sm font-medium transition"
            >
              Ver proyecto →
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal de visualización de imagen */}
      {selectedImageIndex !== null && images && (
        <ImageViewer
          images={images}
          currentImageIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onImageChange={setSelectedImageIndex}
        />
      )}
    </>
  )
}
