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
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre - lado izquierdo */}
          <div className="flex items-center space-x-3">
            {/* Logo de imagen */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image 
                src="/images/icon.png" 
                alt="Secret Design Logo" 
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-gray-200"
                priority
              />
            </div>
            
            {/* Texto del logo con decoraciones */}
            <div className="flex flex-col">
              {/* Decoración superior */}
              <div className="flex justify-start mb-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-gray-500"></div>
                  <div className="w-1 h-5 bg-gray-700"></div>
                  <div className="w-1 h-4 bg-gray-600"></div>
                  <div className="w-1 h-6 bg-gray-800"></div>
                  <div className="w-1 h-3 bg-gray-500"></div>
                </div>
              </div>
              
              {/* Nombre principal */}
              <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-wide leading-none">
                SECRET DESIGN
              </h1>
              
              {/* Eslogan */}
              <p className="text-xs text-gray-600 tracking-widest uppercase leading-none">
                GERENCIA DE PROYECTOS
              </p>
              
              {/* Decoración inferior */}
              <div className="flex justify-start mt-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-gray-500"></div>
                  <div className="w-1 h-5 bg-gray-700"></div>
                  <div className="w-1 h-4 bg-gray-600"></div>
                  <div className="w-1 h-6 bg-gray-800"></div>
                  <div className="w-1 h-3 bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación desktop - Solo visible en desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-base transition-all duration-200 px-3 py-2 ${
                pathname === '/' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-base transition-all duration-200 px-3 py-2 ${
                pathname === '/portfolio' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`text-base transition-all duration-200 px-3 py-2 ${
                pathname === '/contacto' 
                  ? 'text-black font-bold' 
                  : 'text-black font-medium hover:font-semibold'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa - Solo visible en móvil */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-16 h-16 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            <div className="flex flex-col justify-center items-center space-y-1">
              <div className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable - Solo se muestra cuando está abierto */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-4 space-y-2">
            <Link 
              href="/" 
              className={`block text-base transition-all duration-200 px-3 py-3 rounded-lg ${
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
              className={`block text-base transition-all duration-200 px-3 py-3 rounded-lg ${
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
              className={`block text-base transition-all duration-200 px-3 py-3 rounded-lg ${
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
      )}
    </header>
  )
}