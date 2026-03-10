'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MaintenanceWindow } from '@/types/health';

interface MaintenanceCardProps {
  maintenance: MaintenanceWindow;
  index?: number;
}

const statusConfig = {
  scheduled: {
    label: 'Scheduled',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  completed: {
    label: 'Completed',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
};

export const MaintenanceCard = ({ maintenance, index = 0 }: MaintenanceCardProps) => {
  const statusStyle = statusConfig[maintenance.status];

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
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
          <Wrench className="w-5 h-5 text-blue-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={cn(
                'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
                statusStyle.bg,
                statusStyle.border,
                statusStyle.color
              )}
            >
              {statusStyle.label}
            </span>
          </div>
          <h3 className="text-h5 font-semibold text-text-primary mb-2">
            {maintenance.title}
          </h3>
          <p className="text-body-sm text-text-secondary mb-4">
            {maintenance.description}
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-body-sm text-text-secondary">
              <Calendar className="w-4 h-4 text-text-tertiary" />
              <span>
                {formatDate(maintenance.scheduledStart)} - {formatDate(maintenance.scheduledEnd)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-body-sm text-text-secondary">
              <Clock className="w-4 h-4 text-text-tertiary" />
              <span>Duration: {calculateDuration(maintenance.scheduledStart, maintenance.scheduledEnd)}</span>
            </div>
          </div>

          {maintenance.affectedServices.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-caption text-text-tertiary mb-2">Affected Services</p>
              <div className="flex flex-wrap gap-2">
                {maintenance.affectedServices.map((service) => (
                  <span
                    key={service}
                    className="px-2.5 py-1 bg-background-tertiary rounded-full text-xs text-text-secondary"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function calculateDuration(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  }
  return `${diffMinutes}m`;
}
