export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageGradient: "from-gray-200 to-gray-400"
    },
    {
      id: 2,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageGradient: "from-blue-200 to-blue-400"
    },
    {
      id: 3,
      title: "Título del Proyecto", 
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageGradient: "from-green-200 to-green-400"
    },
    {
      id: 4,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.", 
      imageGradient: "from-purple-200 to-purple-400"
    },
    {
      id: 5,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageGradient: "from-amber-200 to-amber-400"
    },
    {
      id: 6,
      title: "Título del Proyecto",
      description: "Escribe una descripción del proyecto aquí. Incluye detalles y algo de información de antecedentes.",
      imageGradient: "from-rose-200 to-rose-400"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              
              {/* Imagen del proyecto */}
              <div className={`bg-gradient-to-br ${project.imageGradient} h-64 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-sm font-medium opacity-90">Imagen del Proyecto</p>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
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