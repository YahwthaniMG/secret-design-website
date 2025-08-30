import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Proyecto Residencial 1",
      description: "Descripción del proyecto va aquí. Detalles sobre el contexto, objetivos y resultados del diseño interior.",
      imageUrl: "/images/proyecto/test.png"
    },
    {
      id: 2,
      title: "Proyecto Comercial 2",
      description: "Descripción del proyecto va aquí. Información sobre la gestión integral del proyecto arquitectónico.",
      imageUrl: "/images/proyecto/test.png"
    },
    {
      id: 3,
      title: "Proyecto Oficinas 3", 
      description: "Descripción del proyecto va aquí. Detalles del proceso de consultoría y diseño especializado.",
      imageUrl: "/images/proyecto/test.png"
    },
    {
      id: 4,
      title: "Proyecto Residencial 4",
      description: "Descripción del proyecto va aquí. Información sobre renovación completa y supervisión de obra.", 
      imageUrl: "/images/proyecto/test.png"
    },
    {
      id: 5,
      title: "Proyecto Comercial 5",
      description: "Descripción del proyecto va aquí. Detalles sobre diseño 3D y coordinación de espacios.",
      imageUrl: "/images/proyecto/test.png"
    },
    {
      id: 6,
      title: "Proyecto Villa 6",
      description: "Descripción del proyecto va aquí. Información sobre styling, decoración y entrega final.",
      imageUrl: "/images/proyecto/test.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">
            Proyectos
          </h1>
        </div>
        
        {/* Grid responsivo de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden max-w-sm mx-auto"
            >
              {/* Contenedor de imagen con tamaño fijo */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Contenido del proyecto - altura fija para consistencia */}
              <div className="p-4 h-32 flex flex-col">
                <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 overflow-hidden">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de contacto final */}
        <div className="text-center mt-20 border-t border-gray-200 pt-16">
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