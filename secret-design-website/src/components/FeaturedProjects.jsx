export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageGradient: "from-gray-100 to-gray-300"
    },
    {
      id: 2,
      title: "Proyecto 2", 
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageGradient: "from-gray-200 to-gray-400"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.", 
      imageGradient: "from-gray-300 to-gray-500"
    }
  ]

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              
              {/* Imagen del proyecto */}
              <div className={`bg-gradient-to-br ${project.imageGradient} h-56 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/40 rounded-lg"></div>
                  </div>
                  <p className="text-sm font-medium">Imagen del Proyecto</p>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}