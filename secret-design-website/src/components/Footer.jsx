export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">SD</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">SECRET DESIGN</h3>
                  <p className="text-sm text-gray-300">GERENCIA DE PROYECTOS</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transformamos espacios en experiencias extraordinarias, donde cada detalle cuenta una historia única a través del diseño de interiores y la gestión integral de proyectos.
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Diseño de Interiores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestión de Proyectos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoría Especializada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renderizado 3D</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supervisión de Obra</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm">Email:</p>
                <a href="mailto:contacto@secretdesign.com" className="hover:text-white transition-colors">
                  contacto@secretdesign.com
                </a>
              </div>
              <div>
                <p className="text-sm">Teléfono:</p>
                <a href="tel:+123456789" className="hover:text-white transition-colors">
                  +52 33 1234 5678
                </a>
              </div>
              <div>
                <p className="text-sm">Ubicación:</p>
                <p>Zapopan, Jalisco, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media y Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.718 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.35 1.052 2.35 2.349 0 1.298-1.053 2.35-2.35 2.35z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>© 2025 Secret Design. All rights reserved</p>
              <div className="flex space-x-4 mt-2 justify-center md:justify-end">
                <a href="#" className="hover:text-white transition-colors">Helleindoorn</a>
                <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Beleid</a>
                <a href="#" className="hover:text-white transition-colors">Website by Parramer</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl font-bold text-gray-800 opacity-50" style={{ fontFamily: 'Playfair Display, serif' }}>
            TA DESIGN
          </div>
        </div>
      </div>
    </footer>
  )
}