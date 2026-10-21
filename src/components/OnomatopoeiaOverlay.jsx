import React from 'react';

export function OnomatopoeiaOverlay({ burst }) {
  if (!burst) return null;

  const colors = [
    'bg-[#FFD100] text-black border-black',
    'bg-[#E52521] text-white border-black',
    'bg-[#008752] text-white border-black',
    'bg-[#0070BA] text-white border-black',
  ];

  const colorClass = colors[burst.colorIndex % colors.length];

  return (
    <div
      className="fixed pointer-events-none z-50 animate-pop-in"
      style={{
        left: burst.x,
        top: burst.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`${colorClass} font-bangers text-2xl sm:text-4xl px-4 py-2 border-4 comic-shadow-lg rounded-lg rotate-[${burst.rotation || -6}deg] flex items-center gap-2 whitespace-nowrap`}
      >
        <span>⚡</span>
        <span className="tracking-widest">{burst.text}</span>
        <span>💥</span>
      </div>
    </div>
  );
}
