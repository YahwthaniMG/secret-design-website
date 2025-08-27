'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
    { id: 1, color: "from-stone-200 to-stone-400" },
    { id: 2, color: "from-slate-200 to-slate-400" },
    { id: 3, color: "from-zinc-200 to-zinc-400" },
    { id: 4, color: "from-neutral-200 to-neutral-400" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  return (
    <footer className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        
        {/* Carrusel de imágenes */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[0, 1, 2, 3].map((offset) => {
              const slideIndex = (currentSlide + offset) % carouselImages.length
              const slideImage = carouselImages[slideIndex]
              return (
                <div key={`footer-slide-${slideIndex}`} className="relative">
                  <div className={`bg-gradient-to-br ${slideImage.color} rounded-xl h-56 shadow-lg transition-all duration-500 hover:scale-105`}>
                    <div className="w-full h-full flex items-center justify-center rounded-xl">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <div className="w-10 h-10 bg-white/40 rounded-lg"></div>
                        </div>
                        <p className="text-sm font-medium">Imagen {slideIndex + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mensaje de contacto */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            ¿Estás listo para dar vida a tu proyecto de sueños?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy para discutir los objetivos de tu proyecto, solicitar una cotización, o programar una consulta.
          </p>
          <button className="bg-blue-900 text-white px-10 py-4 text-lg font-medium hover:bg-blue-800 transition-colors rounded">
            Obtenga una Cotización Gratuita
          </button>
        </div>

        {/* Logo y copyright */}
        <div className="text-center border-t border-gray-200 pt-12">
          <div className="mb-6">
            <div className="flex justify-center mb-3">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="w-1 h-5 bg-gray-500"></div>
                <div className="w-1 h-7 bg-gray-700"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 tracking-wide">SECRET DESIGN</h3>
            <p className="text-sm text-gray-600 tracking-widest mt-1">ESLOGAN AQUÍ</p>
            <div className="flex justify-center mt-3">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="w-1 h-5 bg-gray-500"></div>
                <div className="w-1 h-7 bg-gray-700"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2023 por Nombre de la Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}