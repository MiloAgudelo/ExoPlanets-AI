'use client';

import { useState, useCallback } from 'react';
import { Upload, File as FileIcon, X } from 'lucide-react';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export function FileUploader({ onFileSelect }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
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
    if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
      setSelectedFile(file);
      onFileSelect(file);
    } else {
      alert('Please upload a CSV file');
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <div
      className={`relative glass-card border-2 border-dashed rounded-xl p-12 text-center transition-all ${
        dragActive
          ? 'border-primary bg-primary/5'
          : 'border-white/20 hover:border-white/40'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />

      {selectedFile ? (
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <FileIcon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-white">{selectedFile.name}</p>
            <p className="text-sm text-white/60 mt-1">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <button
            onClick={clearFile}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
            Remove
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5">
            <Upload className="w-8 h-8 text-white/40" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">
              Drop your CSV file here
            </p>
            <p className="text-sm text-white/60 mt-2">
              or click to browse
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

