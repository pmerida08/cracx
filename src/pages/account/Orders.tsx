import { Package, ChevronRight, ExternalLink } from "lucide-react";

// Mock data — will be replaced with DB
const mockOrders = [
  {
    id: "#1001",
    date: "08 mar 2026",
    status: "Completado",
    statusColor: "bg-green-100 text-green-700",
    items: [
      { name: "CRACX Menta", qty: 2 },
      { name: "CRACX Cereza", qty: 1 },
    ],
    total: "29.97€",
  },
  {
    id: "#1002",
    date: "02 mar 2026",
    status: "En camino",
    statusColor: "bg-cyan-100 text-cyan-700",
    items: [{ name: "CRACX Sandía", qty: 1 }],
    total: "9.99€",
  },
];

export function Orders() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-black mb-6">Mis Pedidos</h2>

      {mockOrders.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <Package className="w-14 h-14 mx-auto mb-4 opacity-30" />
          <p className="font-medium text-lg">No tienes pedidos todavía</p>
          <p className="text-sm mt-1">
            Cuando realices una compra, aparecerá aquí.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <Package className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-400">{order.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                  <span className="font-black text-gray-900">
                    {order.total}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-sm text-gray-500">
                  {order.items.map((item, i) => (
                    <span key={i}>
                      {item.qty}× {item.name}
                      {i < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-1 text-sm text-cyan-600 font-semibold hover:underline">
                  Ver detalles <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
