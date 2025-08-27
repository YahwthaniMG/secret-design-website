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
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        
        {/* Carrusel de imágenes */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {carouselImages.map((image, index) => {
              const slideIndex = (currentSlide + index) % carouselImages.length
              const slideImage = carouselImages[slideIndex]
              return (
                <div key={slideIndex} className="relative">
                  <div className={`bg-gradient-to-br ${slideImage.color} rounded-lg h-48 shadow-md transition-all duration-500`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-lg">🏠</span>
                        </div>
                        <p className="text-xs font-medium opacity-90">Imagen {slideIndex + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mensaje de contacto */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            ¿Estás listo para dar vida a tu proyecto de sueños?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctanos hoy para discutir los objetivos de tu proyecto, solicitar una cotización, o programar una consulta.
          </p>
          <button className="bg-blue-900 text-white px-10 py-4 text-lg font-medium hover:bg-blue-800 transition-colors">
            Obtenga una Cotización Gratuita
          </button>
        </div>

        {/* Logo y copyright */}
        <div className="text-center border-t border-gray-200 pt-8">
          <div className="mb-4">
            <div className="flex justify-center mb-2">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="w-1 h-5 bg-gray-500"></div>
                <div className="w-1 h-7 bg-gray-700"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-900 tracking-wide">SECRET DESIGN</h3>
            <p className="text-xs text-gray-600 tracking-widest">ESLOGAN AQUÍ</p>
            <div className="flex justify-center mt-2">
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
}.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.718 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.35 1.052 2.35 2.349 0 1.298-1.053 2.35-2.35 2.35z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right text-gray-400">
              <p className="text-lg mb-2">© 2025 Secret Design. Todos los derechos reservados</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl md:text-6xl font-light text-gray-700 opacity-40" style={{ fontFamily: 'Playfair Display, serif' }}>
            SECRET DESIGN
          </div>
        </div>
      </div>
    </footer>
  )
}