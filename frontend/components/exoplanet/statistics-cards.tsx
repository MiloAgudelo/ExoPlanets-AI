interface Statistics {
  total: number;
  confirmed: number;
  candidate: number;
  false_positive: number;
  exoplanets_total: number;
}

interface StatisticsCardsProps {
  stats: Statistics;
}

export function StatisticsCards({ stats }: StatisticsCardsProps) {
  const cards = [
    {
      label: "Total Exoplanets",
      value: stats.exoplanets_total,
      color: "from-purple-500 to-pink-500",
      percentage: ((stats.exoplanets_total / stats.total) * 100).toFixed(1),
    },
    {
      label: "Confirmed",
      value: stats.confirmed,
      color: "from-emerald-500 to-teal-500",
      percentage: ((stats.confirmed / stats.total) * 100).toFixed(1),
    },
    {
      label: "Candidates",
      value: stats.candidate,
      color: "from-blue-500 to-cyan-500",
      percentage: ((stats.candidate / stats.total) * 100).toFixed(1),
    },
    {
      label: "False Positives",
      value: stats.false_positive,
      color: "from-red-500 to-orange-500",
      percentage: ((stats.false_positive / stats.total) * 100).toFixed(1),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div className="glass-card glow-border p-6" key={card.label}>
          <div className="mb-2 text-sm text-white/60">{card.label}</div>
          <div
            className={`bg-gradient-to-r font-bold text-4xl ${card.color} bg-clip-text text-transparent`}
          >
            {card.value}
          </div>
          <div className="mt-2 text-white/40 text-xs">
            {card.percentage}% of total
          </div>
        </div>
      ))}
    </div>
  );
}
