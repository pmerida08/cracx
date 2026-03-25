import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "Los beneficios del xilitol para tu salud dental",
      excerpt:
        "Descubre cómo este edulcorante natural puede ayudarte a prevenir la caries y mantener una sonrisa radiante.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      date: "15 Oct 2023",
      author: "Dra. Ana López",
      category: "Salud Dental",
    },
    {
      id: 2,
      title: "Mitos y verdades sobre los edulcorantes artificiales",
      excerpt:
        "Analizamos los diferentes tipos de edulcorantes y por qué el xilitol es la mejor opción para tus dientes.",
      image:
        "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800",
      date: "02 Nov 2023",
      author: "Carlos Martínez",
      category: "Nutrición",
    },
    {
      id: 3,
      title: "Cómo incorporar CRACX en tu rutina diaria",
      excerpt:
        "Consejos prácticos para aprovechar al máximo los beneficios de nuestros cristales que llevan xilitol.",
      image:
        "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800",
      date: "20 Nov 2023",
      author: "Equipo CRACX",
      category: "Estilo de Vida",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">
            CRACX Health Magazine
          </h1>
          <p className="text-xl text-gray-500">
            Artículos, consejos y noticias sobre salud dental, nutrición y
            bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full"
            >
              <Link
                to={`/blog/${post.id}`}
                className="aspect-video relative overflow-hidden block"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </Link>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-black font-bold hover:underline inline-flex items-center gap-2 mt-auto"
                >
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
