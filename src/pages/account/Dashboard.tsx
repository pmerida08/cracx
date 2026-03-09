import { Link } from "react-router-dom";
import { Package, MapPin, UserCog, ArrowRight } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <p className="text-gray-600 mb-1 text-sm">Bienvenido/a de nuevo,</p>
        <h2 className="text-2xl font-black mb-4">
          Hola,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            Usuario
          </span>{" "}
          <span className="text-gray-400 text-lg font-normal">
            (¿no eres tú?{" "}
            <button className="text-red-500 hover:underline font-medium">
              Cerrar sesión
            </button>
            )
          </span>
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Desde el escritorio de tu cuenta puedes ver tus{" "}
          <Link
            to="/mi-cuenta/pedidos"
            className="text-cyan-600 hover:underline font-semibold"
          >
            pedidos recientes
          </Link>
          , gestionar tus{" "}
          <Link
            to="/mi-cuenta/direcciones"
            className="text-cyan-600 hover:underline font-semibold"
          >
            direcciones de envío y facturación
          </Link>{" "}
          y{" "}
          <Link
            to="/mi-cuenta/detalles"
            className="text-cyan-600 hover:underline font-semibold"
          >
            editar tu contraseña y los detalles de tu cuenta
          </Link>
          .
        </p>
      </div>

      {/* Quick access cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/mi-cuenta/pedidos"
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600 group-hover:bg-cyan-100 transition-colors">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-0.5">Mis Pedidos</h3>
            <p className="text-sm text-gray-500">
              Consulta el estado de tus pedidos
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors mt-auto" />
        </Link>

        <Link
          to="/mi-cuenta/direcciones"
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className="bg-pink-50 p-3 rounded-xl text-pink-600 group-hover:bg-pink-100 transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-0.5">Direcciones</h3>
            <p className="text-sm text-gray-500">
              Gestiona tus direcciones guardadas
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors mt-auto" />
        </Link>

        <Link
          to="/mi-cuenta/detalles"
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600 group-hover:bg-yellow-100 transition-colors">
            <UserCog className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-0.5">Mi Cuenta</h3>
            <p className="text-sm text-gray-500">
              Edita tu perfil y contraseña
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors mt-auto" />
        </Link>
      </div>

      {/* Recent orders summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-black">Pedidos recientes</h3>
          <Link
            to="/mi-cuenta/pedidos"
            className="text-sm text-cyan-600 hover:underline font-semibold"
          >
            Ver todos →
          </Link>
        </div>
        <div className="text-center py-10 text-gray-400">
          <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No tienes pedidos todavía</p>
          <p className="text-sm mt-1">
            ¡Empieza a cuidar tu sonrisa con CRACX!
          </p>
          <Link
            to="/tienda"
            className="mt-4 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-700 transition-colors"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
