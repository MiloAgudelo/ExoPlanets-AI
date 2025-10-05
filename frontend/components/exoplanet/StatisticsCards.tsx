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
      label: 'Total Exoplanets',
      value: stats.exoplanets_total,
      color: 'from-purple-500 to-pink-500',
      percentage: ((stats.exoplanets_total / stats.total) * 100).toFixed(1),
    },
    {
      label: 'Confirmed',
      value: stats.confirmed,
      color: 'from-emerald-500 to-teal-500',
      percentage: ((stats.confirmed / stats.total) * 100).toFixed(1),
    },
    {
      label: 'Candidates',
      value: stats.candidate,
      color: 'from-blue-500 to-cyan-500',
      percentage: ((stats.candidate / stats.total) * 100).toFixed(1),
    },
    {
      label: 'False Positives',
      value: stats.false_positive,
      color: 'from-red-500 to-orange-500',
      percentage: ((stats.false_positive / stats.total) * 100).toFixed(1),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="glass-card p-6 glow-border">
          <div className="text-sm text-white/60 mb-2">{card.label}</div>
          <div className={`text-4xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
            {card.value}
          </div>
          <div className="text-xs text-white/40 mt-2">
            {card.percentage}% of total
          </div>
        </div>
      ))}
    </div>
  );
}

