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
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre - lado izquierdo */}
          <div className="flex items-center space-x-3">
            {/* Logo de imagen */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image 
                src="/images/icon.png" 
                alt="Secret Design Logo" 
                width={60}
                height={60}
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

          {/* Navegación desktop - lado derecho */}
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-base font-medium transition-all duration-200 px-3 py-2 rounded-lg border ${
                pathname === '/' 
                  ? 'text-blue-900 bg-blue-50 border-blue-200' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50 border-transparent'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-base font-medium transition-all duration-200 px-3 py-2 rounded-lg border ${
                pathname === '/portfolio' 
                  ? 'text-blue-900 bg-blue-50 border-blue-200' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50 border-transparent'
              }`}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`text-base font-medium transition-all duration-200 px-3 py-2 rounded-lg border ${
                pathname === '/contacto' 
                  ? 'text-blue-900 bg-blue-50 border-blue-200' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50 border-transparent'
              }`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}