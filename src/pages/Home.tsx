import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Leaf, Smile } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-950 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/51.webp"
            alt="CRACX productos"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-950/60 to-gray-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center w-full">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">
            Sweet for Health Spirit
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            EL CUIDADO DENTAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              QUE SABE BIEN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-light">
            Caramelos de xilitol puro. Sin azúcares, sin lactosa, sin gluten.
            Previene la caries, refresca el aliento y cuida tu sonrisa de forma
            natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tienda"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
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

      {/* Flavors Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Disponibles ahora
              </p>
              <h2 className="text-4xl font-black tracking-tight">
                Nuestros Sabores
              </h2>
            </div>
            <Link
              to="/tienda"
              className="hidden md:flex items-center gap-2 text-gray-900 font-bold hover:underline"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Menta */}
            <Link to="/producto/menta" className="group block">
              <div className="bg-cyan-50 rounded-3xl p-6 aspect-square flex items-center justify-center relative overflow-hidden mb-4 transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src="/img/31.webp"
                  alt="CRACX Menta"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black mb-0.5">CRACX Menta</h3>
                <p className="text-cyan-600 font-medium text-sm mb-1">
                  Frescor intenso
                </p>
                <span className="text-base font-bold">9.99€</span>
              </div>
            </Link>

            {/* Cereza */}
            <Link to="/producto/cereza" className="group block">
              <div className="bg-red-50 rounded-3xl p-6 aspect-square flex items-center justify-center relative overflow-hidden mb-4 transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src="/img/11.webp"
                  alt="CRACX Cereza"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black mb-0.5">CRACX Cereza</h3>
                <p className="text-red-600 font-medium text-sm mb-1">
                  Dulce y natural
                </p>
                <span className="text-base font-bold">9.99€</span>
              </div>
            </Link>

            {/* Sandía */}
            <Link to="/producto/sandia" className="group block">
              <div className="bg-pink-50 rounded-3xl p-6 aspect-square flex items-center justify-center relative overflow-hidden mb-4 transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src="/img/41.webp"
                  alt="CRACX Sandía"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black mb-0.5">CRACX Sandía</h3>
                <p className="text-pink-600 font-medium text-sm mb-1">
                  Verano en boca
                </p>
                <span className="text-base font-bold">9.99€</span>
              </div>
            </Link>

            {/* Limón */}
            <Link to="/producto/limon" className="group block">
              <div className="bg-yellow-50 rounded-3xl p-6 aspect-square flex items-center justify-center relative overflow-hidden mb-4 transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src="/img/21.webp"
                  alt="CRACX Limón"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black mb-0.5">CRACX Limón</h3>
                <p className="text-yellow-600 font-medium text-sm mb-1">
                  Toque cítrico
                </p>
                <span className="text-base font-bold">9.99€</span>
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/tienda"
              className="inline-flex items-center gap-2 text-gray-900 font-bold border-b-2 border-gray-900 pb-1"
            >
              Ver todos los sabores <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pack shot lifestyle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                ¿Por qué CRACX?
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                La ciencia detrás de
                <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  una sonrisa perfecta
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                El xilitol es un edulcorante natural que inhibe el crecimiento
                de las bacterias que causan las caries. CRACX combina el placer
                de un caramelo con los beneficios de una higiene dental activa.
              </p>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Previene la Caries
                    </h3>
                    <p className="text-gray-500 text-sm">
                      El xilitol inhibe el crecimiento de las bacterias que
                      causan la caries dental, protegiendo tu esmalte.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-2xl text-pink-600 flex-shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">100% Natural</h3>
                    <p className="text-gray-500 text-sm">
                      Sin azúcares añadidos, sin lactosa, sin gluten. Extraído
                      de fuentes naturales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-2xl text-yellow-600 flex-shrink-0">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Aliento Fresco</h3>
                    <p className="text-gray-500 text-sm">
                      Estimula la producción de saliva, combatiendo la sequedad
                      bucal y manteniendo un aliento fresco duradero.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/evidencia-cientifica"
                className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-bold hover:bg-gray-700 transition-colors"
              >
                Ver evidencia científica <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/img/52.webp"
                alt="Todos los sabores CRACX"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pack box */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/img/53.webp"
                alt="Pack CRACX edición especial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Pack completo
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Los 4 sabores en un solo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-red-500 to-yellow-400">
                  pack
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ¿No sabes cuál elegir? Prueba nuestra caja con los 4 sabores:
                Menta, Cereza, Sandía y Limón. El regalo perfecto para cuidar la
                salud dental de quien más quieres.
              </p>
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-bold hover:bg-gray-700 transition-colors"
              >
                Ver pack completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-8 h-8 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-8">
            "Desde que incorporé CRACX a mi rutina diaria, mis visitas al
            dentista han sido mucho más tranquilas. Además, el sabor a menta es
            increíble."
          </blockquote>
          <cite className="text-xl text-gray-400 not-italic">
            — María S., Cliente Verificada
          </cite>
        </div>
      </section>
    </div>
  );
}
