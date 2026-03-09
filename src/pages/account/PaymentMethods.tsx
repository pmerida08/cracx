import { CreditCard, Plus, Trash2, ShieldCheck } from "lucide-react";

// Mock data — will be replaced with DB
const mockCards: {
  id: number;
  brand: string;
  last4: string;
  expires: string;
  isDefault: boolean;
}[] = [];

export function PaymentMethods() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black">Métodos de pago</h2>
        <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors">
          <Plus className="w-4 h-4" />
          Añadir tarjeta
        </button>
      </div>

      {mockCards.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <CreditCard className="w-14 h-14 mx-auto mb-4 opacity-30" />
          <p className="font-medium text-lg">No tienes tarjetas guardadas</p>
          <p className="text-sm mt-1">
            Añade un método de pago para agilizar tus compras.
          </p>
          <button className="mt-5 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-700 transition-colors">
            <Plus className="w-4 h-4" />
            Añadir tarjeta
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {mockCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <CreditCard className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {card.brand} •••• {card.last4}
                    {card.isDefault && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                        Principal
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-400">Expira {card.expires}</p>
                </div>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-2 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
        <ShieldCheck className="w-4 h-4 flex-shrink-0" />
        Tus datos de pago están protegidos con cifrado SSL de 256 bits.
      </div>
    </div>
  );
}
