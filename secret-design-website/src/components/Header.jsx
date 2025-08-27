'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo y nombre - lado izquierdo */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-gray-400"></div>
                  <div className="w-1 h-6 bg-gray-600"></div>
                  <div className="w-1 h-5 bg-gray-500"></div>
                  <div className="w-1 h-7 bg-gray-700"></div>
                  <div className="w-1 h-4 bg-gray-400"></div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-blue-900 tracking-wide">SECRET DESIGN</h1>
              <p className="text-xs text-gray-600 tracking-widest">ESLOGAN AQUÍ</p>
              <div className="flex justify-center mt-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-gray-400"></div>
                  <div className="w-1 h-6 bg-gray-600"></div>
                  <div className="w-1 h-5 bg-gray-500"></div>
                  <div className="w-1 h-7 bg-gray-700"></div>
                  <div className="w-1 h-4 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación - lado derecho */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-blue-900 font-medium hover:text-blue-700 transition-colors border-b-2 border-blue-900 pb-1">
              Inicio
            </a>
            <a href="#portfolio" className="text-gray-600 font-medium hover:text-blue-900 transition-colors">
              Portafolio
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
          <div className="md:hidden py-6 border-t border-gray-100 mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-blue-900 font-medium py-2">Inicio</a>
              <a href="#portfolio" className="text-gray-600 font-medium py-2">Portafolio</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}