"use client";

import { File as FileIcon, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export function FileUploader({ onFileSelect }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (file.type === "text/csv" || file.name.endsWith(".csv")) {
      setSelectedFile(file);
      onFileSelect(file);
    } else {
      alert("Please upload a CSV file");
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <div
      className={`glass-card relative rounded-xl border-2 border-dashed p-12 text-center transition-all ${
        dragActive
          ? "border-primary bg-primary/5"
          : "border-white/20 hover:border-white/40"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        accept=".csv"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        onChange={handleChange}
        type="file"
      />

      {selectedFile ? (
        <div className="space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <FileIcon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-white">{selectedFile.name}</p>
            <p className="mt-1 text-sm text-white/60">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <button
            className="glass-card inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:bg-white/10"
            onClick={clearFile}
          >
            <X className="h-4 w-4" />
            Remove
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
            <Upload className="h-8 w-8 text-white/40" />
          </div>
          <div>
            <p className="font-semibold text-lg text-white">
              Drop your CSV file here
            </p>
            <p className="mt-2 text-sm text-white/60">or click to browse</p>
          </div>
        </div>
      )}
    </div>
  );
}
