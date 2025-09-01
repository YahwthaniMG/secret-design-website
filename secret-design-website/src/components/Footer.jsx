'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
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
            className="inline-block bg-blue-900 text-white px-8 py-3 text-lg font-medium hover:bg-blue-800 transition-colors rounded-lg"
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
            <p className="text-sm text-gray-600 tracking-widest mt-1">GERENCIA DE PROYECTOS</p>
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
          <div className="text-center md:text-right text-gray-400">
              <p className="text-lg mb-2">© 2025 Secret Design. Todos los derechos reservados</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="hover:text-blue-900 transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-blue-900 transition-colors">Términos y Condiciones</a>
                <a href="#" className="hover:text-blue-900 transition-colors">Aviso Legal</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}