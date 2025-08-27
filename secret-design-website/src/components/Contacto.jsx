export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para dar vida a tu proyecto de sueños? Estamos aquí para ayudarte en cada paso del camino.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input 
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                  <input 
                    type="tel"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="+52 33 1234 5678"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Tipo de proyecto</label>
                <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Selecciona una opción</option>
                  <option>Diseño de Interiores</option>
                  <option>Gestión de Proyecto</option>
                  <option>Consultoría</option>
                  <option>Renovación Completa</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Cuéntanos sobre tu proyecto</label>
                <textarea 
                  rows={5}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Describe tu visión, presupuesto aproximado, fechas importantes, etc."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-900 text-white py-4 px-8 rounded-lg font-medium hover:bg-blue-800 transition-colors text-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Zapopan, Jalisco, México<br/>
                  (Dirección específica disponible por cita)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">
                  <a href="tel:+523312345678" className="hover:text-blue-900">
                    +52 33 1234 5678
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:contacto@secretdesign.com" className="hover:text-blue-900">
                    contacto@secretdesign.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">
                  <a href="https://wa.me/523312345678" className="hover:text-blue-900">
                    +52 33 1234 5678
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-