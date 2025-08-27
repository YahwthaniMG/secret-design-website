export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageGradient: "from-gray-200 to-gray-400"
    },
    {
      id: 2,
      title: "Proyecto 2", 
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageGradient: "from-gray-300 to-gray-500"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.", 
      imageGradient: "from-gray-100 to-gray-300"
    }
  ]

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Imagen del proyecto */}
              <div className={`bg-gradient-to-br ${project.imageGradient} h-48 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <p className="text-sm font-medium opacity-90">Imagen del Proyecto</p>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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