import { FileText, CheckCircle, ShieldAlert } from 'lucide-react';

export function Evidence() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Evidencia Científica</h1>
          <p className="text-xl text-gray-500">
            Descubre por qué el xilitol es el aliado perfecto para tu salud dental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-start">
            <div className="bg-emerald-100 p-4 rounded-2xl mb-8 text-emerald-600">
              <ShieldAlert className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-6">¿Qué es el Xilitol?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              El xilitol es un alcohol de azúcar natural que se encuentra en muchas frutas y verduras. A diferencia del azúcar común, el xilitol no puede ser fermentado por las bacterias de la boca, lo que significa que no produce los ácidos que causan la caries.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span>Reduce la placa bacteriana</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span>Estimula la producción de saliva</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span>Ayuda a remineralizar el esmalte</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-start">
            <div className="bg-blue-100 p-4 rounded-2xl mb-8 text-blue-600">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-6">Estudios Clínicos</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Numerosos estudios clínicos han demostrado la eficacia del xilitol en la prevención de la caries dental. La Asociación Dental Americana (ADA) y otras organizaciones de salud reconocen sus beneficios.
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-xl mb-2">Estudio de Turku (1975)</h3>
                <p className="text-gray-500">Demostró una reducción significativa de la caries en personas que consumían xilitol en lugar de sacarosa.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-xl mb-2">Estudio de Belice (1990)</h3>
                <p className="text-gray-500">Confirmó que el consumo regular de chicles con xilitol reduce la incidencia de caries en niños.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
