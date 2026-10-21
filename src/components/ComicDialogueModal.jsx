import React from 'react';
import { X, CheckCircle2, AlertTriangle, Shield, MapPin, Zap, Clock, Info, Check } from 'lucide-react';
import { playComicPop, playComicSuccess } from '../utils/audioFX';

export function ComicDialogueModal({ item, onClose, onVerify }) {
  if (!item) return null;

  const handleVerify = (e) => {
    e.stopPropagation();
    if (onVerify) {
      onVerify(item.id, e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-pop-in">
      <div 
        className="relative w-full max-w-xl bg-[#FFFDF0] border-5 border-black comic-shadow-lg rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#FFD100] border-b-4 border-black px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#111111] text-[#FFD100] text-xs font-bangers px-2.5 py-0.5 border border-black rounded">
              {item.code || 'DETALLE'}
            </span>
            <span className="text-sm font-bangers tracking-wide text-black uppercase truncate">
              {item.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#E52521] text-white border-2 border-black font-bangers flex items-center justify-center hover:scale-110 transition-transform cursor-pointer rounded"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Prominent Real Image Display */}
          {item.image && (
            <div className="relative w-full h-56 sm:h-64 rounded-xl border-3 border-black overflow-hidden comic-shadow-sm bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[11px] font-comic font-bold px-2.5 py-1 rounded border border-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFD100]" />
                <span>{item.location || item.level}</span>
              </div>
            </div>
          )}

          {/* Quick Specifications Capsules */}
          <div className="bg-white border-3 border-black comic-shadow-sm p-4 rounded-xl space-y-2 text-xs font-comic">
            <div className="flex items-center justify-between border-b pb-1.5">
              <span className="font-bold text-gray-500 uppercase">POSICIÓN EXACTA:</span>
              <span className="font-bold text-gray-900 text-right">{item.exactPosition || item.locationDescription || item.exactLocation || 'En Estación'}</span>
            </div>

            <div className="flex items-center justify-between border-b pb-1.5">
              <span className="font-bold text-gray-500 uppercase">NIVEL / ZONA:</span>
              <span className="font-bold text-emerald-700">{item.level || 'Estación Parque Berrío'}</span>
            </div>

            {item.specs && (
              <div className="pt-1">
                <span className="font-bold text-gray-500 uppercase block mb-0.5">CARACTERÍSTICAS TÉCNICAS:</span>
                <p className="text-gray-800 leading-tight">{item.specs}</p>
              </div>
            )}

            {item.description && (
              <div className="pt-1">
                <span className="font-bold text-gray-500 uppercase block mb-0.5">DESCRIPCIÓN OPERATIVA:</span>
                <p className="text-gray-800 leading-tight">{item.description}</p>
              </div>
            )}
          </div>

          {/* Actions Footer */}
          <div className="flex items-center justify-between gap-3 pt-2 border-t-2 border-black">
            <div className="flex items-center gap-1.5">
              <span className={`px-2.5 py-1 text-xs font-bangers border-2 border-black rounded ${
                item.verified ? 'bg-[#008752] text-white' : 'bg-[#FFD100] text-black'
              }`}>
                {item.verified ? '✓ VERIFICADO' : '⚡ PENDIENTE'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onVerify && !item.verified && (
                <button
                  onClick={handleVerify}
                  className="comic-btn bg-[#008752] text-white font-bangers text-xs sm:text-sm px-4 py-2 flex items-center gap-1.5 hover:bg-emerald-700"
                >
                  <Check className="w-4 h-4 text-[#FFD100]" />
                  <span>AUDITAR AHORA</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="comic-btn bg-gray-200 text-black font-bangers text-xs sm:text-sm px-4 py-2 hover:bg-gray-300"
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
