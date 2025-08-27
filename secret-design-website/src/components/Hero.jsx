'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Imágenes reales de arquitectura minimalista como en tu referencia
  const carouselImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  return (
    <section className="bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Mensaje principal */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Profesionales de la Construcción<br/>
            Experimentados
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Tenemos la experiencia para manejar su proyecto con confianza.
          </p>
          <Link 
            href="/contacto"
            className="inline-block bg-blue-900 text-white px-8 py-3 text-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Obtenga una Cotización Gratuita
          </Link>
        </div>

        {/* Carrusel de imágenes - 3 columnas como en la referencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carouselImages.map((image, index) => (
            <div key={image.id} className="relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={image.url}
                  alt={`Proyecto arquitectónico ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}