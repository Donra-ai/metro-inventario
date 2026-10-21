import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Filter, 
  Sparkles, 
  Flame, 
  HeartPulse, 
  Briefcase, 
  Crosshair, 
  Clock, 
  MapPin, 
  Check, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playComicSuccess, playComicClick, playComicPop } from '../utils/audioFX';

export function EmergencyInventoryPanel({
  station,
  inventory,
  onVerifyItem,
  onVerifyAll,
  onSelectItem,
  triggerOnomatopoeia
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'TODOS', icon: Sparkles },
    { id: 'extintor', label: 'EXTINTORES', icon: Flame },
    { id: 'dea', label: 'DESFIBRILADORES (DEA)', icon: HeartPulse },
    { id: 'botiquin', label: 'BOTIQUINES', icon: Briefcase },
    { id: 'camilla', label: 'CAMILLAS', icon: Crosshair },
    { id: 'gabinete', label: 'GABINETES SCI', icon: ShieldAlert },
  ];

  const filteredItems = inventory.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const verifiedCount = inventory.filter((i) => i.verified).length;
  const progressPercent = Math.round((verifiedCount / inventory.length) * 100) || 0;

  const handleVerify = (item, e) => {
    e.stopPropagation();
    playComicSuccess();
    
    // Comic confetti explosion
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { x, y },
      colors: ['#FFD100', '#008752', '#E52521', '#0070BA', '#111111']
    });

    if (triggerOnomatopoeia) {
      triggerOnomatopoeia('¡VERIFICADO!', rect.left + rect.width / 2, rect.top);
    }

    onVerifyItem(item.id);
  };

  const handleVerifyAll = (e) => {
    playComicSuccess();
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFD100', '#008752', '#E52521', '#111111']
    });

    if (triggerOnomatopoeia) {
      triggerOnomatopoeia('¡INVENTARIO 100% OK!', window.innerWidth / 2, window.innerHeight / 2);
    }

    onVerifyAll();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Inspection Comic Board */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-[#E52521] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
                AUDITORÍA DE SEGURIDAD
              </span>
              <span className="bg-[#008752] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-1">
                ESTACIÓN {station.name.toUpperCase()}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bangers text-[#111111] leading-none">
              INVENTARIO OFICIAL DE ELEMENTOS DE EMERGENCIA
            </h2>
            <p className="text-xs sm:text-sm font-comic text-gray-700 max-w-2xl">
              Verifica cada botiquín, extintor, camilla y DEA de la estación. Al completar la inspección garantizas el cumplimiento de las normas de seguridad del Metro de Medellín.
            </p>
          </div>

          {/* Progress Indicator Gauge & Action */}
          <div className="w-full lg:w-auto bg-[#FFF8E7] border-3 border-black comic-shadow-sm p-4 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center gap-4 shrink-0">
            <div className="text-center sm:text-left lg:text-center w-full">
              <div className="flex justify-between items-center gap-4 mb-1">
                <span className="text-xs font-bangers uppercase text-gray-700">ESTADO DE VERIFICACIÓN:</span>
                <span className="text-base font-bangers text-[#008752]">{progressPercent}%</span>
              </div>
              <div className="w-full sm:w-48 bg-gray-200 border-2 border-black h-4 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-gradient-to-r from-[#FFD100] via-[#008752] to-[#008752] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-gray-600 block mt-1">
                {verifiedCount} de {inventory.length} elementos auditados
              </span>
            </div>

            <button
              onClick={handleVerifyAll}
              className="w-full comic-btn bg-[#FFD100] text-black font-bangers text-sm px-4 py-2.5 flex items-center justify-center gap-2 hover:bg-yellow-400"
            >
              <Sparkles className="w-4 h-4 text-[#E52521]" />
              <span>¡VERIFICAR TODOS AHORA!</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 pt-4 border-t-3 border-black flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playComicClick();
                    setSelectedCategory(cat.id);
                  }}
                  className={`comic-btn px-3 py-1.5 text-xs font-bangers flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#111111] text-[#FFD100] scale-105 border-3 border-black'
                      : 'bg-white text-gray-800 hover:bg-amber-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar por código, nombre o lugar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-3 border-black comic-shadow-sm px-3 py-1.5 text-xs font-comic font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008752]"
            />
            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-2.5" />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          const isVerified = item.verified;

          return (
            <div
              key={item.id}
              onClick={() => {
                playComicPop();
                onSelectItem(item);
              }}
              className={`relative bg-[#FFFDF0] border-4 border-black comic-shadow rounded-xl p-4 flex flex-col justify-between transition-transform hover:-translate-y-1.5 cursor-pointer group ${
                isVerified ? 'border-[#008752]' : 'border-black'
              }`}
            >
              {/* Category & Status Stamp */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bangers px-2 py-0.5 border-2 border-black rounded ${
                    item.category === 'extintor' ? 'bg-[#E52521] text-white' :
                    item.category === 'dea' ? 'bg-[#0070BA] text-white' :
                    item.category === 'botiquin' ? 'bg-[#008752] text-white' :
                    item.category === 'camilla' ? 'bg-amber-500 text-black' :
                    'bg-[#111111] text-[#FFD100]'
                  }`}>
                    {item.category.toUpperCase()} • {item.code}
                  </span>

                  <span className={`text-[10px] font-bangers px-2 py-0.5 border-2 border-black rounded flex items-center gap-1 ${
                    isVerified ? 'bg-[#008752] text-white' : 'bg-[#FFD100] text-black'
                  }`}>
                    {isVerified ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-[#FFD100]" />
                        <span>¡VERIFICADO!</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3 h-3 text-[#E52521]" />
                        <span>PENDIENTE</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Item Name */}
                <h3 className="text-xl font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight mb-2">
                  {item.name}
                </h3>

                {/* Location Box */}
                <div className="bg-[#FFF8E7] border-2 border-black p-2 rounded-lg text-xs font-comic space-y-1 mb-3">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E52521] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 block">{item.location}</span>
                      <span className="text-gray-600 text-[11px]">{item.exactPosition}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-gray-300">
                    <span className="font-bold text-emerald-800">Nivel: {item.level}</span>
                    <span className="text-gray-500 font-mono">Rev: {item.lastInspected}</span>
                  </div>
                </div>

                {/* Specs snippet */}
                <p className="text-xs font-comic text-gray-700 line-clamp-2 mb-3">
                  {item.specs}
                </p>
              </div>

              {/* Bottom Card Controls */}
              <div className="pt-2 border-t-2 border-dashed border-gray-400 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-gray-500">
                  Vence: <strong className="text-red-700">{item.expiryDate}</strong>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleVerify(item, e)}
                    className={`comic-btn px-2.5 py-1 text-xs font-bangers flex items-center gap-1 ${
                      isVerified
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-800'
                        : 'bg-[#008752] text-white hover:bg-emerald-600'
                    }`}
                    title={isVerified ? 'Elemento ya auditado' : 'Hacer clic para auditar'}
                  >
                    <Check className="w-3.5 h-3.5 text-[#FFD100]" />
                    <span>{isVerified ? 'AUDITADO' : 'AUDITAR'}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playComicPop();
                      onSelectItem(item);
                    }}
                    className="comic-btn bg-white text-black p-1 text-xs hover:bg-gray-100"
                    title="Ver detalles completos en viñeta"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-8 rounded-xl text-center space-y-3">
          <div className="text-4xl">🔍💥</div>
          <h3 className="text-2xl font-bangers text-black">NO SE ENCONTRARON ELEMENTOS</h3>
          <p className="text-sm font-comic text-gray-700">
            Intenta cambiar el término de búsqueda o selecciona otra categoría.
          </p>
        </div>
      )}
    </div>
  );
}
