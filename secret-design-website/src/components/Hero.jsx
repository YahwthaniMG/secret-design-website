import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Decorative elements */}
      <div className="absolute top-32 left-16 opacity-30">
        <div className="w-24 h-24 rounded-full border border-gray-400"></div>
      </div>
      <div className="absolute top-48 right-24 opacity-20">
        <div className="w-16 h-16 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Contenido principal con layout horizontal elegante */}
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            
            {/* Imagen/elemento decorativo izquierda */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg"></div>
                <div className="w-3/4 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-md"></div>
              </div>
            </div>

            {/* Contenido central */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Secret Design Logo" 
                  width={120} 
                  height={120}
                  className="rounded-full mx-auto lg:mx-0 mb-6 shadow-xl"
                />
              </div>

              <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                SERVICIOS DE EXCELENCIA
              </p>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-8" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
                DISEÑO DE INTERIORES,<br/>
                GESTIÓN DE PROYECTOS Y<br/>
                <span className="inline-block w-12 h-12 bg-black rounded-lg mx-2 align-middle"></span>
                <span style={{ color: '#D4AF37' }}>CONSULTORÍA ESPECIALIZADA</span><br/>
                <span className="text-3xl">PARA TU HOGAR Y OFICINA</span>
              </h1>

              {/* Lista de servicios */}
              <div className="text-left text-sm text-gray-600 space-y-1 mb-10">
                <p>1. CONSULTA INICIAL PERSONALIZADA</p>
                <p>2. DESARROLLO DE CONCEPTO</p>
                <p>3. SELECCIÓN DE MATERIALES Y COLORES</p>
                <p>4. DISEÑO DE INTERIORES COMPLETO</p>
                <p>5. GESTIÓN INTEGRAL DEL PROYECTO</p>
                <p>6. RENDERIZADO 3D</p>
                <p>7. SUPERVISIÓN DE OBRA</p>
                <p>8. STYLING Y DECORACIÓN</p>
                <p>9. ENTREGA Y SEGUIMIENTO</p>
                <p>10. GARANTÍA Y SOPORTE</p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#portfolio"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                >
                  Ver Portfolio
                </a>
                <a 
                  href="#contacto"
                  className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium"
                >
                  Solicitar Consulta
                </a>
              </div>
            </div>

            {/* Imagen/elemento decorativo derecha */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                <div className="w-full h-80 bg-gradient-to-bl from-gray-200 to-gray-300 rounded-2xl shadow-lg"></div>
                <div className="w-4/5 h-56 ml-auto bg-gradient-to-bl from-gray-100 to-gray-200 rounded-xl shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}