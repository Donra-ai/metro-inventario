import React, { useState } from 'react';
import { METRO_STATIONS } from './data/metroData';
import { ComicHeader } from './components/ComicHeader';
import { ComicStationMap } from './components/ComicStationMap';
import { EmergencyInventoryPanel } from './components/EmergencyInventoryPanel';
import { LocativeDetailsPanel } from './components/LocativeDetailsPanel';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { AccessAndCivicaPanel } from './components/AccessAndCivicaPanel';
import { ComicDialogueModal } from './components/ComicDialogueModal';
import { OnomatopoeiaOverlay } from './components/OnomatopoeiaOverlay';
import { CulturaMetroPanel } from './components/CulturaMetroPanel';
import { playComicSuccess, playComicClick, playComicPop } from './utils/audioFX';
import { Train, Sparkles, AlertCircle, Heart, Shield } from 'lucide-react';

export function App() {
  const [stations] = useState(METRO_STATIONS);
  const [currentStationId, setCurrentStationId] = useState('san-antonio');
  const [activeTab, setActiveTab] = useState('inventory');
  const [soundOn, setSoundOn] = useState(true);

  // Dynamic inventory verification state per station
  const [stationInventories, setStationInventories] = useState(() => {
    const initialMap = {};
    METRO_STATIONS.forEach((st) => {
      initialMap[st.id] = [...st.emergencyInventory];
    });
    return initialMap;
  });

  // Modal inspection dialog
  const [selectedItem, setSelectedItem] = useState(null);

  // Onomatopoeia burst state
  const [burst, setBurst] = useState(null);

  const currentStation = stations.find((s) => s.id === currentStationId) || stations[0];
  const currentInventory = stationInventories[currentStationId] || [];

  const triggerOnomatopoeia = (text, x, y) => {
    const burstData = {
      text,
      x: x || window.innerWidth / 2,
      y: y || window.innerHeight / 2,
      colorIndex: Math.floor(Math.random() * 4),
      rotation: Math.floor(Math.random() * 16) - 8,
    };
    setBurst(burstData);
    setTimeout(() => {
      setBurst(null);
    }, 1200);
  };

  const handleVerifyItem = (itemId) => {
    setStationInventories((prev) => {
      const updated = prev[currentStationId].map((item) =>
        item.id === itemId ? { ...item, verified: true } : item
      );
      return { ...prev, [currentStationId]: updated };
    });

    if (selectedItem && selectedItem.id === itemId) {
      setSelectedItem((prev) => ({ ...prev, verified: true }));
    }
  };

  const handleVerifyAll = () => {
    setStationInventories((prev) => {
      const updated = prev[currentStationId].map((item) => ({ ...item, verified: true }));
      return { ...prev, [currentStationId]: updated };
    });

    if (selectedItem) {
      setSelectedItem((prev) => ({ ...prev, verified: true }));
    }
  };

  // Header quick statistics calculation
  const verifiedCount = currentInventory.filter((i) => i.verified).length;
  const totalItems = currentInventory.length;
  const percentage = Math.round((verifiedCount / totalItems) * 100) || 0;
  const roomsCount = currentStation.technicalRooms.length;
  const totalTurnstiles = currentStation.accesses.reduce((acc, curr) => acc + curr.totalTurnstiles, 0);

  const stats = {
    verifiedCount,
    totalItems,
    percentage,
    roomsCount,
    totalTurnstiles,
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#FFD100] selection:text-black">
      {/* Floating Onomatopoeia Burst */}
      <OnomatopoeiaOverlay burst={burst} />

      {/* Main Comic Header */}
      <ComicHeader
        stations={stations}
        currentStation={currentStation}
        onSelectStation={(st) => setCurrentStationId(st.id)}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
      />

      {/* Hero Station Banner with Comic Speech Character */}
      <main className="max-w-7xl mx-auto px-4 py-6 w-full flex-1">
        {/* Comic Banner Panel */}
        <div className="relative bg-[#FFFDF0] border-4 border-black comic-shadow-lg rounded-2xl p-4 sm:p-6 mb-8 overflow-hidden">
          {/* Halftone Accents */}
          <div 
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 pointer-events-none"
            style={{
              backgroundColor: currentStation.accentColor,
              backgroundImage: 'radial-gradient(#111 2px, transparent 2px)',
              backgroundSize: '12px 12px'
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Inspector Avatar with Speaking Animation */}
            <div className="flex flex-col items-center shrink-0">
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black comic-shadow flex items-center justify-center animate-comic-bounce"
                style={{ backgroundColor: currentStation.accentColor }}
              >
                <Train className="w-12 h-12 text-[#FFD100]" />
              </div>
              <span className="mt-2 text-xs font-bangers text-[#111111] bg-[#FFD100] px-2 py-0.5 border border-black rounded">
                {currentStation.lineBadge}
              </span>
            </div>

            {/* Speech Dialogue Box */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                <span className="bg-[#111111] text-[#FFD100] text-xs font-bangers px-2.5 py-0.5 border border-black uppercase tracking-wider">
                  ESTACIÓN: {currentStation.name.toUpperCase()}
                </span>
                <span className="bg-[#008752] text-white text-xs font-bangers px-2.5 py-0.5 border border-black">
                  {currentStation.type}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bangers text-[#111111] leading-tight mb-2">
                "{currentStation.heroTagline}"
              </h2>
              <div className="bg-white border-2 border-black p-3 rounded-xl comic-shadow-sm">
                <p className="text-xs sm:text-sm font-comic text-gray-800 leading-relaxed italic">
                  "{currentStation.heroSpeech}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'inventory' && (
          <EmergencyInventoryPanel
            station={currentStation}
            inventory={currentInventory}
            onVerifyItem={handleVerifyItem}
            onVerifyAll={handleVerifyAll}
            onSelectItem={setSelectedItem}
            triggerOnomatopoeia={triggerOnomatopoeia}
          />
        )}

        {activeTab === 'map' && (
          <ComicStationMap
            station={{ ...currentStation, emergencyInventory: currentInventory }}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'locative' && (
          <LocativeDetailsPanel
            station={currentStation}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'accessibility' && (
          <AccessibilityPanel
            station={currentStation}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'accesses' && (
          <AccessAndCivicaPanel
            station={currentStation}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'cultura' && (
          <CulturaMetroPanel
            onSelectItem={setSelectedItem}
          />
        )}
      </main>

      {/* Modal Inspector Viñeta */}
      <ComicDialogueModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onVerify={handleVerifyItem}
      />

      {/* Comic Footer Strip */}
      <footer className="w-full bg-[#111111] border-t-4 border-black text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 bg-[#FFD100] border-2 border-black rounded-lg flex items-center justify-center font-bangers text-black text-xl">
              M
            </div>
            <div>
              <p className="text-sm font-bangers tracking-wider text-[#FFD100]">
                SISTEMA INTEGRADO DE TRANSPORTE DEL VALLE DE ABURRÁ // METRO DE MEDELLÍN
              </p>
              <p className="text-xs font-comic text-gray-400">
                Metro Inventario // Sistema de Auditoría, Emergencias, Accesibilidad & Torniquetes Cívica
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-bangers text-gray-300">
            <span className="flex items-center gap-1 text-[#008752] bg-white px-2 py-1 rounded border border-black">
              <Shield className="w-3.5 h-3.5 text-[#008752]" />
              SEGURIDAD 100% OPERATIVA
            </span>
            <span className="bg-[#E52521] text-white px-2 py-1 rounded border border-black">
              CULTURA METRO
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
