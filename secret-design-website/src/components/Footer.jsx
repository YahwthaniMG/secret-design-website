import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Secret Design Logo" 
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-wide">SECRET DESIGN</h3>
                  <p className="text-sm text-gray-300 tracking-wider">GERENCIA DE PROYECTOS</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-lg text-lg">
                Transformamos espacios en experiencias extraordinarias, donde cada detalle cuenta una historia única a través del diseño de interiores y la gestión integral de proyectos arquitectónicos.
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-6 text-xl">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#servicios" className="hover:text-white transition-colors text-lg">Diseño de Interiores</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors text-lg">Gestión de Proyectos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors text-lg">Consultoría Especializada</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors text-lg">Renderizado 3D</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors text-lg">Supervisión de Obra</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-6 text-xl">Contacto</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email:</p>
                <a href="mailto:contacto@secretdesign.com" className="hover:text-white transition-colors text-lg">
                  yuvia@secretdesign.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Teléfono:</p>
                <a href="tel:+523314683729" className="hover:text-white transition-colors text-lg">
                  +52 33 1468 3729
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">WhatsApp:</p>
                <a href="https://wa.me/523314683729" className="hover:text-white transition-colors text-lg">
                  +52 33 1468 3729
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Ubicación:</p>
                <p className="text-lg">Zapopan, Jalisco, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media y Copyright */}
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.718 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.35 1.052 2.35 2.349 0 1.298-1.053 2.35-2.35 2.35z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right text-gray-400">
              <p className="text-lg mb-2">© 2025 Secret Design. Todos los derechos reservados</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl md:text-6xl font-light text-gray-700 opacity-40" style={{ fontFamily: 'Playfair Display, serif' }}>
            SECRET DESIGN
          </div>
        </div>
      </div>
    </footer>
  )
}