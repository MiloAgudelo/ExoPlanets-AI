'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/compare', label: 'Comparar Modelos' },
  { href: '/chat', label: 'Asistente IA' },
];

export function SpaceNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-card border border-white/10 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg space-gradient flex items-center justify-center">
              <span className="text-2xl font-bold">E</span>
            </div>
            <span className="font-space-grotesk text-xl font-bold group-hover:text-primary transition-colors">
              ExoPlanet - AI
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 text-sm font-medium bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

