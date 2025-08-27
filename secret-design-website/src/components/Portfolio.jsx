export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Título del Proyecto", 
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.", 
      imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Grid de proyectos - 2x3 como en la referencia */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              
              {/* Imagen del proyecto */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido del proyecto */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
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