export default function About() {
  return (
    <section id="sobre-nosotros" className="py-24" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido textual */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light mb-8" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
              Sobre Nosotros
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                En <strong>Secret Design</strong> creemos que cada espacio tiene el potencial de contar una historia única. 
                Somos un estudio especializado en diseño de interiores y gestión integral de proyectos arquitectónicos 
                con sede en Zapopan, Jalisco.
              </p>
              
              <p>
                Nuestro enfoque combina la creatividad del diseño con la precisión de la gestión de proyectos, 
                asegurando que cada detalle se ejecute a la perfección desde la conceptualización hasta la entrega final.
              </p>
              
              <p>
                Trabajamos de cerca con nuestros clientes para entender sus necesidades, estilo de vida y visión, 
                transformando espacios ordinarios en ambientes extraordinarios que reflejen su personalidad única.
              </p>
            </div>

            {/* Valores */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-black rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: '#2A2A2A' }}>Excelencia</h3>
                <p className="text-gray-600">Atención meticulosa a cada detalle en todos nuestros proyectos.</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-black rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: '#2A2A2A' }}>Colaboración</h3>
                <p className="text-gray-600">Trabajamos como socios en la realización de tu visión.</p>
              </div>
            </div>
          </div>

          {/* Elemento visual */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-80 shadow-lg"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-40 shadow-md"></div>
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl h-40 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}