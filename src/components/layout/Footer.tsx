import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src="/img/logo.webp"
              alt="CRACX Logo"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mt-1">
              Sweet for Health Spirit
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolucionando el cuidado dental con el poder natural del xilitol.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sabores</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/tienda"
                  className="hover:text-white transition-colors"
                >
                  Todos los sabores
                </Link>
              </li>
              <li>
                <Link
                  to="/producto/menta"
                  className="hover:text-white transition-colors"
                >
                  CRACX Menta
                </Link>
              </li>
              <li>
                <Link
                  to="/producto/cereza"
                  className="hover:text-white transition-colors"
                >
                  CRACX Cereza
                </Link>
              </li>
              <li>
                <Link
                  to="/producto/sandia"
                  className="hover:text-white transition-colors"
                >
                  CRACX Sandía
                </Link>
              </li>
              <li>
                <Link
                  to="/producto/limon"
                  className="hover:text-white transition-colors"
                >
                  CRACX Limón
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/quienes-somos"
                  className="hover:text-white transition-colors"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  to="/evidencia-cientifica"
                  className="hover:text-white transition-colors"
                >
                  Evidencia científica
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonios"
                  className="hover:text-white transition-colors"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/donde-estamos"
                  className="hover:text-white transition-colors"
                >
                  Dónde estamos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Envíos y devoluciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CRACX. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
