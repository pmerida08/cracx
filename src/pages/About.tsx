import { Users, Heart, ShieldCheck, Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Equipo CRACX" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Nacimos con una misión clara: revolucionar el cuidado dental ofreciendo una alternativa natural, deliciosa y científicamente probada.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-6">Más que un caramelo, un compromiso con tu salud</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En CRACX, creemos que cuidar tu sonrisa no debería ser una tarea aburrida. Por eso, hemos desarrollado caramelos de xilitol puro que no solo previenen la caries, sino que también ofrecen una experiencia de sabor inigualable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo de expertos en salud dental y nutrición trabaja incansablemente para asegurar que cada producto CRACX cumpla con los más altos estándares de calidad y eficacia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-8 rounded-[2rem] text-center flex flex-col items-center justify-center aspect-square">
                <Heart className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Pasión</h3>
                <p className="text-sm text-gray-500">Por la salud bucodental</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-[2rem] text-center flex flex-col items-center justify-center aspect-square mt-12">
                <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Calidad</h3>
                <p className="text-sm text-gray-500">Ingredientes premium</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-[2rem] text-center flex flex-col items-center justify-center aspect-square -mt-12">
                <Leaf className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Natural</h3>
                <p className="text-sm text-gray-500">100% xilitol puro</p>
              </div>
              <div className="bg-rose-50 p-8 rounded-[2rem] text-center flex flex-col items-center justify-center aspect-square">
                <Users className="w-12 h-12 text-rose-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Comunidad</h3>
                <p className="text-sm text-gray-500">Cuidamos de ti</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
