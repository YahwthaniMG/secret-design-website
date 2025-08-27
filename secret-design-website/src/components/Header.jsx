'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre - lado izquierdo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* Logo decorativo */}
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                  <div className="w-0.5 h-5 bg-gray-600"></div>
                  <div className="w-0.5 h-4 bg-gray-500"></div>
                  <div className="w-0.5 h-6 bg-gray-700"></div>
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                </div>
              </div>
              <h1 className="text-xl font-bold text-blue-900 tracking-wide">SECRET DESIGN</h1>
              <p className="text-xs text-gray-600 tracking-widest">ESLOGAN AQUÍ</p>
              <div className="flex justify-center mt-1">
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                  <div className="w-0.5 h-5 bg-gray-600"></div>
                  <div className="w-0.5 h-4 bg-gray-500"></div>
                  <div className="w-0.5 h-6 bg-gray-700"></div>
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Navegación - lado derecho - Solo visible en desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`font-medium transition-colors pb-1 ${
                pathname === '/' 
                  ? 'text-blue-900 border-b-2 border-blue-900' 
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`font-medium transition-colors pb-1 ${
                pathname === '/portfolio' 
                  ? 'text-blue-900 border-b-2 border-blue-900' 
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`font-medium transition-colors pb-1 ${
                pathname === '/contacto' 
                  ? 'text-blue-900 border-b-2 border-blue-900' 
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón menú hamburguesa - Solo visible en mobile */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Menú móvil - Solo visible cuando isMenuOpen es true */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100 mt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`font-medium py-2 px-2 rounded transition-colors ${
                  pathname === '/' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/portfolio" 
                className={`font-medium py-2 px-2 rounded transition-colors ${
                  pathname === '/portfolio' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portafolio
              </Link>
              <Link 
                href="/contacto" 
                className={`font-medium py-2 px-2 rounded transition-colors ${
                  pathname === '/contacto' 
                    ? 'text-blue-900 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}