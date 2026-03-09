import { Download, FileText } from "lucide-react";

// Mock data — will be replaced with DB
const mockDownloads: {
  id: string;
  name: string;
  orderId: string;
  expires: string;
  file: string;
}[] = [];

export function Downloads() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-black mb-6">Descargas</h2>

      {mockDownloads.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <Download className="w-14 h-14 mx-auto mb-4 opacity-30" />
          <p className="font-medium text-lg">No hay archivos disponibles</p>
          <p className="text-sm mt-1">
            Los recursos descargables de tus pedidos aparecerán aquí.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {mockDownloads.map((dl) => (
            <div
              key={dl.id}
              className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{dl.name}</p>
                  <p className="text-xs text-gray-400">
                    Pedido {dl.orderId} · Expira: {dl.expires}
                  </p>
                </div>
              </div>
              <a
                href={dl.file}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
