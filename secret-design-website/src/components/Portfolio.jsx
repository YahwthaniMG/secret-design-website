export default function Portfolio() {
  const projects = [
    /*{
      id: 1,
      title: "Casa Residencial Zapopan",
      category: "Diseño Completo",
      description: "Renovación integral de casa habitación con enfoque minimalista y funcional para familia joven.",
      color: "from-blue-200 to-blue-300"
    },
    {
      id: 2,
      title: "Oficinas Corporativas Guadalajara", 
      category: "Gestión de Proyecto",
      description: "Diseño y coordinación de espacios de trabajo colaborativo para empresa tecnológica en crecimiento.",
      color: "from-green-200 to-green-300"
    },
    {
      id: 3,
      title: "Departamento Moderno Providencia",
      category: "Consultoría",
      description: "Asesoría especializada en optimización de espacios pequeños con soluciones inteligentes de almacenamiento.",
      color: "from-purple-200 to-purple-300"
    },
    {
      id: 4,
      title: "Restaurante Conceptual Centro",
      category: "Diseño Completo",
      description: "Proyecto integral desde concepto hasta ejecución para restaurante de cocina contemporánea mexicana.",
      color: "from-amber-200 to-amber-300"
    },
    {
      id: 5,
      title: "Showroom Comercial Tlaquepaque",
      category: "Gestión de Proyecto",
      description: "Coordinación de diseño y construcción para espacio comercial de muebles y decoración de lujo.",
      color: "from-rose-200 to-rose-300"
    },
    {
      id: 6,
      title: "Villa Familiar Ajijic",
      category: "Consultoría",
      description: "Consultoría integral para renovación de villa con integración de espacios interiores y exteriores.",
      color: "from-teal-200 to-teal-300"
    }*/
  ]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden mb-6 aspect-square shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <p className="text-sm font-medium opacity-90">Ver Proyecto</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
                ¿Listo para transformar tu espacio?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Solicita una consulta gratuita y descubre cómo podemos hacer realidad tu visión. 
                Nuestro equipo te acompañará en cada paso del proceso.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input 
                  type="email"
                  placeholder="Tu email"
                  className="p-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors"
                />
                <input 
                  type="tel"
                  placeholder="Tu teléfono"
                  className="p-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-xl text-sm mb-6 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              ></textarea>
              <button className="bg-black text-white px-8 py-4 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
                Solicitar Consulta Gratuita →
              </button>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-80 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}