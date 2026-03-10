'use client';

import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, File, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClearFile: () => void;
  disabled?: boolean;
}

export const FileUploadZone = ({
  onFileSelect,
  selectedFile,
  onClearFile,
  disabled = false,
}: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        onFileSelect(files[0]);
      }
    },
    [disabled, onFileSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        onFileSelect(files[0]);
      }
    },
    [onFileSelect]
  );

  return (
    <div>
      {!selectedFile ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'relative border-2 border-dashed rounded-2xl p-12 text-center transition-all',
            isDragging
              ? 'border-purple-primary bg-purple-primary/5'
              : 'border-border hover:border-purple-primary/50',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileInput}
            disabled={disabled}
            accept=".pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv"
          />
          <label
            htmlFor="file-upload"
            className={cn(
              'cursor-pointer',
              disabled && 'cursor-not-allowed'
            )}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-h5 font-semibold text-text-primary mb-2">
              {isDragging ? 'Drop your file here' : 'Drag and drop your file here'}
            </h3>
            <p className="text-body text-text-secondary mb-4">or</p>
            <span className="inline-block px-6 py-3 gradient-primary text-white rounded-full font-medium hover:shadow-purple transition-shadow">
              Browse Files
            </span>
            <p className="text-body-sm text-text-tertiary mt-6">
              Supported formats: PDF, DOC, DOCX, TXT, MD, XLS, XLSX, CSV
            </p>
            <p className="text-caption text-text-tertiary mt-2">
              Maximum file size: 50MB
            </p>
          </label>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background-secondary border border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-primary/10 flex items-center justify-center flex-shrink-0">
              <File className="w-6 h-6 text-purple-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body font-semibold text-text-primary truncate">
                {selectedFile.name}
              </p>
              <p className="text-body-sm text-text-secondary">
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
            <button
              onClick={onClearFile}
              disabled={disabled}
              className="w-8 h-8 rounded-lg hover:bg-background-tertiary flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5 text-text-tertiary" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
