import { MapPin, Search } from 'lucide-react';

export function StoreLocator() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Dónde Estamos</h1>
          <p className="text-xl text-gray-500">
            Encuentra tu tienda CRACX más cercana y descubre nuestros productos en persona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 bg-gray-50 p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Buscar Tiendas</h2>
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Ciudad, código postal..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="space-y-6 overflow-y-auto flex-grow pr-2">
              {[1, 2, 3].map((store) => (
                <div key={store} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-black transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-black text-white p-3 rounded-xl group-hover:bg-gray-800 transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">CRACX Store Madrid</h3>
                      <p className="text-gray-500 text-sm mb-2">Calle Gran Vía, 45, 28013 Madrid</p>
                      <p className="text-sm font-medium text-emerald-600">Abierto ahora</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-100 rounded-[2rem] overflow-hidden min-h-[500px] relative">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <MapPin className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-xl font-medium">Mapa Interactivo</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" 
              alt="Mapa" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
