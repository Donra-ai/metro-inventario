import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Wind, 
  Users, 
  Flame, 
  DoorOpen, 
  Layers, 
  Lock, 
  ShieldAlert,
  ArrowRightCircle,
  Clock
} from 'lucide-react';
import { playComicPop } from '../utils/audioFX';

export function LocativeDetailsPanel({ station, onSelectItem }) {
  const { locativeFeatures, meetingPoints, technicalRooms } = station;

  return (
    <div className="space-y-8">
      {/* SECTION 1: CARACTERÍSTICAS LOCATIVAS */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#FFD100] text-black font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
            ANATOMÍA ESTRUCTURAL
          </span>
          <span className="text-xs font-mono font-bold text-gray-500 uppercase">
            ESTACIÓN {station.name.toUpperCase()}
          </span>
        </div>
        <h2 className="text-3xl font-bangers text-black mb-3">
          CARACTERÍSTICAS LOCATIVAS Y ESTRUCTURALES
        </h2>
        <p className="text-sm font-comic text-gray-700 max-w-3xl mb-6">
          La ingeniería de las estaciones del Metro de Medellín está diseñada bajo estrictos parámetros sismorresistentes (NSR-10) y normas de protección contra fuego (NFPA 130 para sistemas ferroviarios).
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-comic">
          {/* Card 1: Estructura */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-[#008752]">
              <Building2 className="w-4 h-4 text-[#E52521]" />
              <span>TIPO DE ESTRUCTURA</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.structureType}</p>
            <span className="text-[11px] text-gray-500 block">Vigas cajón y columnas de concreto postensado.</span>
          </div>

          {/* Card 2: Niveles */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-[#0070BA]">
              <Layers className="w-4 h-4 text-[#FFD100]" />
              <span>NIVELES Y DISTRIBUCIÓN</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.levels}</p>
            <span className="text-[11px] text-gray-500 block">Separación vertical de flujos peatonales y trenes.</span>
          </div>

          {/* Card 3: Andenes */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-[#D97706]">
              <DoorOpen className="w-4 h-4 text-[#008752]" />
              <span>CONFIGURACIÓN DE ANDENES</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.platformsType}</p>
            <span className="text-[11px] text-gray-500 block">Diseñados para trenes MAN de 3 coches o dobles de 6 coches.</span>
          </div>

          {/* Card 4: Ventilación */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-teal-700">
              <Wind className="w-4 h-4 text-cyan-600" />
              <span>SISTEMA DE VENTILACIÓN</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.ventilation}</p>
            <span className="text-[11px] text-gray-500 block">Disipación térmica y extracción de humos por gravedad y mecánica.</span>
          </div>

          {/* Card 5: Aforo */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-[#E52521]">
              <Users className="w-4 h-4 text-[#FFD100]" />
              <span>CAPACIDAD DE AFORO</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.capacity}</p>
            <span className="text-[11px] text-gray-500 block">Monitoreado en tiempo real desde el Puesto Central de Operaciones (PCO).</span>
          </div>

          {/* Card 6: Supresión de Fuego */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bangers text-red-600">
              <Flame className="w-4 h-4 text-[#E52521]" />
              <span>RED CONTRA INCENDIO</span>
            </div>
            <p className="font-bold text-gray-900">{locativeFeatures.fireSuppression}</p>
            <span className="text-[11px] text-gray-500 block">{locativeFeatures.emergencyExitsCount} Salidas de emergencia reglamentarias.</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: PUNTOS DE ENCUENTRO EN CASO DE EMERGENCIA */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#008752] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-1">
            ZONAS SEGURAS EXTERIORES
          </span>
          <span className="text-xs font-mono font-bold text-gray-500 uppercase">
            PLAN DE EVACUACIÓN Y CONTINGENCIA
          </span>
        </div>
        <h2 className="text-3xl font-bangers text-black mb-3">
          PUNTOS DE ENCUENTRO EN CASO DE EMERGENCIA
        </h2>
        <p className="text-sm font-comic text-gray-700 max-w-3xl mb-6">
          En caso de sismo, incendio o evacuación general, el personal Metro y los guías de estación conducirán a los usuarios hacia estas zonas seguras exteriores debidamente georreferenciadas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {meetingPoints.map((mp, idx) => (
            <div
              key={mp.id}
              onClick={() => {
                playComicPop();
                onSelectItem(mp);
              }}
              className="bg-white border-4 border-black comic-shadow rounded-xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#008752] text-white border-2 border-black flex items-center justify-center font-bangers text-sm">
                    {idx + 1}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bangers px-2 py-0.5 border border-emerald-800 rounded">
                    {mp.status}
                  </span>
                </div>

                <h3 className="text-xl font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight mb-2">
                  {mp.name}
                </h3>

                <div className="space-y-2 text-xs font-comic mb-4">
                  <div className="flex items-start gap-1.5 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#E52521] shrink-0 mt-0.5" />
                    <span>{mp.locationDescription}</span>
                  </div>

                  <div className="bg-[#FFF8E7] border border-black p-2 rounded text-[11px] space-y-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-600">AFORO SEGURO:</span>
                      <span className="font-bold text-blue-700">{mp.safeCapacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-600">TIEMPO ESTIMADO:</span>
                      <span className="font-bold text-emerald-700">{mp.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <span className="font-bold text-gray-500 text-[10px] block uppercase">RUTA DE ESCAPE:</span>
                    <span className="text-gray-800 text-xs">{mp.evacuationRoute}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-xs font-bangers text-[#008752]">
                <span>VER DETALLES EN VIÑETA</span>
                <ArrowRightCircle className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: CUARTOS TÉCNICOS Y OPERATIVOS */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#0070BA] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-1deg]">
            INSTALACIONES TÉCNICAS
          </span>
          <span className="text-xs font-mono font-bold text-gray-500 uppercase">
            INFRAESTRUCTURA OPERATIVA CRÍTICA
          </span>
        </div>
        <h2 className="text-3xl font-bangers text-black mb-3">
          UBICACIÓN Y CONTROL DE CUARTOS TÉCNICOS
        </h2>
        <p className="text-sm font-comic text-gray-700 max-w-3xl mb-6">
          Conoce la ubicación de cada cuarto técnico, sus niveles de tensión y carga térmica, protocolos de acceso restringido y equipamiento de seguridad para brigadistas y personal de mantenimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => {
                playComicPop();
                onSelectItem(room);
              }}
              className="bg-white border-4 border-black comic-shadow rounded-xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#111111] text-[#FFD100] text-xs font-bangers px-2 py-0.5 border border-black rounded">
                    {room.code}
                  </span>
                  <span className="text-[10px] font-bangers px-2 py-0.5 bg-red-100 text-red-800 border border-red-800 rounded flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    RESTRINGIDO
                  </span>
                </div>

                <h3 className="text-xl font-bangers text-[#111111] group-hover:text-[#0070BA] transition-colors leading-tight mb-2">
                  {room.name}
                </h3>

                <div className="space-y-2 text-xs font-comic mb-4">
                  <div className="bg-gray-100 p-2 border border-black rounded">
                    <span className="font-bold text-gray-600 block text-[10px]">UBICACIÓN / NIVEL:</span>
                    <span className="font-bold text-gray-900">{room.level}</span>
                    <span className="text-[11px] text-gray-600 block mt-0.5">{room.exactLocation}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-xs">
                    {room.description}
                  </p>

                  <div className="bg-[#FFF8E7] p-2 border border-black rounded text-[11px]">
                    <span className="font-bold text-red-700 block uppercase">EQUIPO DE SEGURIDAD EN EL CUARTO:</span>
                    <span className="text-gray-800">{room.safetyEquipment}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-xs font-bangers text-[#0070BA]">
                <span>CONSULTAR FICHA TÉCNICA</span>
                <ArrowRightCircle className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
