export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 2,
      title: "Proyecto 2", 
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Se necesita una breve descripción aquí, elaborando sobre el contexto, propósito o detalles relacionados con el tema que se describe.", 
      imageUrl: "/images/logo.jpg"
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Imagen del proyecto */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
      </div>
    </section>
  )
}