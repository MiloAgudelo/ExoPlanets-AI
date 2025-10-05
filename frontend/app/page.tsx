import Link from "next/link";
import { SpaceFooter } from "@/components/space/space-footer";
import { SpaceNavbar } from "@/components/space/SpaceNavbar";

export default function HomePage() {
  return (
    <>
      <SpaceNavbar />
      <main className="flex min-h-screen items-center justify-center px-6 pt-40 pb-16">
        <div className="max-w-4xl space-y-8 text-center">
          <h1 className="font-bold font-space-grotesk text-6xl md:text-7xl">
            Descubre Exoplanetas con{" "}
            <span className="space-gradient bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-white/70 text-xl">
            Modelos avanzados de aprendizaje automático para detectar y
            clasificar exoplanetas de las misiones Kepler, TESS y K2.
          </p>

          <div className="flex justify-center gap-4 pt-8">
            <a
              className="rounded-lg bg-primary px-8 py-4 font-medium transition-colors hover:bg-primary/90"
              href="https://nasaspaceappschallenge.streamlit.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Comenzar Análisis
            </a>
            <Link
              className="glass-card glow-border px-8 py-4 font-medium transition-colors"
              href="/chat"
            >
              Asistente IA
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16">
            {[
              { mission: "Kepler", accuracy: "94%", planets: "2,800+" },
              { mission: "TESS", accuracy: "77%", planets: "400+" },
              { mission: "K2", accuracy: "97%", planets: "500+" },
            ].map((stat) => (
              <div className="glass-card glow-border p-6" key={stat.mission}>
                <div className="mb-2 font-bold text-3xl text-primary">
                  {stat.accuracy}
                </div>
                <div className="text-sm text-white/70">
                  Misión {stat.mission}
                </div>
                <div className="mt-1 text-white/50 text-xs">
                  {stat.planets} descubiertos
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SpaceFooter />
    </>
  );
}
