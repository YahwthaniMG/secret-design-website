'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre - lado izquierdo - NO clickeable */}
          <div className="flex items-center space-x-4">
            {/* Logo de imagen */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image 
                src="/images/icon.png" 
                alt="Secret Design Logo" 
                className="rounded-full object-cover border-2 border-gray-200"
                width={60}
                height={60}
                priority
              />
            </div>
            
            {/* Texto del logo con decoraciones */}
            <div className="flex flex-col">
              {/* Decoración superior */}
              <div className="flex justify-center mb-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-gray-500"></div>
                  <div className="w-1 h-5 bg-gray-700"></div>
                  <div className="w-1 h-4 bg-gray-600"></div>
                  <div className="w-1 h-6 bg-gray-800"></div>
                  <div className="w-1 h-3 bg-gray-500"></div>
                </div>
              </div>
              
              {/* Nombre principal */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide leading-none">
                SECRET DESIGN
              </h1>
              
              {/* Eslogan */}
              <p className="text-xs text-gray-600 tracking-widest uppercase leading-none mt-1">
                GERENCIA DE PROYECTOS
              </p>
              
              {/* Decoración inferior */}
              <div className="flex justify-center mt-1">
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

          {/* Navegación desktop - lado derecho */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-lg font-semibold transition-all duration-200 pb-2 border-b-2 ${
                pathname === '/' 
                  ? 'text-blue-900 border-blue-900' 
                  : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-300'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-lg font-semibold transition-all duration-200 pb-2 border-b-2 ${
                pathname === '/portfolio' 
                  ? 'text-blue-900 border-blue-900' 
                  : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-300'
              }`}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`text-lg font-semibold transition-all duration-200 pb-2 border-b-2 ${
                pathname === '/contacto' 
                  ? 'text-blue-900 border-blue-900' 
                  : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-300'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón menú hamburguesa - Solo mobile */}
          <button 
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`text-lg font-semibold py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/portfolio" 
                className={`text-lg font-semibold py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/portfolio' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portafolio
              </Link>
              <Link 
                href="/contacto" 
                className={`text-lg font-semibold py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/contacto' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}