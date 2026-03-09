import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Download,
  MapPin,
  CreditCard,
  UserCog,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Escritorio", path: "/mi-cuenta", icon: LayoutDashboard, end: true },
  { label: "Pedidos", path: "/mi-cuenta/pedidos", icon: Package },
  { label: "Descargas", path: "/mi-cuenta/descargas", icon: Download },
  { label: "Direcciones", path: "/mi-cuenta/direcciones", icon: MapPin },
  {
    label: "Métodos de pago",
    path: "/mi-cuenta/metodos-pago",
    icon: CreditCard,
  },
  {
    label: "Detalles de la cuenta",
    path: "/mi-cuenta/detalles",
    icon: UserCog,
  },
];

export function AccountLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Future: connect to auth
    navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight mb-8">Mi cuenta</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* User avatar placeholder */}
              <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-300 flex items-center justify-center text-white font-black text-lg select-none">
                  U
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Usuario</p>
                  <p className="text-xs text-gray-400">usuario@email.com</p>
                </div>
              </div>

              <nav className="p-3">
                {navItems.map(({ label, path, icon: Icon, end }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={end}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${
                        isActive
                          ? "bg-gray-900 text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                  </NavLink>
                ))}

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all mt-1"
                >
                  <LogOut className="w-4 h-4 flex-shrink-0" />
                  Salir
                </button>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
