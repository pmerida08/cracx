import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ShoppingCart } from 'lucide-react';

export function Shop() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Sabores Premium</h1>
          <p className="text-xl text-gray-500">
            Descubre nuestra gama de caramelos de xilitol. Cuida tu sonrisa con el sabor que más te guste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full">
              <Link to={`/producto/${product.slug}`} className={`aspect-square ${product.bgColor} relative overflow-hidden block`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm">
                  {product.price}€
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black">{product.name}</h2>
                    <p className={`text-lg font-medium ${product.textColor}`}>{product.flavor}</p>
                  </div>
                </div>
                
                <p className="text-gray-500 mb-6 flex-grow">
                  {product.description}
                </p>
                
                <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
