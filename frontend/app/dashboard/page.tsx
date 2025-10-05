'use client';

import { useState } from 'react';
import { SpaceNavbar } from '@/components/space/SpaceNavbar';
import { MissionSelector, Mission } from '@/components/exoplanet/MissionSelector';
import { FileUploader } from '@/components/exoplanet/FileUploader';
import { StatisticsCards } from '@/components/exoplanet/StatisticsCards';
import { PredictionsTable } from '@/components/exoplanet/PredictionsTable';
import { apiClient, PredictionResponse } from '@/lib/api-client';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const [mission, setMission] = useState<Mission>('kepler');
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
      setError(err.message || 'Failed to analyze file');
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SpaceNavbar />
      <main className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-space-grotesk mb-2">
              Exoplanet Analysis
            </h1>
            <p className="text-white/60">
              Upload a CSV file and select a mission to discover exoplanets
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Mission</h2>
              <MissionSelector selected={mission} onSelect={setMission} />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Upload Dataset</h2>
              <FileUploader onFileSelect={setSelectedFile} />
            </div>

            {selectedFile && (
              <div className="flex justify-center">
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="px-8 py-4 bg-primary rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-3"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Exoplanets'
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="glass-card border-2 border-red-500/50 p-4 rounded-xl">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            {results && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Results</h2>
                  <StatisticsCards stats={results.statistics} />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    All Predictions ({results.total_objects})
                  </h2>
                  <PredictionsTable predictions={results.predictions} />
                </div>

                {results.top_exoplanets.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      Top 10 Exoplanets by Confidence
                    </h2>
                    <PredictionsTable predictions={results.top_exoplanets} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

