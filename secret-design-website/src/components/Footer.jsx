'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Imágenes para el carrusel inferior
  const footerImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % footerImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [footerImages.length])

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        
        {/* Carrusel de imágenes inferior */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {footerImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={imageUrl}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje de contacto */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            ¿Estás listo para dar vida a tu proyecto de sueños?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy para discutir los objetivos de tu proyecto, solicitar una cotización, o programar una consulta.
          </p>
          <Link 
            href="/contacto"
            className="inline-block bg-blue-900 text-white px-8 py-3 text-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Obtenga una Cotización Gratuita
          </Link>
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