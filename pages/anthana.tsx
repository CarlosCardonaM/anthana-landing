import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ToolsMarquee from '../components/ToolsMarquee'
import StatsSection from '../components/StatsSection'
import TeamSection from '../components/TeamSection'

import PortfolioItem from '../components/PortfolioItem'
import StatsTimeline from '../components/StatsTimeline'
import ContactForm from '../components/ContactForm'

// Mock data - puedes reemplazar con datos reales
const services = [
  {
    title: 'Gestión de Redes Sociales',
    description: 'Optimización de perfiles en Instagram, Facebook y LinkedIn para proyectar credibilidad. Diseño de calendario de contenido enfocado en educar y demostrar experiencia (tips, consejos, testimonios de clientes, casos de éxito). Publicaciones constantes con imágenes, carruseles y videos que generen confianza y posicionen al cliente como referente en su área de asesoría. Gestión de comunidad: responder mensajes y comentarios con tono profesional y cercano.',
    stat: 'Marca sólida',
    icon: '📱'
  },
  {
    title: 'Publicidad Digital',
    description: 'Campañas segmentadas en Meta Ads (Facebook/Instagram), TikTok Ads y Google Ads. Definición de audiencias personalizadas según el perfil de cliente ideal. Creación de anuncios atractivos con textos persuasivos y diseño visual optimizado. Monitoreo y optimización constante para maximizar el retorno de inversión (ROI).',
    stat: 'ROI medible',
    icon: '📢'
  },
  {
    title: 'Creación de Contenido',
    description: 'Sesiones de fotografía y edición de imágenes profesionales. Producción de videos cortos tipo reel/TikTok con storytelling. Diseño gráfico adaptado a cada red social (banners, plantillas, carruseles). Contenido alineado con la identidad de la marca del cliente.',
    stat: 'Contenido atractivo',
    icon: '🎨'
  },
  {
    title: 'Desarrollo Web y E-commerce',
    description: 'Diseño de páginas web modernas, rápidas y adaptables a móviles. Optimización SEO para mejorar la visibilidad en Google. Integración de formularios de contacto, catálogo de productos o reservas. Opción de tiendas en línea (carrito de compras, pasarelas de pago).',
    stat: 'Ventas 24/7',
    icon: '🌐'
  },
  {
    title: 'Chatbots Automatizados',
    description: 'Implementación de chatbots en WhatsApp, Messenger o web. Respuestas rápidas a preguntas frecuentes. Automatización de reservas, pedidos o generación de leads. Integración con CRM o correo electrónico para seguimiento de clientes.',
    stat: 'Atención 24/7',
    icon: '🤖'
  },
  {
    title: 'Inteligencia Artificial aplicada al Marketing',
    description: 'Uso de IA para analizar el comportamiento de seguidores e identificar qué contenidos generan más interacción. Creación de copys iniciales y mensajes persuasivos con IA, siempre revisados y adaptados por nosotros. Automatización de seguimientos con prospectos para no perder ninguna oportunidad de venta.',
    stat: 'Eficiencia IA',
    icon: '🧠'
  }
]

const tools = [
  { name: 'Adobe Photoshop', logoSrc: '/logos/photoshop.svg' },
  { name: 'OpenAI', logoSrc: '/logos/openai.svg' },
  { name: 'Python', logoSrc: '/logos/python.svg' },
  { name: 'Databricks', logoSrc: '/logos/databricks.svg' },
  { name: 'Swift', logoSrc: '/logos/swift.svg' },
  { name: 'LinkedIn', logoSrc: '/logos/linkedin.svg' },
  { name: 'Canva', logoSrc: '/logos/canva.svg' },
  { name: 'Google Ads', logoSrc: '/logos/google-ads.svg' },
  { name: 'Facebook Ads', logoSrc: '/logos/facebook-ads.svg' }
]

const portfolio = [
  // 📸 SISTEMA DE IMÁGENES DEL PORTFOLIO:
  // 
  // ✅ CASOS CON FOTOS REALES: Solo descomenta el array 'images' cuando tengas fotos
  // 📁 CASOS SIN FOTOS: Muestran placeholder con emoji de carpeta
  // 
  // 🔧 CÓMO AGREGAR FOTOS A UN CASO:
  // 1. Crea la carpeta en public/ (ej: public/esrawe/)
  // 2. Arrastra tus fotos ahí (formato: .jpeg, .jpg, .png)
  // 3. Descomenta y actualiza el array 'images' en el caso correspondiente
  // 4. ¡Listo! El carrusel se activa automáticamente
  //
  {
    title: 'Victor Alejandro Gallo',
    subtitle: 'Asesoría Financiera',
    description: 'Con más de 7,000 seguidores, Victor Gallo ha dado a conocer sus servicios de asesoría financiera. Implementamos herramientas que generaron 1,300 visualizaciones de perfil por semana y +5,000 impresiones en publicaciones.',
    // ✅ IMÁGENES REALES: Solo descomenta esta línea cuando tengas fotos
    images: [
      '/victor/linkedin-profile.jpeg',
      '/victor/whatsapp-chats.jpeg',
      '/victor/ads-dashboard.jpeg'
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
    // 📁 PARA AGREGAR FOTOS: 
    // 1. Crea carpeta: public/esrawe/
    // 2. Arrastra tus fotos ahí (formato: .jpeg, .jpg, .png)
    // 3. Descomenta y actualiza estas líneas:
    // images: [
    //   '/esrawe/foto1.jpeg',
    //   '/esrawe/foto2.jpeg',
    //   '/esrawe/foto3.jpeg'
    // ],
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
    // 📁 PARA AGREGAR FOTOS: 
    // 1. Crea carpeta: public/livscore/
    // 2. Arrastra tus fotos ahí (formato: .jpeg, .jpg, .png)
    // 3. Descomenta y actualiza estas líneas:
    // images: [
    //   '/livscore/screenshot1.jpeg',
    //   '/livscore/screenshot2.jpeg',
    //   '/livscore/screenshot3.jpeg'
    // ],
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
    // 📁 PARA AGREGAR FOTOS: 
    // 1. Crea carpeta: public/leads/
    // 2. Arrastra tus fotos ahí (formato: .jpeg, .jpg, .png)
    // 3. Descomenta y actualiza estas líneas:
    // images: [
    //   '/leads/dashboard1.jpeg',
    //   '/leads/chatbot1.jpeg',
    //   '/leads/analytics1.jpeg'
    // ],
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
    // 📁 PARA AGREGAR FOTOS: 
    // 1. Crea carpeta: public/brand/
    // 2. Arrastra tus fotos ahí (formato: .jpeg, .jpg, .png)
    // 3. Descomenta y actualiza estas líneas:
    // images: [
    //   '/brand/campaign1.jpeg',
    //   '/brand/content1.jpeg',
    //   '/brand/results1.jpeg'
    // ],
    metrics: [
      { label: 'Impresiones', value: '2M+', icon: '🔥' },
      { label: 'Conversión', value: '+60%', icon: '💬' },
      { label: 'Alcance', value: '500K+', icon: '🌍' }
    ],
    url: '#'
  }
]

export default function AnthanaPage() {
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
            <StatsTimeline />
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <TeamSection />
      
      {/* CTA + Formulario de contacto */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Hablemos de tu proyecto</h2>
          <p className="text-white/80 mt-2">Cuéntanos tus objetivos y te proponemos un plan en menos de 48h.</p>
        </div>
        <ContactForm />
        <p className="text-white/60 text-xs text-center mt-4">Al enviar aceptas nuestra política de privacidad. Nos pondremos en contacto solo con información relevante.</p>
      </section>

      {/* Accesibilidad: salto a inicio */}
      <a href="#home" className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur hover:bg-white/20" aria-label="Volver al inicio">↑</a>

      {/* Test placeholder (Jest/RTL):
      // render(<AnthanaPage services={[]} tools={[]} portfolio={[]} />)
      // expect(screen.getByText('Tecnología')).toBeInTheDocument()
      */}
    </Layout>
  )
}
