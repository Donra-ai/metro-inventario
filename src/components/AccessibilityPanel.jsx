import React from 'react';
import { 
  Accessibility, 
  ArrowUpDown, 
  Footprints, 
  Volume2, 
  Sparkles, 
  CheckCircle, 
  Eye, 
  Radio, 
  FileText,
  ShieldCheck,
  Check
} from 'lucide-react';
import { playComicPop } from '../utils/audioFX';

export function AccessibilityPanel({ station, onSelectItem }) {
  const { accessibility } = station;

  const accessibilityCards = [
    {
      id: 'acc-card-1',
      title: 'ASCENSORES PANORÁMICOS PMR',
      count: `${accessibility.elevatorsCount} UNIDADES`,
      icon: ArrowUpDown,
      accent: 'bg-[#008752] text-white',
      badge: 'CABINAS ACCESIBLES',
      description: accessibility.elevatorsDetails,
      specs: 'Capacidad de 1.000 kg (13 personas), velocidad de 1 m/s, botoneras en relieve y braille a 90 cm, sintetizador vocal en español e inglés.'
    },
    {
      id: 'acc-card-2',
      title: 'SISTEMA PODOTÁCTIL EN RELIEVE',
      count: '100% COBERTURA',
      icon: Footprints,
      accent: 'bg-[#FFD100] text-black',
      badge: 'GUÍAS HÁPTICAS',
      description: accessibility.podotactileCoverage,
      specs: 'Baldosas de botones de advertencia en bordes de andén y descanso de escaleras + franjas direccionales de avance en pisos de mezanina.'
    },
    {
      id: 'acc-card-3',
      title: 'TORNIQUETES ANCHOS PREFERENCIALES',
      count: `${accessibility.accessibleGatesCount} PASOS PMR`,
      icon: Accessibility,
      accent: 'bg-[#0070BA] text-white',
      badge: 'PASO EXPEDITO',
      description: accessibility.accessibleGatesDetails,
      specs: 'Paso libre útil de 92 cm a 95 cm con sensor fotoeléctrico bidireccional y apertura automática para personas con movilidad reducida o coches de bebé.'
    },
    {
      id: 'acc-card-4',
      title: 'RAMPAS PEATONALES Y PASAMANOS',
      count: 'PENDIENTE < 8%',
      icon: CheckCircle,
      accent: 'bg-[#E52521] text-white',
      badge: 'CIRCULACIÓN FLUIDA',
      description: accessibility.wheelchairRamps,
      specs: 'Pasamanos tubulares dobles en acero inoxidable a 70 cm (niños y talla baja) y 90 cm (adultos) con remates redondeados de seguridad.'
    },
    {
      id: 'acc-card-5',
      title: 'INTERFONOS SOS Y COMUNICACIÓN',
      count: 'AUDIO & LUZ',
      icon: Radio,
      accent: 'bg-emerald-600 text-white',
      badge: 'ASISTENCIA 24/7',
      description: accessibility.audioAssistance,
      specs: 'Interfonos de auxilio colocados a 100 cm del suelo con baliza estroboscópica azul para personas sordas y comunicación directa al PML.'
    },
    {
      id: 'acc-card-6',
      title: 'SEÑALÉTICA BRAILLE Y PLANOS HÁPTICOS',
      count: 'ALTO RELIEVE',
      icon: Eye,
      accent: 'bg-purple-600 text-white',
      badge: 'SISTEMA BRAILLE',
      description: accessibility.brailleSignage,
      specs: 'Planos hápticos en relieve termoformado en los accesos de la estación y numeración braille en los pasamanos de cada escalera fija.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#008752] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
                INCLUSIÓN TOTAL
              </span>
              <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                ESTACIÓN {station.name.toUpperCase()}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bangers text-[#111111] leading-none">
              EQUIPOS Y PROTOCOLOS DE ACCESIBILIDAD UNIVERSAL
            </h2>
            <p className="text-xs sm:text-sm font-comic text-gray-700 max-w-2xl">
              El Metro de Medellín garantiza el viaje autónomo, seguro y digno para personas con discapacidad motriz, visual, auditiva, personas mayores y familias con coches de bebé.
            </p>
          </div>

          <div className="bg-[#FFF8E7] border-3 border-black comic-shadow-sm p-4 rounded-xl shrink-0 text-center">
            <span className="text-xs font-bangers text-gray-600 block uppercase">ASCENSORES DISPONIBLES</span>
            <span className="text-4xl font-bangers text-[#008752] block my-1">
              {accessibility.elevatorsCount}
            </span>
            <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-800">
              100% OPERATIVOS
            </span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {accessibilityCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => {
                playComicPop();
                onSelectItem({
                  name: card.title,
                  code: card.count,
                  level: 'Accesibilidad Estación',
                  description: card.description,
                  specs: card.specs,
                  verified: true
                });
              }}
              className="bg-white border-4 border-black comic-shadow rounded-xl p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-transform cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-full border-3 border-black flex items-center justify-center ${card.accent} comic-shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bangers px-2 py-0.5 border-2 border-black rounded bg-gray-100 text-gray-800">
                    {card.count}
                  </span>
                </div>

                <h3 className="text-xl font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight mb-2">
                  {card.title}
                </h3>

                <p className="text-xs font-comic text-gray-800 leading-relaxed mb-3">
                  {card.description}
                </p>

                <div className="bg-[#FFF8E7] border border-black p-2.5 rounded-lg text-xs font-comic">
                  <span className="font-bold text-gray-600 block text-[10px] uppercase">ESPECIFICACIÓN TÉCNICA:</span>
                  <span className="text-gray-900">{card.specs}</span>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-xs font-bangers text-[#008752]">
                <span>CONSULTAR ESPECIFICACIONES</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comic Inclusivity Tip Box */}
      <div className="bg-[#FFD100] border-4 border-black comic-shadow p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#111111] border-3 border-black rounded-full flex items-center justify-center shrink-0">
          <Sparkles className="w-8 h-8 text-[#FFD100]" />
        </div>
        <div>
          <h4 className="text-xl font-bangers text-[#111111] uppercase">
            REGLA DE ORO DE LA CULTURA METRO EN ACCESIBILIDAD:
          </h4>
          <p className="text-xs sm:text-sm font-comic text-black">
            Ceder el paso en ascensores a personas en silla de ruedas, no obstaculizar las huellas podotáctiles con maletines o bultos, y mantener libre la zona de torniquetes anchos.
          </p>
        </div>
      </div>
    </div>
  );
}
