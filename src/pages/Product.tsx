import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ArrowLeft, Check, ShoppingCart, Star, ShieldCheck } from 'lucide-react';

export function Product() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Producto no encontrado</h1>
          <Link to="/tienda" className="text-blue-600 hover:underline">Volver a la tienda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tienda" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver a la tienda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className={`${product.bgColor} rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden`}>
            <img 
              src={product.image} 
              alt={`${product.name} ${product.flavor}`} 
              className="w-full h-full object-cover rounded-full shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">(128 reseñas)</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2">{product.name}</h1>
              <p className={`text-2xl font-bold ${product.textColor} mb-6`}>{product.flavor}</p>
              <p className="text-3xl font-black">{product.price}€</p>
            </div>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Beneficios principales</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className={`${product.bgColor} p-1 rounded-full ${product.textColor}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex items-center border-2 border-gray-200 rounded-2xl p-2 w-full sm:w-32">
                <button className="w-10 h-10 flex items-center justify-center text-xl font-medium hover:bg-gray-100 rounded-xl transition-colors">-</button>
                <span className="flex-1 text-center font-bold text-lg">1</span>
                <button className="w-10 h-10 flex items-center justify-center text-xl font-medium hover:bg-gray-100 rounded-xl transition-colors">+</button>
              </div>
              <button className="flex-1 bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 shadow-xl shadow-black/10">
                <ShoppingCart className="w-5 h-5" />
                Añadir al carrito
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Pago seguro y envío gratuito en pedidos superiores a 30€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
