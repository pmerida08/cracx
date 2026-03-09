import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Laura García',
      role: 'Madre de dos niños',
      content: 'Mis hijos adoran el sabor a fresa y yo estoy tranquila sabiendo que están cuidando sus dientes en lugar de comer azúcar. ¡Un descubrimiento fantástico!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 2,
      name: 'Dr. Roberto Sánchez',
      role: 'Odontólogo',
      content: 'Recomiendo CRACX a todos mis pacientes. Es una forma excelente y deliciosa de mantener la higiene bucal entre cepillados y estimular la salivación.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 3,
      name: 'Elena Martínez',
      role: 'Profesora',
      content: 'El sabor a menta es increíblemente refrescante y duradero. Me ayuda a mantener el aliento fresco durante todo el día en clase.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 4,
      name: 'Javier Ruiz',
      role: 'Deportista',
      content: 'Llevo siempre una caja de CRACX limón en mi bolsa de deporte. Me ayuda con la sequedad bucal después de entrenar y el sabor es muy natural.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Historias de Clientes</h1>
          <p className="text-xl text-gray-500">
            Descubre lo que dicen nuestros clientes sobre su experiencia con CRACX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100" />
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
