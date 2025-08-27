'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
    { id: 1, color: "from-blue-200 to-blue-400" },
    { id: 2, color: "from-green-200 to-green-400" },
    { id: 3, color: "from-purple-200 to-purple-400" },
    { id: 4, color: "from-amber-200 to-amber-400" },
    { id: 5, color: "from-rose-200 to-rose-400" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  return (
    <section id="inicio" className="bg-gray-50 pt-12 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Mensaje principal */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Profesionales de la Construcción<br/>
            Experimentados
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Tenemos la experiencia para manejar su proyecto con confianza.
          </p>
          <button className="bg-blue-900 text-white px-10 py-4 text-lg font-medium hover:bg-blue-800 transition-colors rounded">
            Obtenga una Cotización Gratuita
          </button>
        </div>

        {/* Carrusel de proyectos - Layout horizontal */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[0, 1, 2].map((offset) => {
              const slideIndex = (currentSlide + offset) % carouselImages.length
              const slideImage = carouselImages[slideIndex]
              return (
                <div key={`slide-${slideIndex}`} className="relative">
                  <div className={`bg-gradient-to-br ${slideImage.color} rounded-xl h-72 shadow-lg transition-all duration-700 transform hover:scale-105`}>
                    <div className="w-full h-full flex items-center justify-center rounded-xl">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/40 rounded-lg"></div>
                        </div>
                        <p className="text-lg font-medium">Proyecto {slideIndex + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Indicadores del carrusel */}
          <div className="flex justify-center space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-900 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}