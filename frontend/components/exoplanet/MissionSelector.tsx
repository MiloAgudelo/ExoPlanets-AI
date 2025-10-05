'use client';

import { useState } from 'react';

export type Mission = 'kepler' | 'tess' | 'k2';

interface MissionSelectorProps {
  onSelect: (mission: Mission) => void;
  selected: Mission;
}

const missions = [
  {
    id: 'kepler' as Mission,
    name: 'Kepler',
    accuracy: '94%',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tess' as Mission,
    name: 'TESS',
    accuracy: '77%',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'k2' as Mission,
    name: 'K2',
    accuracy: '97%',
    color: 'from-teal-500 to-emerald-500',
  },
];

export function MissionSelector({ onSelect, selected }: MissionSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {missions.map((mission) => (
        <button
          key={mission.id}
          onClick={() => onSelect(mission.id)}
          className={`p-6 rounded-xl transition-all ${
            selected === mission.id
              ? 'glass-card border-2 border-primary scale-105'
              : 'glass-card border border-white/10 hover:border-white/30'
          }`}
        >
          <div className={`text-2xl font-bold bg-gradient-to-r ${mission.color} bg-clip-text text-transparent`}>
            {mission.name}
          </div>
          <div className="text-sm text-white/60 mt-2">
            {mission.accuracy} Accuracy
          </div>
        </button>
      ))}
    </div>
  );
}

