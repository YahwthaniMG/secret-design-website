'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
      </div>
    </section>
  )
}