import { useState } from "react";
import { MapPin, Plus, Edit2, Trash2 } from "lucide-react";

// Mock data — will be replaced with DB
const mockAddresses = [
  {
    id: 1,
    type: "Envío",
    name: "Usuario",
    street: "Calle Ejemplo 123, 2º A",
    city: "Madrid",
    province: "Madrid",
    zip: "28001",
    country: "España",
    phone: "+34 600 000 000",
  },
];

export function Addresses() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black">Direcciones</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nueva dirección
          </button>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Las siguientes direcciones se usarán de forma predeterminada en la
          página de pago.
        </p>

        {showForm && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200">
            <h3 className="font-bold mb-4 text-gray-900">Nueva dirección</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Nombre", type: "text", placeholder: "Tu nombre" },
                {
                  label: "Apellidos",
                  type: "text",
                  placeholder: "Tus apellidos",
                },
                {
                  label: "Dirección",
                  type: "text",
                  placeholder: "Calle y número",
                  className: "sm:col-span-2",
                },
                { label: "Ciudad", type: "text", placeholder: "Ciudad" },
                { label: "Código postal", type: "text", placeholder: "00000" },
                { label: "Provincia", type: "text", placeholder: "Provincia" },
                {
                  label: "Teléfono",
                  type: "tel",
                  placeholder: "+34 600 000 000",
                  className: "sm:col-span-2",
                },
              ].map(({ label, type, placeholder, className }) => (
                <div key={label} className={className ?? ""}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors">
                Guardar
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {mockAddresses.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <MapPin className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No tienes direcciones guardadas</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockAddresses.map((addr) => (
              <div
                key={addr.id}
                className="border border-gray-100 rounded-2xl p-6 relative group hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {addr.type}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="font-bold text-gray-900">{addr.name}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.street}</p>
                <p className="text-sm text-gray-500">
                  {addr.zip} {addr.city}, {addr.province}
                </p>
                <p className="text-sm text-gray-500">{addr.country}</p>
                <p className="text-sm text-gray-500 mt-2">{addr.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
