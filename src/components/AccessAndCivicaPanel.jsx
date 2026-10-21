import React from 'react';
import { 
  CreditCard, 
  DoorClosed, 
  DoorOpen, 
  Clock, 
  MapPin, 
  QrCode, 
  Users, 
  Banknote, 
  ShieldCheck, 
  Smartphone,
  Sparkles,
  Layers
} from 'lucide-react';
import { playComicPop } from '../utils/audioFX';

export function AccessAndCivicaPanel({ station, onSelectItem }) {
  const { accesses } = station;

  // Calculate totals for station
  const totalStandardEntry = accesses.reduce((acc, curr) => acc + curr.standardTurnstilesEntry, 0);
  const totalStandardExit = accesses.reduce((acc, curr) => acc + curr.standardTurnstilesExit, 0);
  const totalPmrEntry = accesses.reduce((acc, curr) => acc + curr.pmrTurnstilesEntry, 0);
  const totalPmrExit = accesses.reduce((acc, curr) => acc + curr.pmrTurnstilesExit, 0);
  const grandTotalTurnstiles = totalStandardEntry + totalStandardExit + totalPmrEntry + totalPmrExit;
  const totalMRA = accesses.reduce((acc, curr) => acc + curr.mraMachines.count, 0);
  const totalBooths = accesses.reduce((acc, curr) => acc + curr.civicaTicketBooth.count, 0);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-[#FFD100] text-black font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
                ACCESOS & TORNIQUETES
              </span>
              <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                ESTACIÓN {station.name.toUpperCase()}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bangers text-[#111111] leading-none">
              EQUIPAMIENTO DE ACCESOS Y RECARGA CÍVICA
            </h2>
            <p className="text-xs sm:text-sm font-comic text-gray-700 max-w-2xl">
              Información detallada para usuarios y personal operativo sobre los puntos de validación Cívica, torniquetes convencionales, pasos PMR y máquinas de autoservicio de cada acceso.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
            <div className="bg-white border-3 border-black comic-shadow-sm p-3 rounded-xl text-center">
              <span className="text-[10px] font-bangers text-gray-500 block uppercase">TOTAL TORNIQUETES</span>
              <span className="text-2xl font-bangers text-[#008752]">{grandTotalTurnstiles}</span>
              <span className="text-[10px] font-comic text-gray-600 block">{totalPmrEntry + totalPmrExit} Pasos PMR</span>
            </div>
            <div className="bg-white border-3 border-black comic-shadow-sm p-3 rounded-xl text-center">
              <span className="text-[10px] font-bangers text-gray-500 block uppercase">MÁQUINAS MRA</span>
              <span className="text-2xl font-bangers text-[#0070BA]">{totalMRA}</span>
              <span className="text-[10px] font-comic text-gray-600 block">Efectivo & QR</span>
            </div>
            <div className="bg-white border-3 border-black comic-shadow-sm p-3 rounded-xl text-center col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bangers text-gray-500 block uppercase">TAQUILLAS CÍVICA</span>
              <span className="text-2xl font-bangers text-[#E52521]">{totalBooths}</span>
              <span className="text-[10px] font-comic text-gray-600 block">Atención Humana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Access Cards List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {accesses.map((acc, idx) => (
          <div
            key={acc.id}
            onClick={() => {
              playComicPop();
              onSelectItem({
                name: acc.name,
                code: `ACCESO-${idx + 1}`,
                level: 'Acceso Exterior / Mezanina',
                description: `Punto de acceso urbano en ${acc.streetReference}. Cuenta con ${acc.totalTurnstiles} torniquetes totales (${acc.pmrTurnstilesEntry + acc.pmrTurnstilesExit} PMR), ${acc.mraMachines.count} máquinas de recarga automática Cívica y ${acc.civicaTicketBooth.count} taquillas.`,
                specs: `Puerta de emergencia: ${acc.emergencyGateWithPanicBar}. Horario de operación: ${acc.operationalHours}.`,
                verified: true
              });
            }}
            className="bg-[#FFFDF0] border-4 border-black comic-shadow rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div>
              {/* Header of Access */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-[#111111] text-[#FFD100] border-2 border-black flex items-center justify-center font-bangers text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                      ACCESO DE ESTACIÓN
                    </span>
                  </div>
                  <h3 className="text-2xl font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight">
                    {acc.name}
                  </h3>
                </div>

                <span className="bg-[#FFD100] text-black font-bangers text-xs px-2.5 py-1 border-2 border-black rounded shrink-0">
                  {acc.totalTurnstiles} TORNIQUETES
                </span>
              </div>

              {/* Reference & Hours */}
              <div className="bg-white border-2 border-black p-2.5 rounded-xl text-xs font-comic space-y-1.5 mb-4">
                <div className="flex items-start gap-1.5 text-gray-800">
                  <MapPin className="w-4 h-4 text-[#E52521] shrink-0 mt-0.5" />
                  <span className="font-bold">{acc.streetReference}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  <span>Horario de servicio: {acc.operationalHours}</span>
                </div>
              </div>

              {/* Visual Breakdown: Torniquetes */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs font-bangers text-gray-700">
                  <span className="flex items-center gap-1.5">
                    <DoorClosed className="w-4 h-4 text-[#008752]" />
                    <span>DESGLOSE DE LÍNEA DE TORNIQUETES:</span>
                  </span>
                  <span className="text-emerald-700 font-mono text-[11px]">
                    Bidireccionales & Controlados
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-comic">
                  <div className="bg-[#eef8f2] border-2 border-black p-2 rounded-lg">
                    <span className="font-bold text-gray-600 block text-[10px]">ENTRADA ESTÁNDAR</span>
                    <span className="text-lg font-bangers text-[#008752]">{acc.standardTurnstilesEntry}</span>
                    <span className="text-[10px] text-gray-500 block">Torniquetes</span>
                  </div>

                  <div className="bg-[#eef8f2] border-2 border-black p-2 rounded-lg">
                    <span className="font-bold text-gray-600 block text-[10px]">SALIDA ESTÁNDAR</span>
                    <span className="text-lg font-bangers text-[#008752]">{acc.standardTurnstilesExit}</span>
                    <span className="text-[10px] text-gray-500 block">Torniquetes</span>
                  </div>

                  <div className="bg-[#fff9e6] border-2 border-black p-2 rounded-lg">
                    <span className="font-bold text-gray-600 block text-[10px]">ENTRADA PMR</span>
                    <span className="text-lg font-bangers text-[#D97706]">{acc.pmrTurnstilesEntry}</span>
                    <span className="text-[10px] text-amber-800 font-bold block">Paso Ancho (92cm)</span>
                  </div>

                  <div className="bg-[#fff9e6] border-2 border-black p-2 rounded-lg">
                    <span className="font-bold text-gray-600 block text-[10px]">SALIDA PMR</span>
                    <span className="text-lg font-bangers text-[#D97706]">{acc.pmrTurnstilesExit}</span>
                    <span className="text-[10px] text-amber-800 font-bold block">Paso Ancho (92cm)</span>
                  </div>
                </div>
              </div>

              {/* Visual Breakdown: Máquinas de Recarga & Taquillas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-comic mb-4">
                {/* MRA Box */}
                <div className="bg-white border-2 border-black p-3 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-xs text-[#0070BA] flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5" />
                      MÁQUINAS MRA CÍVICA
                    </span>
                    <span className="font-bangers bg-blue-100 text-[#0070BA] px-1.5 py-0.5 rounded border border-blue-400 text-[10px]">
                      {acc.mraMachines.count} MÁQUINAS
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-800">{acc.mraMachines.type}</p>
                  <p className="text-[11px] text-gray-600">
                    <strong className="text-gray-900">Medios de pago:</strong> {acc.mraMachines.paymentMethods}
                  </p>
                  <span className="inline-block text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                    {acc.mraMachines.status}
                  </span>
                </div>

                {/* Taquilla Box */}
                <div className="bg-white border-2 border-black p-3 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-xs text-[#E52521] flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      TAQUILLA CON CAJERO
                    </span>
                    <span className="font-bangers bg-red-100 text-[#E52521] px-1.5 py-0.5 rounded border border-red-400 text-[10px]">
                      {acc.civicaTicketBooth.count} MÓDULOS
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-800">{acc.civicaTicketBooth.type}</p>
                  <p className="text-[11px] text-gray-600">
                    <strong className="text-gray-900">Servicios:</strong> {acc.civicaTicketBooth.services}
                  </p>
                </div>
              </div>

              {/* Digital Totems & Emergency Gates */}
              <div className="bg-[#FFF8E7] border border-black p-2.5 rounded-xl text-[11px] font-comic space-y-1">
                <div className="flex items-center justify-between text-gray-800">
                  <span className="flex items-center gap-1.5 font-bold">
                    <QrCode className="w-3.5 h-3.5 text-[#008752]" />
                    Tótems de Lectura Cívica App QR:
                  </span>
                  <span className="font-bangers text-xs">{acc.civicaAppQRTotems} Unidades</span>
                </div>
                <div className="flex items-start gap-1.5 text-gray-700 pt-1 border-t border-gray-300">
                  <DoorOpen className="w-3.5 h-3.5 text-[#E52521] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-gray-900">Evacuación:</strong> {acc.emergencyGateWithPanicBar}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-3 mt-3 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-xs font-bangers text-[#008752]">
              <span>VER FICHA COMPLETA EN VIÑETA</span>
              <span className="text-sm">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
