'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: "🔹",
      title: "Gerencia de Proyectos",
      description: "Coordinamos todas las etapas de tu desarrollo arquitectónico o inmobiliario, desde la planeación hasta la entrega final, garantizando control de calidad, tiempos y costos."
    },
    {
      icon: "🏢",
      title: "Asesoría para Proyectos Inmobiliarios",
      description: "Te acompañamos en la evaluación y definición estratégica de tu inversión, maximizando el potencial de tu terreno o inmueble."
    },
    {
      icon: "📐",
      title: "Elaboración de Planos Arquitectónicos",
      description: "Desarrollamos proyectos ejecutivos completos (arquitectura, estructura, instalaciones) listos para construir con certeza técnica."
    }
  ]

  return (
    <div className="hero-gradient hero-pattern min-h-screen relative overflow-hidden">
      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* Hero Principal */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Estudio de Arquitectura Profesional
            </span>
          </div>
          
          <h1 className="hero-title text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Gerencia de Proyectos<br/>
            <span className="text-gray-700">con Visión y Excelencia</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Integramos arquitectura e ingenierías bajo una misma dirección, 
            garantizando soluciones claras, eficientes y de alto valor estético y técnico.
          </p>

          {/* Estadísticas */}
          <div className="hero-stats max-w-2xl mx-auto mb-16">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Proyectos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contacto"
              className="bg-blue-900 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicitar Cotización Gratuita
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Ver Nuestros Proyectos
            </Link>
          </div>
        </div>

        {/* Quiénes Somos */}
        <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="section-divider">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Quiénes Somos
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                En <strong className="text-blue-900">Secret Design</strong> creemos que cada proyecto inmobiliario debe gestionarse con <strong>visión, precisión y excelencia</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Somos un despacho especializado en <strong className="text-blue-900">gerencia de proyectos, asesoría inmobiliaria y elaboración de proyectos ejecutivos</strong>, que integra arquitectura e ingenierías bajo una misma dirección.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro compromiso es ofrecer <strong>soluciones claras, eficientes y de alto valor estético y técnico</strong>, asegurando que cada etapa del proyecto avance con orden, calidad y dentro de los tiempos establecidos.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestros Servicios */}
        <div className={`mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="section-divider">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Nuestros Servicios
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un enfoque integral para llevar tu proyecto desde la concepción hasta la realidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card transition-all duration-500 delay-${(index + 1) * 100}`}
              >
                <div className="service-icon text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <div className="decorative-line w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nuestra Filosofía */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="philosophy-card max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Nuestra Filosofía
              </h2>
              <div className="decorative-line w-32 mx-auto mb-8"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              Más que planos y gestión, entregamos <strong className="text-blue-900">confianza, transparencia y resultados medibles</strong>.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos importa construir relaciones sólidas con nuestros clientes, basadas en claridad y excelencia profesional.
            </p>

            {/* Call to Action Final */}
            <div className="mt-12 pt-8 border-t border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contacto"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contactar Ahora
                </Link>
                <a 
                  href="tel:+523314683729"
                  className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-300"
                >
                  Llamar: +52 33 1468 3729
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}