'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-flex">
          
          {/* Logo y nombre - lado izquierdo */}
          <div className="logo-section">
            {/* Logo de imagen */}
            <div className="logo-image-container">
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
            <div className="logo-text-container">
              {/* Decoración superior */}
              <div className="flex justify-start mb-1">
                <div className="logo-decoration">
                  <div className="logo-bar h-3"></div>
                  <div className="logo-bar h-5 bg-gray-700"></div>
                  <div className="logo-bar h-4 bg-gray-600"></div>
                  <div className="logo-bar h-6 bg-gray-800"></div>
                  <div className="logo-bar h-3"></div>
                </div>
              </div>
              
              {/* Nombre principal */}
              <h1 className="logo-title">
                SECRET DESIGN
              </h1>
              
              {/* Eslogan */}
              <p className="logo-subtitle">
                GERENCIA DE PROYECTOS
              </p>
              
              {/* Decoración inferior */}
              <div className="flex justify-start mt-1">
                <div className="logo-decoration">
                  <div className="logo-bar h-3"></div>
                  <div className="logo-bar h-5 bg-gray-700"></div>
                  <div className="logo-bar h-4 bg-gray-600"></div>
                  <div className="logo-bar h-6 bg-gray-800"></div>
                  <div className="logo-bar h-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación desktop - lado derecho */}
          <nav className="nav-container">
            <Link 
              href="/" 
              className={`nav-link ${
                pathname === '/' 
                  ? 'nav-link-active' 
                  : 'nav-link-inactive'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/portfolio" 
              className={`nav-link ${
                pathname === '/portfolio' 
                  ? 'nav-link-active' 
                  : 'nav-link-inactive'
              }`}
            >
              Portafolio
            </Link>
            <Link 
              href="/contacto" 
              className={`nav-link ${
                pathname === '/contacto' 
                  ? 'nav-link-active' 
                  : 'nav-link-inactive'
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