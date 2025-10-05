"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { PredictionResult } from "@/lib/api-client";

interface PredictionsTableProps {
  predictions: PredictionResult[];
}

export function PredictionsTable({ predictions }: PredictionsTableProps) {
  const [sortBy, setSortBy] = useState<"confidence" | "index">("confidence");
  const [sortDesc, setSortDesc] = useState(true);

  const sortedPredictions = [...predictions].sort((a, b) => {
    if (sortBy === "confidence") {
      return sortDesc
        ? b.max_confidence - a.max_confidence
        : a.max_confidence - b.max_confidence;
    }
    return sortDesc ? b.index - a.index : a.index - b.index;
  });

  const toggleSort = (column: "confidence" | "index") => {
    if (sortBy === column) {
      setSortDesc(!sortDesc);
    } else {
      setSortBy(column);
      setSortDesc(true);
    }
  };

  const getPredictionColor = (code: number) => {
    switch (code) {
      case 2:
        return "text-emerald-400";
      case 1:
        return "text-blue-400";
      default:
        return "text-red-400";
    }
  };

  return (
    <div className="glass-card overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-white/10 border-b bg-white/5">
            <tr>
              <th
                className="cursor-pointer px-6 py-4 text-left font-semibold text-sm text-white/80 hover:text-white"
                onClick={() => toggleSort("index")}
              >
                <div className="flex items-center gap-2">
                  Index
                  {sortBy === "index" &&
                    (sortDesc ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronUp className="h-4 w-4" />
                    ))}
                </div>
              </th>
              <th className="px-6 py-4 text-left font-semibold text-sm text-white/80">
                Classification
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left font-semibold text-sm text-white/80 hover:text-white"
                onClick={() => toggleSort("confidence")}
              >
                <div className="flex items-center gap-2">
                  Confidence
                  {sortBy === "confidence" &&
                    (sortDesc ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronUp className="h-4 w-4" />
                    ))}
                </div>
              </th>
              <th className="px-6 py-4 text-left font-semibold text-sm text-white/80">
                Probabilities
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {sortedPredictions.slice(0, 50).map((pred) => (
              <tr
                className="transition-colors hover:bg-white/5"
                key={pred.index}
              >
                <td className="px-6 py-4 text-sm text-white/70">
                  {pred.index}
                </td>
                <td
                  className={`px-6 py-4 font-medium text-sm ${getPredictionColor(pred.prediction_code)}`}
                >
                  {pred.prediction}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                        style={{ width: `${pred.max_confidence * 100}%` }}
                      />
                    </div>
                    <span className="min-w-[3rem] text-sm text-white/70">
                      {(pred.max_confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2 text-xs">
                    <span className="text-emerald-400">
                      C: {(pred.prob_confirmed * 100).toFixed(0)}%
                    </span>
                    <span className="text-blue-400">
                      Ca: {(pred.prob_candidate * 100).toFixed(0)}%
                    </span>
                    <span className="text-red-400">
                      FP: {(pred.prob_false_positive * 100).toFixed(0)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {predictions.length > 50 && (
        <div className="border-white/10 border-t p-4 text-center text-sm text-white/60">
          Showing 50 of {predictions.length} predictions
        </div>
      )}
    </div>
  );
}
