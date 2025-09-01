'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre - lado izquierdo */}
          <div className="flex items-center space-x-4">
            {/* Logo de imagen */}
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image 
                src="/images/icon.png" 
                alt="Secret Design Logo" 
                width={70}
                height={70}
                className="rounded-full object-cover border-2 border-gray-200"
                priority
              />
            </div>
            
            {/* Texto del logo con decoraciones */}
            <div className="flex flex-col">
              {/* Decoración superior */}
              <div className="flex justify-start mb-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-gray-500"></div>
                  <div className="w-1 h-6 bg-gray-700"></div>
                  <div className="w-1 h-5 bg-gray-600"></div>
                  <div className="w-1 h-7 bg-gray-800"></div>
                  <div className="w-1 h-4 bg-gray-500"></div>
                </div>
              </div>
              
              {/* Nombre principal */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide leading-none">
                SECRET DESIGN
              </h1>
              
              {/* Eslogan */}
              <p className="text-sm text-gray-600 tracking-widest uppercase leading-none">
                GERENCIA DE PROYECTOS
              </p>
              
              {/* Decoración inferior */}
              <div className="flex justify-start mt-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-gray-500"></div>
                  <div className="w-1 h-6 bg-gray-700"></div>
                  <div className="w-1 h-5 bg-gray-600"></div>
                  <div className="w-1 h-7 bg-gray-800"></div>
                  <div className="w-1 h-4 bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación desktop - lado derecho - Solo visible en desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-lg transition-all duration-200 px-4 py-2 rounded-lg ${
                pathname === '/' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-lg transition-all duration-200 px-4 py-2 rounded-lg ${
                pathname === '/portfolio' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
              onClick={closeMenu}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`text-lg transition-all duration-200 px-4 py-2 rounded-lg ${
                pathname === '/contacto' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa - Solo visible en móvil */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <nav className="px-4 py-6 space-y-4">
          <Link 
            href="/" 
            className={`block text-lg transition-all duration-200 px-4 py-3 rounded-lg ${
              pathname === '/' 
                ? 'text-black font-bold bg-gray-50' 
                : 'text-black font-medium hover:bg-gray-50 hover:font-semibold'
            }`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            href="/portfolio" 
            className={`block text-lg transition-all duration-200 px-4 py-3 rounded-lg ${
              pathname === '/portfolio' 
                ? 'text-black font-bold bg-gray-50' 
                : 'text-black font-medium hover:bg-gray-50 hover:font-semibold'
            }`}
            onClick={closeMenu}
          >
            Portafolio
          </Link>
          <Link 
            href="/contacto" 
            className={`block text-lg transition-all duration-200 px-4 py-3 rounded-lg ${
              pathname === '/contacto' 
                ? 'text-black font-bold bg-gray-50' 
                : 'text-black font-medium hover:bg-gray-50 hover:font-semibold'
            }`}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}