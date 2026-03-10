'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Incident } from '@/types/health';

interface IncidentCardProps {
  incident: Incident;
  index?: number;
}

const severityConfig = {
  critical: {
    label: 'Critical',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  major: {
    label: 'Major',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  minor: {
    label: 'Minor',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
};

const statusConfig = {
  investigating: { label: 'Investigating', color: 'text-amber-500' },
  identified: { label: 'Identified', color: 'text-blue-500' },
  monitoring: { label: 'Monitoring', color: 'text-purple-primary' },
  resolved: { label: 'Resolved', color: 'text-emerald-500' },
};

export const IncidentCard = ({ incident, index = 0 }: IncidentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const severityStyle = severityConfig[incident.severity];
  const statusStyle = statusConfig[incident.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-background-secondary border border-border rounded-2xl overflow-hidden"
    >
      <div
        className="p-6 cursor-pointer hover:bg-background-tertiary transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
                  severityStyle.bg,
                  severityStyle.border,
                  severityStyle.color
                )}
              >
                <AlertTriangle className="w-3 h-3" />
                {severityStyle.label}
              </span>
              <span className={cn('text-sm font-medium', statusStyle.color)}>
                {statusStyle.label}
              </span>
            </div>
            <h3 className="text-h5 font-semibold text-text-primary mb-2">
              {incident.title}
            </h3>
            <p className="text-body-sm text-text-secondary mb-3">
              {incident.description}
            </p>
            <div className="flex items-center gap-4 text-caption text-text-tertiary">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatDateTime(incident.startTime)}</span>
              </div>
              {incident.affectedServices.length > 0 && (
                <span>
                  {incident.affectedServices.length} service
                  {incident.affectedServices.length > 1 ? 's' : ''} affected
                </span>
              )}
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-text-tertiary" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border"
          >
            <div className="p-6 bg-background-tertiary">
              <h4 className="text-body font-semibold text-text-primary mb-4">
                Incident Timeline
              </h4>
              <div className="space-y-4">
                {incident.updates.map((update, idx) => (
                  <div key={update.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full',
                          idx === 0 ? 'bg-purple-primary' : 'bg-border'
                        )}
                      />
                      {idx < incident.updates.length - 1 && (
                        <div className="w-px h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn('text-sm font-medium', statusStyle.color)}>
                          {statusConfig[update.status].label}
                        </span>
                        <span className="text-caption text-text-tertiary">
                          {formatDateTime(update.timestamp)}
                        </span>
                      </div>
                      <p className="text-body-sm text-text-secondary">
                        {update.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
