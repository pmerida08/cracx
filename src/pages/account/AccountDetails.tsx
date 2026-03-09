import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Save } from "lucide-react";

export function AccountDetails() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Personal info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyan-50 p-2.5 rounded-xl text-cyan-600">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-black">Información personal</h2>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Nombre
              </label>
              <input
                type="text"
                defaultValue="Usuario"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Apellidos
              </label>
              <input
                type="text"
                defaultValue=""
                placeholder="Tus apellidos"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Nombre para mostrar
            </label>
            <input
              type="text"
              defaultValue="Usuario"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
            <p className="text-xs text-gray-400 mt-1.5">
              Así aparecerás en la tienda y en tus reseñas.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              Correo electrónico
            </label>
            <input
              type="email"
              defaultValue="usuario@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          {/* Password change */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-yellow-50 p-2.5 rounded-xl text-yellow-600">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black">Cambiar contraseña</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Contraseña actual
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Escribe tu contraseña actual"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Nueva contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repite la nueva contraseña"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Guardar cambios
            </button>
            {saved && (
              <span className="text-sm text-green-600 font-semibold animate-pulse">
                ✓ Cambios guardados
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8">
        <h3 className="text-lg font-black text-red-600 mb-2">Zona peligrosa</h3>
        <p className="text-sm text-gray-500 mb-4">
          Si eliminas tu cuenta, se borrarán permanentemente todos tus datos.
          Esta acción no se puede deshacer.
        </p>
        <button className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors font-semibold">
          Eliminar mi cuenta
        </button>
      </div>
    </div>
  );
}
