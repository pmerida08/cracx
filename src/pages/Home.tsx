import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, Smile } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            EL FUTURO DEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              CUIDADO DENTAL
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-light">
            Caramelos de xilitol puro. Previene la caries, refresca el aliento y cuida tu sonrisa de forma natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/tienda" 
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Comprar Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/evidencia-cientifica" 
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Ver Evidencia
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">¿Por qué elegir CRACX?</h2>
            <p className="text-xl text-gray-500">La ciencia detrás de una sonrisa perfecta, en un formato delicioso.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-2xl mb-6 text-emerald-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Previene la Caries</h3>
              <p className="text-gray-500">El xilitol inhibe el crecimiento de las bacterias que causan la caries dental, protegiendo tu esmalte.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-2xl mb-6 text-blue-600">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Natural</h3>
              <p className="text-gray-500">Extraído de fuentes naturales, sin azúcares añadidos ni edulcorantes artificiales perjudiciales.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-2xl mb-6 text-purple-600">
                <Smile className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Aliento Fresco</h3>
              <p className="text-gray-500">Estimula la producción de saliva, combatiendo la sequedad bucal y manteniendo un aliento fresco duradero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-2">Nuestros Sabores</h2>
              <p className="text-xl text-gray-500">Encuentra tu CRACX favorito</p>
            </div>
            <Link to="/tienda" className="hidden md:flex items-center gap-2 text-black font-bold hover:underline">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Link to="/producto/menta" className="group block">
              <div className="bg-emerald-50 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden mb-6 transition-transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800" 
                  alt="CRACX Menta" 
                  className="w-48 h-48 object-cover rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black mb-1">CRACX Menta</h3>
                <p className="text-gray-500 mb-3">Frescor intenso</p>
                <span className="text-lg font-bold">9.99€</span>
              </div>
            </Link>

            {/* Product 2 */}
            <Link to="/producto/fresa" className="group block">
              <div className="bg-rose-50 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden mb-6 transition-transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800" 
                  alt="CRACX Fresa" 
                  className="w-48 h-48 object-cover rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black mb-1">CRACX Fresa</h3>
                <p className="text-gray-500 mb-3">Dulce y natural</p>
                <span className="text-lg font-bold">9.99€</span>
              </div>
            </Link>

            {/* Product 3 */}
            <Link to="/producto/limon" className="group block">
              <div className="bg-yellow-50 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden mb-6 transition-transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800" 
                  alt="CRACX Limón" 
                  className="w-48 h-48 object-cover rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black mb-1">CRACX Limón</h3>
                <p className="text-gray-500 mb-3">Toque cítrico</p>
                <span className="text-lg font-bold">9.99€</span>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/tienda" className="inline-flex items-center gap-2 text-black font-bold border-b-2 border-black pb-1">
              Ver todos los productos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-8">
            "Desde que incorporé CRACX a mi rutina diaria, mis visitas al dentista han sido mucho más tranquilas. Además, el sabor a menta es increíble."
          </blockquote>
          <cite className="text-xl text-gray-400 not-italic">
            — María S., Cliente Verificada
          </cite>
        </div>
      </section>
    </div>
  );
}
