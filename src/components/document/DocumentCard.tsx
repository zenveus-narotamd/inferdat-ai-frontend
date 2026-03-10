'use client';

import { motion } from 'framer-motion';
import { File, Trash2, CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { UploadedDocument } from '@/types/document';
import { ROLE_LABELS } from '@/types/document';

interface DocumentCardProps {
  document: UploadedDocument;
  onDelete: (id: string) => void;
  index?: number;
}

const statusConfig = {
  uploading: {
    icon: Loader2,
    label: 'Uploading',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    animate: true,
  },
  processing: {
    icon: Clock,
    label: 'Processing',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    animate: true,
  },
  ready: {
    icon: CheckCircle,
    label: 'Ready',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    animate: false,
  },
  failed: {
    icon: AlertCircle,
    label: 'Failed',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    animate: false,
  },
};

export const DocumentCard = ({ document, onDelete, index = 0 }: DocumentCardProps) => {
  const statusStyle = statusConfig[document.status];
  const StatusIcon = statusStyle.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-background-secondary border border-border rounded-2xl p-6 hover:shadow-lg hover:border-purple-primary/30 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-primary/10 flex items-center justify-center flex-shrink-0">
          <File className="w-6 h-6 text-purple-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-body font-semibold text-text-primary truncate pr-4">
              {document.name}
            </h3>
            <button
              onClick={() => onDelete(document.id)}
              className="w-8 h-8 rounded-lg hover:bg-red-500/10 flex items-center justify-center transition-colors flex-shrink-0"
              title="Delete document"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
                statusStyle.bg,
                statusStyle.color
              )}
            >
              <StatusIcon
                className={cn('w-3 h-3', statusStyle.animate && 'animate-spin')}
              />
              {statusStyle.label}
            </span>
            <span className="px-2.5 py-1 bg-background-tertiary rounded-full text-xs text-text-secondary">
              {ROLE_LABELS[document.role]}
            </span>
          </div>

          {document.description && (
            <p className="text-body-sm text-text-secondary mb-3">
              {document.description}
            </p>
          )}

          {document.tags && document.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {document.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-purple-primary/10 text-purple-primary rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-4 text-caption text-text-tertiary">
              <span>{formatFileSize(document.size)}</span>
              <span>•</span>
              <span>{formatRelativeTime(document.uploadedAt)}</span>
              <span>•</span>
              <span>{document.uploadedBy}</span>
            </div>
            {document.knowledgeBaseId && (
              <span className="text-caption text-text-tertiary font-mono">
                {document.knowledgeBaseId}
              </span>
            )}
          </div>

          {document.status === 'failed' && document.errorMessage && (
            <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-body-sm text-red-500">{document.errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}d ago`;
  }
  if (diffHours > 0) {
    return `${diffHours}h ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes}m ago`;
  }
  return 'Just now';
}
