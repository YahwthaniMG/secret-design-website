export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Renovatie Wierden",
      category: "3D",
      description: "Een nieuwe uitstraling voor deze keuken met ophangbare keukens in Wierden.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Interieuradvies Hellendoorn", 
      category: "Realisatie",
      description: "Interieuradvies en styling maken van dit ruime nieuwbouwwoning in Hellendoorn.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Nieuwbouwwoning Hellendoorn",
      category: "Realisatie", 
      description: "Volledige 3D vormgeving en inrichting voor deze vrijstaande woning in Hellendoorn.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Nieuwbouwwoning Wierden",
      category: "3D",
      description: "3D ontwerp van dit benedenverdieping en terras voor deze vrijstaande woning.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Modern Apartment",
      category: "Realisatie",
      description: "Complete renovation of a modern city apartment with minimalist design.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Luxury Villa",
      category: "3D",
      description: "Exclusive interior design for a luxury villa with contemporary elements.",
      image: "/api/placeholder/400/300"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl font-light tracking-[0.2em]" style={{ color: '#2A2A2A' }}>
              T.A.
            </span>
          </div>
          <nav className="flex justify-center space-x-8 text-sm">
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#aanbod" className="text-gray-600 hover:text-gray-900">Aanbod</a>
            <a href="#over-ta" className="text-gray-600 hover:text-gray-900">Over TA</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Neem contact op</span>
              <span className="text-gray-600">→</span>
            </div>
            <button className="text-gray-600">Menu</button>
          </nav>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light mb-4" style={{ color: '#2A2A2A' }}>
              VRAAG EEN OFFERTE AAN VOOR EIGEN INTERIEUR!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Geef uw informatie op en ik bel u zo snel mogelijk op!
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input 
                type="email"
                placeholder="Email adres"
                className="p-3 border border-gray-300 rounded text-sm"
              />
              <input 
                type="tel"
                placeholder="Telefoon nummer"
                className="p-3 border border-gray-300 rounded text-sm"
              />
            </div>
            <input 
              type="text"
              placeholder="Bericht"
              className="w-full p-3 border border-gray-300 rounded text-sm mb-4"
            />
            <button className="bg-gray-800 text-white px-6 py-3 rounded text-sm hover:bg-gray-900 transition-colors">
              Verzenden →
            </button>
          </div>
          
          <div className="flex justify-end">
            <div className="text-right space-y-2">
              <p className="text-xs text-gray-500">Instagram Highlights</p>
              <div className="grid grid-cols-5 gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}