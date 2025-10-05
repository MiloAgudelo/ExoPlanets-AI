import { SpaceNavbar } from '@/components/space/SpaceNavbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <SpaceNavbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold font-space-grotesk">
            Discover Exoplanets with{' '}
            <span className="bg-clip-text text-transparent space-gradient">
              AI Power
            </span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Advanced machine learning models for detecting and classifying 
            exoplanets from Kepler, TESS, and K2 missions.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-primary rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Analyzing
            </Link>
            <Link
              href="/chat"
              className="px-8 py-4 glass-card glow-border font-medium transition-colors"
            >
              AI Assistant
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16">
            {[
              { mission: 'Kepler', accuracy: '94%', planets: '2,800+' },
              { mission: 'TESS', accuracy: '77%', planets: '400+' },
              { mission: 'K2', accuracy: '97%', planets: '500+' },
            ].map((stat) => (
              <div key={stat.mission} className="glass-card p-6 glow-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.accuracy}
                </div>
                <div className="text-sm text-white/70">{stat.mission} Mission</div>
                <div className="text-xs text-white/50 mt-1">
                  {stat.planets} discovered
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

