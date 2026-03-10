'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'purple' | 'emerald' | 'amber' | 'red';
}

const colorConfig = {
  purple: 'from-purple-primary to-pink-primary',
  emerald: 'from-emerald-500 to-emerald-600',
  amber: 'from-amber-500 to-amber-600',
  red: 'from-red-500 to-red-600',
};

export const MetricsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  color = 'purple',
}: MetricsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-background-secondary border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-body-sm text-text-secondary mb-2">{title}</p>
          <p className="text-h2 font-semibold text-text-primary mb-1">{value}</p>
          {trend && trendValue && (
            <p
              className={cn(
                'text-caption font-medium',
                trend === 'up' && 'text-emerald-500',
                trend === 'down' && 'text-red-500',
                trend === 'neutral' && 'text-text-tertiary'
              )}
            >
              {trendValue}
            </p>
          )}
        </div>
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br', colorConfig[color])}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};
