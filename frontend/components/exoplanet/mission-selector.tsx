"use client";

import { useState } from "react";

export type Mission = "kepler" | "tess" | "k2";

interface MissionSelectorProps {
  onSelect: (mission: Mission) => void;
  selected: Mission;
}

const missions = [
  {
    id: "kepler" as Mission,
    name: "Kepler",
    accuracy: "94%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "tess" as Mission,
    name: "TESS",
    accuracy: "77%",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "k2" as Mission,
    name: "K2",
    accuracy: "97%",
    color: "from-teal-500 to-emerald-500",
  },
];

export function MissionSelector({ onSelect, selected }: MissionSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {missions.map((mission) => (
        <button
          className={`rounded-xl p-6 transition-all ${
            selected === mission.id
              ? "glass-card scale-105 border-2 border-primary"
              : "glass-card border border-white/10 hover:border-white/30"
          }`}
          key={mission.id}
          onClick={() => onSelect(mission.id)}
        >
          <div
            className={`bg-gradient-to-r font-bold text-2xl ${mission.color} bg-clip-text text-transparent`}
          >
            {mission.name}
          </div>
          <div className="mt-2 text-sm text-white/60">
            {mission.accuracy} Accuracy
          </div>
        </button>
      ))}
    </div>
  );
}
