import React from 'react';
import { Train, Volume2, VolumeX, ShieldAlert, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { playComicClick, isSoundEnabled, toggleSound } from '../utils/audioFX';

export function ComicHeader({
  stations,
  currentStation,
  onSelectStation,
  soundOn,
  setSoundOn,
  activeTab,
  setActiveTab,
  stats
}) {
  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) playComicClick();
  };

  const handleStationChange = (st) => {
    playComicClick();
    onSelectStation(st);
  };

  const tabs = [
    { id: 'inventory', label: '🚨 INVENTARIO EMERGENCIAS', badge: `${stats.verifiedCount}/${stats.totalItems}` },
    { id: 'map', label: '🗺️ PLANO / MAPA INTERACTIVO', badge: 'VISTA 3D' },
    { id: 'locative', label: '🏗️ CUARTOS Y LOCATIVAS', badge: `${stats.roomsCount} CUARTOS` },
    { id: 'accessibility', label: '♿ ACCESIBILIDAD PMR', badge: `${currentStation.accessibility.elevatorsCount} ASCENSORES` },
    { id: 'accesses', label: '🎫 ACCESOS Y CÍVICA', badge: `${stats.totalTurnstiles} TORNIQUETES` },
    { id: 'cultura', label: '💚 CULTURA METRO', badge: 'DECÁLOGO & SITVA' },
  ];

  return (
    <header className="relative w-full border-b-4 border-black bg-[#FFFDF0] z-30">
      {/* Top comic ticker */}
      <div className="bg-[#111111] text-[#FFD100] px-4 py-1.5 text-xs sm:text-sm font-bangers flex justify-between items-center tracking-widest uppercase overflow-x-auto">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="bg-[#E52521] text-white px-2 py-0.5 rounded text-xs animate-comic-pulse">
            LIBRETA DE ESTACIONES // OFICIAL
          </span>
          <span>VALLE DE ABURRÁ • MEDELLÍN • SISTEMA DE GESTIÓN DE SEGURIDAD & EMERGENCIAS</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-emerald-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            RED OPERANDO 100%
          </span>
          <span>CULTURA METRO ACTIVA</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Title & Branding */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FFD100] border-4 border-black comic-shadow flex items-center justify-center rotate-[-3deg] text-2xl font-bangers select-none">
            📖
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-bangers text-[#111111] leading-none tracking-wider drop-shadow-[2px_2px_0px_#FFD100]">
                LIBRETA DE ESTACIONES
              </h1>
              <span className="bg-[#008752] text-white text-xs font-bangers px-2 py-0.5 border-2 border-black rotate-2">
                AUDITORÍA
              </span>
            </div>
            <p className="text-xs sm:text-sm font-comic font-bold text-gray-700">
              Inventario de Emergencias, Accesibilidad, Cuartos Técnicos & Cívica
            </p>
          </div>
        </div>

        {/* Action Controls & Sound Switch */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Sound toggle button */}
          <button
            onClick={handleSoundToggle}
            className={`comic-btn flex items-center gap-1.5 px-3 py-1.5 text-xs font-bangers uppercase transition-colors ${
              soundOn ? 'bg-[#FFD100] text-black' : 'bg-gray-200 text-gray-600'
            }`}
            title="Activar / Desactivar Efectos de Sonido Cómic"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#E52521]" /> : <VolumeX className="w-4 h-4" />}
            <span>SFX {soundOn ? 'ON' : 'OFF'}</span>
          </button>

          {/* Quick Inspection Summary Comic Badge */}
          <div className="bg-[#008752] text-white border-3 border-black comic-shadow-sm px-3 py-1 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFD100]" />
            <div className="text-left leading-tight">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-[#FFD100]">INSPECCIÓN ESTACIÓN</span>
              <span className="text-xs font-bangers">{stats.percentage}% COMPLETADA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Station Strip (Parque Berrío BER) */}
      <div className="bg-[#f2efe4] border-t-3 border-b-3 border-black px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bangers">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#008752] border border-black animate-pulse"></span>
            <span className="text-gray-900 tracking-wider">ESTACIÓN ACTIVA:</span>
            <span className="bg-[#FFD100] text-black px-2.5 py-0.5 border-2 border-black rounded text-sm">
              PARQUE BERRÍO (BER) • LÍNEA A
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-comic text-[11px]">
            <span className="bg-white px-2 py-0.5 border border-black rounded">Libreta Oficial: <strong>DR0292 v4</strong></span>
            <span className="bg-white px-2 py-0.5 border border-black rounded">Viaducto • 4 Accesos • 20 Torniquetes</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Strip */}
      <div className="bg-[#FFFDF0] px-4 py-2 border-b-2 border-gray-300 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-2 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playComicClick();
                  setActiveTab(tab.id);
                }}
                className={`comic-btn px-3.5 py-1.5 text-xs sm:text-sm font-bangers flex items-center gap-2 transition-transform ${
                  isActive
                    ? 'bg-[#111111] text-[#FFD100] border-3 border-black -translate-y-0.5'
                    : 'bg-white text-gray-800 hover:bg-amber-50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono border ${
                  isActive ? 'bg-[#E52521] text-white border-white' : 'bg-gray-100 text-gray-600 border-gray-300'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
