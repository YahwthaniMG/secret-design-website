export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10">
        <div className="w-20 h-20 rounded-full border border-gray-300 opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20">
        <div className="w-12 h-12 rounded-full bg-gray-300 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header integrado estilo T.A. */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl font-light tracking-[0.3em]" style={{ color: '#2A2A2A' }}>
                T.A.
              </span>
            </div>
          </div>

          {/* Contenido principal con layout horizontal */}
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
            {/* Imagen izquierda */}
            <div className="hidden lg:block">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/api/placeholder/400/320" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contenido central */}
            <div className="lg:col-span-1">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                DIENSTEN DE PLAANHEID
              </p>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-8" style={{ color: '#2A2A2A', fontFamily: 'Playfair Display, serif' }}>
                KLEURADVIES, INTERIEURADVIES,<br/>
                STYLING EN <span className="inline-block w-16 h-16 bg-gray-300 rounded mx-2"></span> 3D-ONTWERP <br/>
                <span style={{ color: '#8B7355' }}>VOOR KANTOOR EN HUIS</span>
              </h1>

              {/* Lista de servicios */}
              <div className="text-left text-sm text-gray-600 space-y-1 mb-8">
                <p>1. (ONLINE) INTAKEGESPREK</p>
                <p>2. MOODBOARD</p>
                <p>3. KLEUR- EN MATERIALENPLAN</p>
                <p>4. INTERIEURADVIES, SHOPLINKS</p>
                <p>5. VERLICHTINGSPLAN</p>
                <p>6. COMPLEET 3D ONTWERP</p>
                <p>7. 3D VIDEO</p>
                <p>8. STYLENBOEK</p>
                <p>9. PRESENTATIEBEELDJE</p>
                <p>10. EINDPRESENTATIE</p>
              </div>
            </div>

            {/* Imagen derecha */}
            <div className="hidden lg:block">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-4">
                <img 
                  src="/api/placeholder/400/320" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/api/placeholder/400/240" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}