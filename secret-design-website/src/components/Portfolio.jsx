import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Residencia Moderna Los Altos",
      description: "Diseño integral de interiores para una residencia familiar de 300m² en Zapopan. Proyecto que combina funcionalidad y elegancia con materiales de primera calidad.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 2,
      title: "Oficinas Corporativas Plaza Central",
      description: "Remodelación completa de oficinas ejecutivas de 500m². Gestión integral del proyecto desde el diseño hasta la supervisión de obra.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 3,
      title: "Restaurante Gourmet Downtown", 
      description: "Diseño y coordinación de espacios comerciales para restaurante de alta cocina. Proyecto que incluye diseño de mobiliario personalizado.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 4,
      title: "Penthouse Luxury Providencia",
      description: "Renovación completa de penthouse de lujo con vista panorámica. Supervisión de obra y coordinación de múltiples especialidades.", 
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 5,
      title: "Clínica Dental Especializada",
      description: "Diseño de espacios médicos especializados con enfoque en funcionalidad y confort para pacientes. Incluye diseño 3D y renderizado.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 6,
      title: "Casa de Campo Tlajomulco",
      description: "Proyecto de casa de descanso familiar con diseño que integra espacios interiores y exteriores. Decoración y styling completo.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 7,
      title: "Boutique Hotel Centro Histórico",
      description: "Diseño de interiores para hotel boutique de 12 habitaciones. Proyecto que respeta la arquitectura colonial integrando elementos contemporáneos.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 8,
      title: "Loft Industrial Americana",
      description: "Transformación de espacio industrial en loft residencial moderno. Gestión integral incluyendo permisos y supervisión técnica.",
      imageUrl: "/images/logo.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada proyecto cuenta una historia única. Descubre cómo transformamos espacios ordinarios en ambientes extraordinarios.
          </p>
        </div>
        
        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer max-w-sm mx-auto"
            >
              {/* Card Image Container - Altura fija */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content - Altura consistente */}
              <div className="p-5 h-32 flex flex-col">
                <h3 className="text-lg font-bold text-blue-900 mb-3 line-clamp-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-20 border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu visión. Contáctanos para una consulta personalizada y cotización gratuita.
          </p>
          <Link 
            href="/contacto"
            className="inline-block bg-blue-900 text-white px-8 py-3 text-lg font-medium hover:bg-blue-800 transition-colors rounded-lg"
          >
            Solicitar Cotización Gratuita
          </Link>
        </div>
      </div>
    </div>
  )
}