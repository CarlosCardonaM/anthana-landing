export interface ToolItem { 
  name: string; 
  icon?: string;
  logoSrc?: string; // Ruta al archivo SVG en public/logos/
}

/**
 * Carrusel/Marquee infinito con logos (placeholders). Sin dependencias externas.
 */
export default function ToolsMarquee({ tools }: { tools: ToolItem[] }) {
  const items = [...tools, ...tools] // duplicamos para loop continuo
  
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1A2A44] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1A2A44] to-transparent pointer-events-none" />
      
      <div className="flex gap-10 animate-marquee will-change-transform">
        {items.map((t, i) => (
          <div key={`${t.name}-${i}`} className="shrink-0 flex items-center gap-3 opacity-90 hover:opacity-100 transition-all duration-300 group">
            <div className="h-8 w-8 rounded-lg bg-[#00A3E0]/20 flex items-center justify-center text-lg group-hover:bg-[#00A3E0]/30 group-hover:scale-110 transition-all duration-300">
              {t.logoSrc ? (
                <img 
                  src={t.logoSrc} 
                  alt={`${t.name} logo`} 
                  className="w-5 h-5 object-contain"
                />
              ) : (
                t.icon || '🛠️'
              )}
            </div>
            <span className="text-sm group-hover:text-[#00A3E0] transition-colors duration-300">{t.name}</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
