'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Menu, X } from 'lucide-react'

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Home size={20} />
              <span>Inicio</span>
            </Link>
            
            {/*<Link
              href="/portfolio"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 ${pathname === '/portfolio'
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              <Briefcase size={20} />
              <span>Portafolio</span>
            </Link>
            */}
            {/*<Link 
              href="/contacto" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 ${
                pathname === '/contacto' 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <User size={20} />
              <span>Contacto</span>
            </Link>*/}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-4 space-y-2">
            <Link 
              href="/" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={closeMenu}
            >
              <Home size={20} />
              <span>Inicio</span>
            </Link>
            
            {/*<Link 
              href="/portfolio" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === '/portfolio' 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={closeMenu}
            >
              <Briefcase size={20} />
              <span>Portafolio</span>
            </Link>
            
            <Link 
              href="/contacto" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === '/contacto' 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={closeMenu}
            >
              <User size={20} />
              <span>Contacto</span>
            </Link>*/}
          </nav>
        </div>
      )}
    </header>
  )
}