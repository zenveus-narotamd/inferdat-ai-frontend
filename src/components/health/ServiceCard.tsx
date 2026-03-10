'use client';

import { motion } from 'framer-motion';
import { StatusBadge } from './StatusBadge';
import type { Service } from '@/types/health';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
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
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-h5 font-semibold text-text-primary mb-1">
            {service.name}
          </h3>
          <p className="text-body-sm text-text-secondary">
            {service.description}
          </p>
        </div>
        <StatusBadge status={service.status} size="sm" showLabel={false} />
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="text-caption text-text-tertiary mb-1">Uptime</p>
          <p className="text-body font-semibold text-text-primary">
            {service.uptime}%
          </p>
        </div>
        {service.lastIncident && (
          <div className="text-right">
            <p className="text-caption text-text-tertiary mb-1">Last Incident</p>
            <p className="text-body-sm text-text-secondary">
              {formatRelativeTime(service.lastIncident)}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}d ago`;
  }
  if (diffHours > 0) {
    return `${diffHours}h ago`;
  }
  return 'Just now';
}
