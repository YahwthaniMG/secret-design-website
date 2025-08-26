'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SD</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">SECRET DESIGN</h1>
              <p className="text-xs text-gray-600">GERENCIA DE PROYECTOS</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-gray-900 transition-colors">
              Servicios
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre Nosotros
            </a>
            <a 
              href="#contacto" 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-gray-900 transition-colors">
                Servicios
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Portfolio
              </a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}