'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Portfolio() {
  const [overlayCard, setOverlayCard] = useState(null)

  const handleCardClick = (project) => {
    setOverlayCard(project)
  }

  const closeOverlay = () => {
    setOverlayCard(null)
  }

  const projects = [
    {
      id: 1,
      title: "Residencia Moderna Los Altos",
      description: "Diseño integral de interiores para una residencia familiar de 300m² en Zapopan. Proyecto que combina funcionalidad y elegancia con materiales de primera calidad.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 2,
      title: "Oficinas Corporativas Plaza Central",
      description: "Remodelación completa de oficinas ejecutivas de 500m². Gestión integral del proyecto desde el diseño hasta la supervisión de obra.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 3,
      title: "Restaurante Gourmet Downtown", 
      description: "Diseño y coordinación de espacios comerciales para restaurante de alta cocina. Proyecto que incluye diseño de mobiliario personalizado.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 4,
      title: "Penthouse Luxury Providencia",
      description: "Renovación completa de penthouse de lujo con vista panorámica. Supervisión de obra y coordinación de múltiples especialidades.", 
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 5,
      title: "Clínica Dental Especializada",
      description: "Diseño de espacios médicos especializados con enfoque en funcionalidad y confort para pacientes. Incluye diseño 3D y renderizado.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 6,
      title: "Casa de Campo Tlajomulco",
      description: "Proyecto de casa de descanso familiar con diseño que integra espacios interiores y exteriores. Decoración y styling completo.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 7,
      title: "Boutique Hotel Centro Histórico",
      description: "Diseño de interiores para hotel boutique de 12 habitaciones. Proyecto que respeta la arquitectura colonial integrando elementos contemporáneos.",
      imageUrl: "/images/logo.jpg"
    },
    {
      id: 8,
      title: "Loft Industrial Americana",
      description: "Transformación de espacio industrial en loft residencial moderno. Gestión integral incluyendo permisos y supervisión técnica.",
      imageUrl: "/images/logo.jpg"
    }
  ]

  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        
        <div className="portfolio-header">
          <p className="portfolio-subtitle">
            Cada proyecto cuenta una historia única. Descubre cómo transformamos espacios ordinarios en ambientes extraordinarios.
          </p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="portfolio-card-image">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>

              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title line-clamp-2">
                  {project.title}
                </h3>
                <p className="portfolio-card-description line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {overlayCard && (
          <div className="portfolio-overlay" onClick={closeOverlay}>
            <div className="portfolio-overlay-content" onClick={(e) => e.stopPropagation()}>
              <button className="portfolio-overlay-close" onClick={closeOverlay}>
                ×
              </button>
              <div className="portfolio-overlay-image">
                <img
                  src={overlayCard.imageUrl}
                  alt={overlayCard.title}
                />
              </div>
              <div className="portfolio-overlay-details">
                <h3 className="portfolio-overlay-title">
                  {overlayCard.title}
                </h3>
                <p className="portfolio-overlay-description">
                  {overlayCard.description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="portfolio-contact">
          <h2 className="portfolio-contact-title">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="portfolio-contact-text">
            Estamos listos para hacer realidad tu visión. Contáctanos para una consulta personalizada.
          </p>
          <Link 
            href="/contacto"
            className="portfolio-contact-button"
          >
            Contáctanos 
          </Link>
        </div>
      </div>
    </div>
  )
}