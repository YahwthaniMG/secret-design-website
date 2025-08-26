export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">SD</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2" style={{ color: '#2A2A2A' }}>
              SECRET DESIGN
            </h1>
            <p className="text-xl" style={{ color: '#2A2A2A' }}>
              GERENCIA DE PROYECTOS
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl mb-8" style={{ color: '#2A2A2A' }}>
              Arquitectura y diseño de interiores con visión única
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Diseño de Interiores</h3>
                <p>Espacios únicos que reflejan tu personalidad y estilo de vida.</p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Gestión de Proyectos</h3>
                <p>Coordinamos cada detalle desde el concepto hasta la ejecución.</p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Consultoría</h3>
                <p>Asesoramiento profesional para maximizar el potencial de tus espacios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}