export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Principal */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-black rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">SD</span>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
            SECRET DESIGN
          </h1>
          
          <p className="text-xl md:text-2xl mb-8" style={{ color: '#D4AF37', fontWeight: '500' }}>
            GERENCIA DE PROYECTOS
          </p>

          {/* Subtítulo elegante */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-light mb-6" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
              Arquitectura y diseño de interiores con visión única
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transformamos espacios en experiencias extraordinarias, donde cada detalle cuenta una historia única.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#portfolio"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Portfolio
            </a>
            <a 
              href="#contacto"
              className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Solicitar Consulta
            </a>
          </div>

          {/* Línea decorativa */}
          <div className="mt-16">
            <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  )
}