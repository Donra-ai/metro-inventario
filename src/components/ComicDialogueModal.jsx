import React from 'react';
import { X, CheckCircle, AlertTriangle, Shield, MapPin, Zap, Clock, Info, Check } from 'lucide-react';
import { playComicPop, playComicSuccess } from '../utils/audioFX';

export function ComicDialogueModal({ item, onClose, onVerify }) {
  if (!item) return null;

  const handleVerify = (e) => {
    e.stopPropagation();
    if (onVerify) {
      onVerify(item, e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-pop-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFDF0] border-5 border-black comic-shadow-lg rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Comic Header Bar */}
        <div className="bg-[#FFD100] border-b-4 border-black px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#111111] text-[#FFD100] text-xs font-bangers px-2 py-0.5 border border-black uppercase tracking-wider">
              VIÑETA DE INSPECCIÓN No. {item.code || 'DETALLE'}
            </span>
            <span className="text-sm font-bangers tracking-wide text-black uppercase">
              {item.category || item.level || 'INSPECCIÓN OFICIAL'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#E52521] text-white border-2 border-black font-bangers flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            title="Cerrar viñeta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Avatar and Speech Bubble Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Animated Hero Avatar */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#008752] border-4 border-black rounded-full comic-shadow flex items-center justify-center relative overflow-hidden group">
                {/* SVG Superhero/Inspector Face */}
                <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                  {/* Cap */}
                  <path d="M 20 40 Q 50 15 80 40 L 75 48 Q 50 25 25 48 Z" fill="#FFD100" stroke="#111" strokeWidth="3" />
                  <ellipse cx="50" cy="30" rx="6" ry="6" fill="#E52521" stroke="#111" strokeWidth="2" />
                  {/* Face */}
                  <circle cx="50" cy="55" r="28" fill="#FCD34D" stroke="#111" strokeWidth="3" />
                  {/* Mask / Visor */}
                  <path d="M 28 50 Q 50 62 72 50 Q 50 42 28 50 Z" fill="#111111" />
                  <ellipse cx="38" cy="50" rx="5" ry="3" fill="#FFF" />
                  <ellipse cx="62" cy="50" rx="5" ry="3" fill="#FFF" />
                  {/* Smile */}
                  <path d="M 40 68 Q 50 78 60 68" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round" />
                  {/* Metro Badge */}
                  <circle cx="50" cy="88" r="9" fill="#008752" stroke="#111" strokeWidth="2" />
                  <text x="44" y="92" fontSize="10" fontWeight="bold" fill="#FFD100">M</text>
                </svg>
              </div>
              <span className="mt-1 text-[11px] font-bangers text-[#008752] uppercase tracking-wide">
                INSPECTORA CÍVICA
              </span>
            </div>

            {/* Comic Speech Bubble */}
            <div className="relative flex-1 bg-white border-3 border-black comic-shadow p-4 rounded-xl">
              <div className="text-xs font-mono uppercase text-gray-500 font-bold mb-1">
                INFORME DE ELEMENTO:
              </div>
              <h2 className="text-xl sm:text-2xl font-bangers text-[#111111] leading-tight mb-2">
                {item.name}
              </h2>
              <p className="text-sm font-comic text-gray-800 leading-relaxed">
                {item.description || item.specs || item.locationDescription || 'Elemento verificado dentro del protocolo de prevención y atención de desastres del Sistema Metro.'}
              </p>
            </div>
          </div>

          {/* Technical Spec Box */}
          <div className="bg-[#FFF8E7] border-3 border-black comic-shadow-sm p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bangers text-[#008752] uppercase">
              <Info className="w-4 h-4" />
              <span>CARACTERÍSTICAS TÉCNICAS Y OPERATIVAS:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-comic">
              {item.location && (
                <div className="bg-white p-2 border-2 border-black rounded">
                  <span className="font-bold text-gray-500 block">UBICACIÓN GENERAL:</span>
                  <span className="font-bold text-gray-900">{item.location}</span>
                </div>
              )}
              {item.exactPosition && (
                <div className="bg-white p-2 border-2 border-black rounded">
                  <span className="font-bold text-gray-500 block">POSICIÓN EXACTA:</span>
                  <span className="font-bold text-gray-900">{item.exactPosition}</span>
                </div>
              )}
              {item.level && (
                <div className="bg-white p-2 border-2 border-black rounded">
                  <span className="font-bold text-gray-500 block">NIVEL / ALTURA:</span>
                  <span className="font-bold text-emerald-800">{item.level}</span>
                </div>
              )}
              {item.expiryDate && (
                <div className="bg-white p-2 border-2 border-black rounded">
                  <span className="font-bold text-gray-500 block">VENCIMIENTO / REVISIÓN:</span>
                  <span className="font-bold text-red-600">{item.expiryDate}</span>
                </div>
              )}
              {item.safeCapacity && (
                <div className="bg-white p-2 border-2 border-black rounded">
                  <span className="font-bold text-gray-500 block">AFORO MÁXIMO SEGURO:</span>
                  <span className="font-bold text-blue-700">{item.safeCapacity}</span>
                </div>
              )}
              {item.evacuationRoute && (
                <div className="bg-white p-2 border-2 border-black rounded sm:col-span-2">
                  <span className="font-bold text-gray-500 block">RUTA DE EVACUACIÓN:</span>
                  <span className="font-bold text-gray-900">{item.evacuationRoute}</span>
                </div>
              )}
              {item.safetyEquipment && (
                <div className="bg-white p-2 border-2 border-black rounded sm:col-span-2">
                  <span className="font-bold text-gray-500 block">EQUIPO DE SEGURIDAD EN EL CUARTO:</span>
                  <span className="font-bold text-gray-900">{item.safetyEquipment}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t-2 border-black">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bangers">ESTADO ACTUAL:</span>
              <span className={`px-2 py-0.5 text-xs font-bangers border-2 border-black ${
                item.verified ? 'bg-[#008752] text-white' : 'bg-[#FFD100] text-black'
              }`}>
                {item.verified ? '✓ VERIFICADO Y OPERATIVO' : '⚡ PENDIENTE DE VALIDACIÓN'}
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {onVerify && !item.verified && (
                <button
                  onClick={handleVerify}
                  className="comic-btn flex-1 sm:flex-initial bg-[#008752] text-white font-bangers text-sm px-4 py-2 flex items-center justify-center gap-2 hover:bg-emerald-700"
                >
                  <Check className="w-4 h-4 text-[#FFD100]" />
                  <span>¡MARCAR COMO VERIFICADO!</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="comic-btn flex-1 sm:flex-initial bg-gray-200 text-black font-bangers text-sm px-4 py-2 hover:bg-gray-300"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
