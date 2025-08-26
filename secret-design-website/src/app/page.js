import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Sección temporal de servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
            Nuestros Servicios
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2A2A2A' }}>
                Diseño de Interiores
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Espacios únicos que reflejan tu personalidad y estilo de vida, con atención meticulosa a cada detalle.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2A2A2A' }}>
                Gestión de Proyectos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Coordinamos cada aspecto desde el concepto inicial hasta la entrega final, asegurando excelencia.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2A2A2A' }}>
                Consultoría Especializada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Asesoramiento profesional para maximizar el potencial arquitectónico de tus espacios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección temporal de contacto */}
      <section id="contacto" className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Contacta con nosotros y descubre cómo podemos hacer realidad tu visión
          </p>
          <a 
            href="mailto:yuvia@secretdesign.mx"
            className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </section>
    </main>
  )
}