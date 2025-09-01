'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Mensaje de contacto */}
        <div className="footer-cta-section">
          <h2 className="footer-title">
            ¿Estás listo para dar vida a tu proyecto de sueños?
          </h2>
          <p className="footer-description">
            Contáctanos hoy para discutir los objetivos de tu proyecto, solicitar una cotización, o programar una consulta.
          </p>
          <Link 
            href="/contacto"
            className="footer-button"
          >
            Obtenga una Cotización Gratuita
          </Link>
        </div>

        {/* Logo y copyright */}
        <div className="footer-bottom">
          <div className="footer-logo-section">
            <div className="footer-logo-decoration">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="w-1 h-5 bg-gray-500"></div>
                <div className="w-1 h-7 bg-gray-700"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
            <h3 className="footer-logo-title">SECRET DESIGN</h3>
            <p className="footer-logo-subtitle">GERENCIA DE PROYECTOS</p>
            <div className="footer-logo-decoration mt-3">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="w-1 h-5 bg-gray-500"></div>
                <div className="w-1 h-7 bg-gray-700"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
              <p className="text-lg mb-2">© 2025 Secret Design. Todos los derechos reservados</p>
              <div className="footer-links">
                <a href="#" className="hover:text-blue-900 transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-blue-900 transition-colors">Términos y Condiciones</a>
                <a href="#" className="hover:text-blue-900 transition-colors">Aviso Legal</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}