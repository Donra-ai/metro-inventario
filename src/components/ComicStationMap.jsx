import React, { useState } from 'react';
import { 
  ShieldAlert, 
  MapPin, 
  Zap, 
  Accessibility, 
  CreditCard, 
  Eye, 
  Layers, 
  Train, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { playComicPop, playComicClick } from '../utils/audioFX';

export function ComicStationMap({ station, onSelectItem }) {
  const [activeLevel, setActiveLevel] = useState('all'); // 'all', 'platforms', 'mezzanine', 'street'
  const [filterType, setFilterType] = useState('all'); // 'all', 'emergency', 'meeting', 'rooms', 'access'

  const handlePinClick = (item) => {
    playComicPop();
    onSelectItem(item);
  };

  const handleLevelChange = (lvl) => {
    playComicClick();
    setActiveLevel(lvl);
  };

  const handleFilterChange = (flt) => {
    playComicClick();
    setFilterType(flt);
  };

  // Compile interactive hotspots
  const emergencyPins = station.emergencyInventory.map((item, idx) => ({
    ...item,
    type: 'emergency',
    levelGroup: item.level.toLowerCase().includes('andén') ? 'platforms' : 'mezzanine',
    x: 18 + (idx * 9) % 72,
    y: item.level.toLowerCase().includes('andén') ? 22 + (idx % 2) * 10 : 54 + (idx % 2) * 8,
    icon: '🚨',
    label: item.code
  }));

  const meetingPins = station.meetingPoints.map((mp, idx) => ({
    ...mp,
    type: 'meeting',
    levelGroup: 'street',
    x: 15 + idx * 35,
    y: 84,
    icon: '🚩',
    label: 'PUNTO SEGURO'
  }));

  const roomPins = station.technicalRooms.map((room, idx) => ({
    ...room,
    type: 'room',
    levelGroup: room.level.toLowerCase().includes('mezanina') ? 'mezzanine' : room.level.toLowerCase().includes('andén') ? 'platforms' : 'street',
    x: 12 + (idx * 16),
    y: room.level.toLowerCase().includes('mezanina') ? 64 : room.level.toLowerCase().includes('andén') ? 35 : 78,
    icon: '⚡',
    label: room.code
  }));

  const accessPins = station.accesses.map((acc, idx) => ({
    ...acc,
    type: 'access',
    levelGroup: 'street',
    x: 20 + idx * 30,
    y: 92,
    icon: '🎫',
    label: `ACCESO ${idx + 1}`
  }));

  const allPins = [...emergencyPins, ...meetingPins, ...roomPins, ...accessPins];

  const filteredPins = allPins.filter((pin) => {
    if (activeLevel !== 'all' && pin.levelGroup !== activeLevel) return false;
    if (filterType !== 'all') {
      if (filterType === 'emergency' && pin.type !== 'emergency') return false;
      if (filterType === 'meeting' && pin.type !== 'meeting') return false;
      if (filterType === 'rooms' && pin.type !== 'room') return false;
      if (filterType === 'access' && pin.type !== 'access') return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Title Panel */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-[#E52521] text-white font-bangers text-xs px-2 py-0.5 border-2 border-black rotate-[-2deg]">
              PLANO ARQUITECTÓNICO // MAPA INTERACTIVO
            </span>
            <span className="text-xs font-mono font-bold text-gray-500 uppercase">
              SECCIÓN ISOMÉTRICA // {station.name.toUpperCase()}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bangers text-black mt-1">
            MAPA VIRTUAL DE CAPAS Y ELEMENTOS
          </h2>
          <p className="text-xs sm:text-sm font-comic text-gray-700">
            Haz clic en cualquier punto para desplegar la viñeta con su ficha técnica y protocolo de emergencia.
          </p>
        </div>

        {/* Level Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'TODOS LOS NIVELES' },
            { id: 'platforms', label: 'NIVEL ANDENES (+2)' },
            { id: 'mezzanine', label: 'NIVEL MEZANINA (+1)' },
            { id: 'street', label: 'NIVEL CALLE (0)' },
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => handleLevelChange(lvl.id)}
              className={`comic-btn px-3 py-1 text-xs font-bangers ${
                activeLevel === lvl.id
                  ? 'bg-[#FFD100] text-black border-3 border-black scale-105'
                  : 'bg-white text-gray-700'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Badges Strip */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-bangers">
        <span className="bg-black text-[#FFD100] px-2 py-1 border-2 border-black">
          FILTRAR PINES EN MAPA:
        </span>
        <button
          onClick={() => handleFilterChange('all')}
          className={`comic-btn px-2.5 py-1 ${filterType === 'all' ? 'bg-[#111111] text-white' : 'bg-white text-black'}`}
        >
          TODOS ({allPins.length})
        </button>
        <button
          onClick={() => handleFilterChange('emergency')}
          className={`comic-btn px-2.5 py-1 ${filterType === 'emergency' ? 'bg-[#E52521] text-white' : 'bg-white text-black'}`}
        >
          🚨 EMERGENCIAS ({emergencyPins.length})
        </button>
        <button
          onClick={() => handleFilterChange('meeting')}
          className={`comic-btn px-2.5 py-1 ${filterType === 'meeting' ? 'bg-[#008752] text-white' : 'bg-white text-black'}`}
        >
          🚩 PUNTOS DE ENCUENTRO ({meetingPins.length})
        </button>
        <button
          onClick={() => handleFilterChange('rooms')}
          className={`comic-btn px-2.5 py-1 ${filterType === 'rooms' ? 'bg-[#0070BA] text-white' : 'bg-white text-black'}`}
        >
          ⚡ CUARTOS TÉCNICOS ({roomPins.length})
        </button>
        <button
          onClick={() => handleFilterChange('access')}
          className={`comic-btn px-2.5 py-1 ${filterType === 'access' ? 'bg-[#FFD100] text-black' : 'bg-white text-black'}`}
        >
          🎫 ACCESOS & TORNIQUETES ({accessPins.length})
        </button>
      </div>

      {/* Interactive Graphic Comic Map Board */}
      <div className="relative w-full bg-[#E8F4F8] border-5 border-black comic-shadow-lg rounded-2xl overflow-hidden min-h-[520px] p-4 select-none">
        {/* Background Comic Grid & Halftone Sky */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#0070BA 2px, transparent 2px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Animated Clouds / Comic Sun in Sky */}
        <div className="absolute top-4 right-8 bg-[#FFD100] border-3 border-black w-14 h-14 rounded-full flex items-center justify-center comic-shadow-sm rotate-6">
          <span className="font-bangers text-xs text-black">SOL VALLE</span>
        </div>

        {/* Station Schematic Canvas / SVG Architectural Cross Section */}
        <svg viewBox="0 0 1000 600" className="w-full h-auto max-h-[580px] drop-shadow-md">
          <defs>
            <pattern id="concretePattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#d1d5db" />
              <circle cx="5" cy="5" r="1.5" fill="#9ca3af" />
              <circle cx="15" cy="15" r="1.5" fill="#9ca3af" />
            </pattern>
            <pattern id="brickPattern" width="30" height="15" patternUnits="userSpaceOnUse">
              <rect width="30" height="15" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Mountains Silhouette Background */}
          <path d="M 0 200 Q 250 80 500 180 T 1000 130 L 1000 600 L 0 600 Z" fill="#bbf7d0" opacity="0.6" stroke="#16a34a" strokeWidth="3" />

          {/* LEVEL 3 / ROOF & CANOPY */}
          <path d="M 120 70 L 880 70 L 840 95 L 160 95 Z" fill="#008752" stroke="#111" strokeWidth="4" />
          <text x="500" y="87" textAnchor="middle" fill="#FFD100" fontSize="14" fontWeight="bold" fontFamily="Bangers">
            TECHUMBRE AERODINÁMICA DE LA ESTACIÓN // {station.name.toUpperCase()}
          </text>

          {/* LEVEL 2: ANDENES / PLATAFORMAS (Y: 130 - 240) */}
          <g opacity={activeLevel === 'all' || activeLevel === 'platforms' ? 1 : 0.25} className="transition-opacity">
            {/* Viaduct Deck Slab */}
            <rect x="100" y="210" width="800" height="30" fill="#94a3b8" stroke="#111" strokeWidth="4" />
            
            {/* Rails & Sleepers */}
            <line x1="120" y1="210" x2="880" y2="210" stroke="#111" strokeWidth="6" strokeDasharray="10 8" />
            <line x1="120" y1="215" x2="880" y2="215" stroke="#475569" strokeWidth="3" />

            {/* Platforms Left and Right */}
            <rect x="100" y="150" width="220" height="60" fill="#f8fafc" stroke="#111" strokeWidth="3" />
            <rect x="680" y="150" width="220" height="60" fill="#f8fafc" stroke="#111" strokeWidth="3" />

            {/* Yellow Tactile Danger Strips on Platforms */}
            <rect x="310" y="150" width="10" height="60" fill="#FFD100" stroke="#111" strokeWidth="1.5" />
            <rect x="680" y="150" width="10" height="60" fill="#FFD100" stroke="#111" strokeWidth="1.5" />

            {/* Metro Train (Animated Carriages) */}
            <g transform="translate(340, 140)">
              {/* Carriage 1 */}
              <rect x="0" y="0" width="150" height="65" rx="10" fill="#FFF" stroke="#111" strokeWidth="3.5" />
              <rect x="0" y="28" width="150" height="12" fill="#008752" />
              <rect x="0" y="40" width="150" height="6" fill="#FFD100" />
              {/* Train Windows */}
              <rect x="15" y="10" width="30" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              <rect x="55" y="10" width="40" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              <rect x="105" y="10" width="30" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              {/* Train Doors */}
              <line x1="50" y1="10" x2="50" y2="65" stroke="#111" strokeWidth="2" />
              <line x1="100" y1="10" x2="100" y2="65" stroke="#111" strokeWidth="2" />
              {/* Pantograph (Catenary contact) */}
              <path d="M 75 0 L 65 -25 L 85 -25 L 75 0" stroke="#E52521" strokeWidth="3" fill="none" />
              <line x1="50" y1="-25" x2="100" y2="-25" stroke="#111" strokeWidth="4" />
            </g>

            {/* Carriage 2 */}
            <g transform="translate(500, 140)">
              <rect x="0" y="0" width="150" height="65" rx="10" fill="#FFF" stroke="#111" strokeWidth="3.5" />
              <rect x="0" y="28" width="150" height="12" fill="#008752" />
              <rect x="0" y="40" width="150" height="6" fill="#FFD100" />
              <rect x="15" y="10" width="30" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              <rect x="55" y="10" width="40" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              <rect x="105" y="10" width="30" height="18" rx="4" fill="#38bdf8" stroke="#111" strokeWidth="2" />
              <line x1="50" y1="10" x2="50" y2="65" stroke="#111" strokeWidth="2" />
              <line x1="100" y1="10" x2="100" y2="65" stroke="#111" strokeWidth="2" />
            </g>

            {/* Level Label Badge */}
            <rect x="30" y="170" width="60" height="30" fill="#008752" stroke="#111" strokeWidth="2" rx="4" />
            <text x="60" y="190" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="Bangers">+2 ANDÉN</text>
          </g>

          {/* LEVEL 1: MEZANINA / CONCOURSE (Y: 280 - 380) */}
          <g opacity={activeLevel === 'all' || activeLevel === 'mezzanine' ? 1 : 0.25} className="transition-opacity">
            {/* Mezzanine Slab */}
            <rect x="150" y="350" width="700" height="25" fill="#cbd5e1" stroke="#111" strokeWidth="4" />

            {/* Support Columns / Viaduct Piers */}
            <rect x="220" y="240" width="35" height="110" fill="url(#concretePattern)" stroke="#111" strokeWidth="3" />
            <rect x="745" y="240" width="35" height="110" fill="url(#concretePattern)" stroke="#111" strokeWidth="3" />

            {/* Escalators / Stairs connecting Mezzanine to Platforms */}
            <polygon points="265,350 330,210 355,210 290,350" fill="#94a3b8" stroke="#111" strokeWidth="2.5" />
            <polygon points="735,350 670,210 645,210 710,350" fill="#94a3b8" stroke="#111" strokeWidth="2.5" />

            {/* Rooms in Mezzanine */}
            {/* PML / Local Control Room */}
            <rect x="420" y="275" width="160" height="75" rx="6" fill="#fef08a" stroke="#111" strokeWidth="3" />
            <rect x="440" y="290" width="50" height="35" rx="3" fill="#67e8f9" stroke="#111" strokeWidth="2" />
            <text x="500" y="338" textAnchor="middle" fill="#111" fontSize="11" fontWeight="bold" fontFamily="Bangers">
              PUESTO DE MANDO LOCAL (PML)
            </text>

            {/* Turnstile Lines Mezzanine */}
            <g transform="translate(180, 310)">
              <rect x="0" y="0" width="60" height="40" fill="#f1f5f9" stroke="#111" strokeWidth="2" />
              <line x1="10" y1="10" x2="25" y2="25" stroke="#E52521" strokeWidth="4" />
              <text x="30" y="32" textAnchor="middle" fontSize="9" fontWeight="bold">TORNIQUETES</text>
            </g>
            <g transform="translate(760, 310)">
              <rect x="0" y="0" width="60" height="40" fill="#f1f5f9" stroke="#111" strokeWidth="2" />
              <line x1="10" y1="10" x2="25" y2="25" stroke="#008752" strokeWidth="4" />
              <text x="30" y="32" textAnchor="middle" fontSize="9" fontWeight="bold">MRA CÍVICA</text>
            </g>

            {/* Level Label Badge */}
            <rect x="30" y="310" width="85" height="30" fill="#FFD100" stroke="#111" strokeWidth="2" rx="4" />
            <text x="72" y="330" textAnchor="middle" fill="#111" fontSize="11" fontWeight="bold" fontFamily="Bangers">+1 MEZANINA</text>
          </g>

          {/* LEVEL 0: GROUND / STREET & MEETING POINTS (Y: 420 - 560) */}
          <g opacity={activeLevel === 'all' || activeLevel === 'street' ? 1 : 0.25} className="transition-opacity">
            {/* Ground line */}
            <line x1="0" y1="480" x2="1000" y2="480" stroke="#111" strokeWidth="6" />
            <rect x="0" y="480" width="1000" height="120" fill="#e2e8f0" />

            {/* Foundation Piers going to ground */}
            <rect x="210" y="375" width="55" height="105" fill="url(#concretePattern)" stroke="#111" strokeWidth="4" />
            <rect x="735" y="375" width="55" height="105" fill="url(#concretePattern)" stroke="#111" strokeWidth="4" />

            {/* Street Access Buildings / Plazas */}
            <rect x="40" y="415" width="150" height="65" fill="#fef9c3" stroke="#111" strokeWidth="3" rx="4" />
            <text x="115" y="445" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="Bangers">ACCESO NORTE / SUR</text>
            <text x="115" y="465" textAnchor="middle" fontSize="9" fill="#4b5563">Rampas PMR y Cívica</text>

            <rect x="810" y="415" width="150" height="65" fill="#fef9c3" stroke="#111" strokeWidth="3" rx="4" />
            <text x="885" y="445" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="Bangers">ACCESO ORIENTAL</text>
            <text x="885" y="465" textAnchor="middle" fontSize="9" fill="#4b5563">Conexión Pasarelas</text>

            {/* Safe Meeting Point Zones (Marked on Ground with Green Hatching) */}
            <g transform="translate(100, 500)">
              <rect x="0" y="0" width="240" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 4" />
              <text x="120" y="28" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold" fontFamily="Bangers">
                🚩 ZONA SEGURA DE ENCUENTRO 1
              </text>
              <text x="120" y="48" textAnchor="middle" fill="#15803d" fontSize="10">
                Aforo seguro y rutas despejadas
              </text>
            </g>

            <g transform="translate(660, 500)">
              <rect x="0" y="0" width="240" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 4" />
              <text x="120" y="28" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold" fontFamily="Bangers">
                🚩 ZONA SEGURA DE ENCUENTRO 2
              </text>
              <text x="120" y="48" textAnchor="middle" fill="#15803d" fontSize="10">
                Punto exterior monitoreado
              </text>
            </g>

            {/* Level Label Badge */}
            <rect x="30" y="440" width="75" height="30" fill="#0070BA" stroke="#111" strokeWidth="2" rx="4" />
            <text x="67" y="460" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="Bangers">0 CALLE</text>
          </g>
        </svg>

        {/* Dynamic Interactive Hotspot Pins Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {filteredPins.map((pin, i) => {
            const isEmergency = pin.type === 'emergency';
            const isMeeting = pin.type === 'meeting';
            const isRoom = pin.type === 'room';
            const isAccess = pin.type === 'access';

            const bgClass = isEmergency 
              ? 'bg-[#E52521] text-white border-black' 
              : isMeeting 
              ? 'bg-[#008752] text-white border-black' 
              : isRoom 
              ? 'bg-[#0070BA] text-white border-black' 
              : 'bg-[#FFD100] text-black border-black';

            return (
              <div
                key={`${pin.type}-${pin.id || i}`}
                className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-130 hover:z-40"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                }}
                onClick={() => handlePinClick(pin)}
                title={`${pin.name} (${pin.code || pin.type})`}
              >
                {/* Comic Hotspot Button */}
                <div className={`comic-btn p-1.5 sm:p-2 rounded-full border-3 ${bgClass} comic-shadow-sm flex items-center justify-center animate-comic-bounce`}>
                  <span className="text-sm sm:text-base">{pin.icon}</span>
                </div>

                {/* Floating Tag */}
                <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-[9px] font-bangers px-1.5 py-0.5 rounded border border-white whitespace-nowrap comic-shadow-sm">
                  {pin.code || pin.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend Card */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-4 rounded-xl">
        <div className="text-xs font-bangers uppercase text-gray-500 mb-2">CONVENCIONES DEL SISTEMA:</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-comic font-bold">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#E52521] text-white rounded-full flex items-center justify-center border-2 border-black text-xs">🚨</span>
            <span>Elementos de Emergencia (Extintores, DEA, Botiquines, Camillas)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#008752] text-white rounded-full flex items-center justify-center border-2 border-black text-xs">🚩</span>
            <span>Puntos de Encuentro y Evacuación</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#0070BA] text-white rounded-full flex items-center justify-center border-2 border-black text-xs">⚡</span>
            <span>Cuartos Técnicos (PML, Tracción, Señalización)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#FFD100] text-black rounded-full flex items-center justify-center border-2 border-black text-xs">🎫</span>
            <span>Accesos, Torniquetes y Máquinas MRA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
