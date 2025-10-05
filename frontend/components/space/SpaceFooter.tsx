'use client';

export function SpaceFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-white/70">
            © {currentYear} NoLit Developers - NASA Space Apps Challenge Chía 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
