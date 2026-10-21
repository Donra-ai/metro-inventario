import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  HeartPulse, 
  Crosshair, 
  MapPin, 
  Check, 
  CheckCircle2, 
  AlertTriangle, 
  Search,
  ExternalLink,
  Volume2
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
    { id: 'all', label: 'TODOS', icon: '🌟', count: inventory.length },
    { id: 'extintores', label: 'EXTINTORES', icon: '🧯', count: inventory.filter(i => i.category === 'extintores').length },
    { id: 'camillas', label: 'CAMILLAS MILLER', icon: '🟡', count: inventory.filter(i => i.category === 'camillas').length },
    { id: 'dea', label: 'DESFIBRILADOR DEA', icon: '⚡', count: inventory.filter(i => i.category === 'dea').length },
    { id: 'sillas', label: 'SILLAS DE RUEDAS', icon: '♿', count: inventory.filter(i => i.category === 'sillas').length },
    { id: 'cascos', label: 'CASCOS RESCATE', icon: '⛑️', count: inventory.filter(i => i.category === 'cascos').length },
    { id: 'megafonos', label: 'MEGÁFONOS OES', icon: '📢', count: inventory.filter(i => i.category === 'megafonos').length },
    { id: 'linternas', label: 'LINTERNAS', icon: '🔦', count: inventory.filter(i => i.category === 'linternas').length },
    { id: 'parada', label: 'BOTONES PARADA', icon: '🛑', count: inventory.filter(i => i.category === 'parada').length },
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
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#FFD100', '#008752', '#E52521', '#111111']
    });

    if (triggerOnomatopoeia) {
      triggerOnomatopoeia('¡VERIFICADO!', rect.left + rect.width / 2, rect.top);
    }

    onVerifyItem(item.id);
  };

  const handleVerifyAll = () => {
    playComicSuccess();
    confetti({
      particleCount: 130,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFD100', '#008752', '#E52521', '#0070BA', '#111111']
    });

    if (triggerOnomatopoeia) {
      triggerOnomatopoeia('¡100% AUDITADO!', window.innerWidth / 2, window.innerHeight / 2);
    }

    onVerifyAll();
  };

  return (
    <div className="space-y-6">
      {/* Top Visual Filter Bar */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 rounded-2xl space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#E52521] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
                CATÁLOGO VISUAL DE ELEMENTOS
              </span>
              <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                ESTACIÓN PARQUE BERRÍO (BER)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bangers text-black mt-1">
              INVENTARIO DE SEGURIDAD & EMERGENCIAS
            </h2>
            <p className="text-xs sm:text-sm font-comic text-gray-700">
              Selecciona una categoría para ver las imágenes reales de cada equipo y su ubicación en la estación.
            </p>
          </div>

          {/* Quick Audit Gauge & All-Verify Button */}
          <div className="flex items-center gap-3">
            <div className="bg-white border-3 border-black p-2.5 rounded-xl text-center comic-shadow-sm min-w-[120px]">
              <span className="text-[10px] font-bangers text-gray-600 block uppercase">AUDITORÍA</span>
              <span className="text-xl font-bangers text-[#008752]">{progressPercent}% OK</span>
              <span className="text-[10px] font-mono text-gray-500 block">{verifiedCount}/{inventory.length} equipos</span>
            </div>

            <button
              onClick={handleVerifyAll}
              className="comic-btn bg-[#FFD100] text-black font-bangers text-xs sm:text-sm px-4 py-3 flex items-center gap-1.5 hover:bg-yellow-400"
            >
              <Sparkles className="w-4 h-4 text-[#E52521]" />
              <span>¡AUDITAR TODOS!</span>
            </button>
          </div>
        </div>

        {/* Visual Category Pills (Emoji + Image style) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-3 border-black">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playComicClick();
                  setSelectedCategory(cat.id);
                }}
                className={`comic-btn px-3.5 py-2 text-xs sm:text-sm font-bangers flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-[#111111] text-[#FFD100] scale-105 border-3 border-black comic-shadow-sm'
                    : 'bg-white text-gray-800 hover:bg-yellow-100'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono border ${
                  isSelected ? 'bg-[#E52521] text-white border-white' : 'bg-gray-100 text-gray-700 border-gray-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar elemento por código o ubicación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-3 border-black comic-shadow-sm px-3.5 py-1.5 text-xs font-comic font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008752]"
          />
          <Search className="w-4 h-4 text-gray-500 absolute right-3 top-2.5" />
        </div>
      </div>

      {/* Visual Image Grid: Large Photos + Minimal Text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredItems.map((item) => {
          const isVerified = item.verified;

          return (
            <div
              key={item.id}
              onClick={() => {
                playComicPop();
                onSelectItem(item);
              }}
              className={`relative bg-[#FFFDF0] border-4 border-black comic-shadow rounded-2xl overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1.5 cursor-pointer group ${
                isVerified ? 'border-[#008752]' : 'border-black'
              }`}
            >
              {/* Image Section (Dominant visual top half) */}
              <div className="relative h-48 w-full bg-gray-100 border-b-3 border-black overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Code badge overlay */}
                <div className="absolute top-2.5 left-2.5 bg-[#111111] text-[#FFD100] text-xs font-bangers px-2 py-0.5 border-2 border-black rounded comic-shadow-sm">
                  {item.code}
                </div>

                {/* Status pill overlay */}
                <div className={`absolute top-2.5 right-2.5 text-[10px] font-bangers px-2 py-0.5 border-2 border-black rounded flex items-center gap-1 ${
                  isVerified ? 'bg-[#008752] text-white' : 'bg-[#FFD100] text-black'
                }`}>
                  {isVerified ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-[#FFD100]" />
                      <span>VERIFICADO</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3 h-3 text-[#E52521]" />
                      <span>PENDIENTE</span>
                    </>
                  )}
                </div>

                {/* Location banner bottom of image */}
                <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 text-[11px] font-comic font-bold flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#FFD100] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Content Section (Minimal and punchy) */}
              <div className="p-3.5 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="text-base font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-comic text-gray-600 line-clamp-2 mt-1">
                    {item.specs}
                  </p>
                </div>

                {/* Action button row */}
                <div className="pt-2 border-t-2 border-dashed border-gray-300 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-gray-500">
                    Nivel: <strong className="text-gray-800">{item.level}</strong>
                  </span>

                  <button
                    onClick={(e) => handleVerify(item, e)}
                    className={`comic-btn px-3 py-1 text-xs font-bangers flex items-center gap-1 ${
                      isVerified
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-800'
                        : 'bg-[#008752] text-white hover:bg-emerald-600'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 text-[#FFD100]" />
                    <span>{isVerified ? 'AUDITADO' : 'AUDITAR'}</span>
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
            Intenta cambiar la categoría o limpiar el término de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}
