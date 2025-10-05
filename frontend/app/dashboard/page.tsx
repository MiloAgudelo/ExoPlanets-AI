"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FileUploader } from "@/components/exoplanet/file-uploader";
import {
  type Mission,
  MissionSelector,
} from "@/components/exoplanet/mission-selector";
import { PredictionsTable } from "@/components/exoplanet/PredictionsTable";
import { StatisticsCards } from "@/components/exoplanet/statistics-cards";
import { SpaceFooter } from "@/components/space/space-footer";
import { SpaceNavbar } from "@/components/space/SpaceNavbar";
import { apiClient, type PredictionResponse } from "@/lib/api-client";

export default function DashboardPage() {
  const [mission, setMission] = useState<Mission>("kepler");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.predictExoplanets(mission, selectedFile);
      setResults(response);
    } catch (err: any) {
      setError(err.message || "Error al analizar el archivo");
      console.error("Analysis error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SpaceNavbar />
      <main className="min-h-screen px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <div>
            <h1 className="mb-2 font-bold font-space-grotesk text-4xl">
              Análisis de Exoplanetas
            </h1>
            <p className="text-white/60">
              Sube un archivo CSV y selecciona una misión para descubrir
              exoplanetas
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-4 font-semibold text-xl">Seleccionar Misión</h2>
              <MissionSelector onSelect={setMission} selected={mission} />
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-xl">Subir Dataset</h2>
              <FileUploader onFileSelect={setSelectedFile} />
            </div>

            {selectedFile && (
              <div className="flex justify-center">
                <button
                  className="flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-medium transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={loading}
                  onClick={handleAnalyze}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    "Analizar Exoplanetas"
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="glass-card rounded-xl border-2 border-red-500/50 p-4">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            {results && (
              <div className="fade-in animate-in space-y-8 duration-500">
                <div>
                  <h2 className="mb-4 font-semibold text-2xl">Resultados</h2>
                  <StatisticsCards stats={results.statistics} />
                </div>

                <div>
                  <h2 className="mb-4 font-semibold text-2xl">
                    Todas las Predicciones ({results.total_objects})
                  </h2>
                  <PredictionsTable predictions={results.predictions} />
                </div>

                {results.top_exoplanets.length > 0 && (
                  <div>
                    <h2 className="mb-4 font-semibold text-2xl">
                      Top 10 Exoplanetas por Confianza
                    </h2>
                    <PredictionsTable predictions={results.top_exoplanets} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <SpaceFooter />
    </>
  );
}
