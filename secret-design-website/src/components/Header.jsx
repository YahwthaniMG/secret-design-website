'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
              <Image 
                src="/images/icon.jpg" 
                alt="Secret Design Logo" 
                className="rounded-full mx-auto lg:mx-0 mb-6 shadow-xl"
                width={60} 
                height={60}
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900 tracking-wide">SECRET DESIGN</h1>
              <p className="text-xs text-gray-500 tracking-wider">GERENCIA DE PROYECTOS</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Servicios
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#sobre-nosotros" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Sobre Nosotros
            </a>
            <div className="flex items-center space-x-2">
              <a 
                href="#contacto" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Contacto
              </a>
              <span className="text-gray-400">→</span>
            </div>
            <button 
              className="text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menú
            </button>
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
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2">
                Servicios
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2">
                Portfolio
              </a>
              <a href="#sobre-nosotros" className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}