export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 2,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 3,
      title: "Título del Proyecto", 
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 4,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.", 
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 5,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 6,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "/images/logo.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">
            Proyectos
          </h1>
        </div>
        
        {/* Grid de proyectos - 2 columnas desktop, 1 columna mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Imagen del proyecto */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  width={100}
                  height={100}
                />
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de contacto final */}
        <div className="text-center border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Estás listo para dar vida a tu proyecto de sueños?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para discutir los objetivos de tu proyecto, solicitar una cotización, o programar una consulta.
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-blue-900 text-white px-8 py-3 text-lg font-medium hover:bg-blue-800 transition-colors rounded"
          >
            Obtenga una Cotización Gratuita
          </a>
        </div>
      </div>
    </div>
  )
}