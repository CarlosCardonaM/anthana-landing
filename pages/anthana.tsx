import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import ServiceCard from '../components/ServiceCard'
import ToolsMarquee from '../components/ToolsMarquee'
import PortfolioItem from '../components/PortfolioItem'
import TeamSection from '../components/TeamSection'
import ContactForm from '../components/ContactForm'

export default function AnthanaPage() {
  const router = useRouter()
  const basePath = router.basePath || ''

  const services = [
    {
      icon: '📱',
      title: 'Gestión de Redes Sociales',
      description: 'Optimización de perfiles en Instagram, Facebook y LinkedIn para proyectar credibilidad. Diseño de calendario de contenido enfocado en educar y demostrar experiencia (tips, consejos, testimonios de clientes, casos de éxito). Publicaciones constantes con imágenes, carruseles y videos que generen confianza y posicionen al cliente como referente en su área de asesoría. Gestión de comunidad: responder mensajes y comentarios con tono profesional y cercano.',
      highlight: 'Marca sólida'
    },
    {
      icon: '📢',
      title: 'Publicidad Digital',
      description: 'Campañas segmentadas en Meta Ads (Facebook/Instagram), TikTok Ads y Google Ads. Definición de audiencias personalizadas según el perfil de cliente ideal. Creación de anuncios atractivos con textos persuasivos y diseño visual optimizado. Monitoreo y optimización constante para maximizar el retorno de inversión (ROI).',
      highlight: 'ROI medible'
    },
    {
      icon: '🎨',
      title: 'Creación de Contenido',
      description: 'Sesiones de fotografía y edición de imágenes profesionales. Producción de videos cortos tipo reel/TikTok con storytelling. Diseño gráfico adaptado a cada red social (banners, plantillas, carruseles). Contenido alineado con la identidad de la marca del cliente.',
      highlight: 'Contenido atractivo'
    },
    {
      icon: '🌐',
      title: 'Desarrollo Web y E-commerce',
      description: 'Diseño de páginas web modernas, rápidas y adaptables a móviles. Optimización SEO para mejorar la visibilidad en Google. Integración de formularios de contacto, catálogo de productos o reservas. Opción de tiendas en línea (carrito de compras, pasarelas de pago).',
      highlight: 'Ventas 24/7'
    },
    {
      icon: '🤖',
      title: 'Chatbots Automatizados',
      description: 'Implementación de chatbots en WhatsApp, Messenger o web. Respuestas rápidas a preguntas frecuentes. Automatización de reservas, pedidos o generación de leads. Integración con CRM o correo electrónico para seguimiento de clientes.',
      highlight: 'Atención 24/7'
    },
    {
      icon: '🧠',
      title: 'Inteligencia Artificial aplicada al Marketing',
      description: 'Uso de IA para analizar el comportamiento de seguidores e identificar qué contenidos generan más interacción. Creación de copys iniciales y mensajes persuasivos con IA, siempre revisados y adaptados por nosotros. Automatización de seguimientos con prospectos para no perder ninguna oportunidad de venta.',
      highlight: 'Eficiencia IA'
    }
  ]

  const tools = [
    { name: 'Adobe Photoshop', logoSrc: `${basePath}/logos/photoshop.svg` },
    { name: 'OpenAI', logoSrc: `${basePath}/logos/openai.svg` },
    { name: 'Python', logoSrc: `${basePath}/logos/python.svg` },
    { name: 'Databricks', logoSrc: `${basePath}/logos/databricks.svg` },
    { name: 'Swift', logoSrc: `${basePath}/logos/swift.svg` },
    { name: 'LinkedIn', logoSrc: `${basePath}/logos/linkedin.svg` },
    { name: 'Canva', logoSrc: `${basePath}/logos/canva.svg` },
    { name: 'Google Ads', logoSrc: `${basePath}/logos/google-ads.svg` },
    { name: 'Facebook Ads', logoSrc: `${basePath}/logos/facebook-ads.svg` }
  ]

  const portfolio = [
    {
      title: 'Victor Alejandro Gallo',
      subtitle: 'Asesoría Financiera',
      description: 'Con más de 7,000 seguidores, Victor Gallo ha dado a conocer sus servicios de asesoría financiera. Implementamos herramientas que generaron 1,300 visualizaciones de perfil por semana y +5,000 impresiones en publicaciones.',
      images: [
        `${basePath}/victor/linkedin-profile.jpeg`,
        `${basePath}/victor/whatsapp-chats.jpeg`,
        `${basePath}/victor/ads-dashboard.jpeg`
      ],
      metrics: [
        { label: 'Seguidores', value: '+7,200', icon: '👥' },
        { label: 'Visualizaciones/semana', value: '1,316', icon: '👁️' },
        { label: 'Impresiones/semana', value: '5,019', icon: '📊' },
        { label: 'Newsletter', value: '+1,400', icon: '📧' }
      ],
      url: 'https://www.linkedin.com/in/victorgalloo/'
    },
    {
      title: 'ESRAWE',
      subtitle: 'Estudio de Diseño',
      description: 'A través de una estrategia de comunicación digital y visual, acompañamos a Esrawe Studio en la difusión de su trabajo creativo. Resaltamos la esencia del diseño mexicano contemporáneo mediante campañas enfocadas en storytelling visual.',
      metrics: [
        { label: 'Impresiones acumuladas', value: '+200,000', icon: '👁️' },
        { label: 'Suscripciones newsletter', value: '+1,200', icon: '📧' }
      ],
      url: 'https://esrawe.com/'
    },
    {
      title: 'Livscore',
      subtitle: 'App Móvil iOS',
      description: 'Aplicación nativa enfocada en fans del Liverpool FC. Permite verificar puntuaciones, estadísticas, próximos partidos y posiciones usando API-Football (RapidAPI). Desarrollada en Swift con arquitectura MVVM, UI programática con UIKit.',
      metrics: [
        { label: 'Descargas TestFlight', value: '+500', icon: '📱' },
        { label: 'Código Swift', value: '100%', icon: '⚡' }
      ],
      url: 'https://github.com/CarlosCardona/SLivscore1'
    },
    {
      title: 'Lead Generation',
      subtitle: 'Sistema Automatizado',
      description: 'Sistema automatizado generando 200+ leads/mes con chatbots inteligentes y seguimiento personalizado.',
      metrics: [
        { label: 'Leads/mes', value: '200+', icon: '🎯' },
        { label: 'Conversión', value: '+40%', icon: '📈' },
        { label: 'Tiempo respuesta', value: '<5min', icon: '⚡' }
      ],
      url: '#'
    },
    {
      title: 'Brand Awareness',
      subtitle: 'Campaña Viral',
      description: 'Campaña viral con 2M+ impresiones y engagement masivo en redes sociales.',
      metrics: [
        { label: 'Impresiones', value: '2M+', icon: '🔥' },
        { label: 'Conversión', value: '+60%', icon: '💬' },
        { label: 'Alcance', value: '500K+', icon: '🌍' }
      ],
      url: '#'
    }
  ]

  return (
    <Layout>
      <Hero />
      
      {/* Sección de Estadísticas */}
      <StatsSection />
      
      {/* Sección Servicios */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-white/80 mt-2">Soluciones integrales para potenciar tu negocio</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Sección Herramientas */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestras herramientas</h2>
        <ToolsMarquee tools={tools} />
        <p className="text-white/70 text-sm mt-3">Stack flexible — editables desde código para mantenerlo al día.</p>
      </section>

      {/* Sección Portafolio */}
      <section id="portafolio" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Portafolio</h2>
            <p className="text-white/80 mt-2">Casos recientes y resultados tangibles.</p>
          </div>
          <a href="#contacto" className="hidden md:inline-flex px-5 py-2 rounded-md bg-[#00A3E0] hover:bg-[#00A3E0]/80">Quiero algo así</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <PortfolioItem key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Importancia de la tecnología en marketing */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold">Importancia de la tecnología en marketing</h2>
            <p className="text-white/80 mt-6 leading-relaxed text-lg">
              En un mundo digital, la tecnología aplicada al marketing no es opcional: automatiza campañas, personaliza
              experiencias y analiza datos en tiempo real para maximizar el ROI. En Anthana, fusionamos creatividad con
              IA para resultados innovadores. Diseñamos funnels medibles, integramos tus sistemas y aceleramos iteraciones con
              experimentación continua.
            </p>
            <ul className="mt-6 space-y-3 text-white/80 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#00A3E0] mt-1">•</span>
                <span>Activación de datos first‑party y medición de todo el embudo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A3E0] mt-1">•</span>
                <span>Automatizaciones que escalan sin sacrificar la calidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A3E0] mt-1">•</span>
                <span>Asistentes conversacionales (texto/voz) para disponibilidad 24/7.</span>
              </li>
            </ul>
          </div>
          <div className="lg:pl-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-extrabold text-[#00A3E0] mb-3">x3</div>
                <div className="text-lg font-semibold mb-2">Automatización de campañas</div>
                <p className="text-sm text-white/70 leading-relaxed">Escala procesos sin aumentar headcount.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-extrabold text-[#00A3E0] mb-3">+30%</div>
                <div className="text-lg font-semibold mb-2">Personalización con IA</div>
                <p className="text-sm text-white/70 leading-relaxed">Mejoras típicas en conversión.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-extrabold text-[#00A3E0] mb-3">24/7</div>
                <div className="text-lg font-semibold mb-2">Detección de oportunidades</div>
                <p className="text-sm text-white/70 leading-relaxed">Monitoreo continuo con data.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-extrabold text-[#00A3E0] mb-3">API</div>
                <div className="text-lg font-semibold mb-2">Integraciones</div>
                <p className="text-sm text-white/70 leading-relaxed">Conecta tu stack y orquesta flujos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Equipo */}
      <TeamSection />

      {/* Sección Contacto */}
      <ContactForm />
    </Layout>
  )
}
