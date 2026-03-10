import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickMetricCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: 'purple' | 'emerald' | 'amber' | 'sky';
  index: number;
}

const colorConfig = {
  purple: {
    bg: 'bg-purple-primary/10',
    text: 'text-purple-primary',
    border: 'border-purple-primary/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    border: 'border-emerald-500/20',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
    border: 'border-amber-500/20',
  },
  sky: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-500',
    border: 'border-sky-500/20',
  },
};

export const QuickMetricCard = ({ label, value, icon: Icon, color, index }: QuickMetricCardProps) => {
  const config = colorConfig[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'bg-white border rounded-xl p-4',
        config.border
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
          {label}
        </span>
        <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center', config.bg)}>
          <Icon className={cn('w-3.5 h-3.5', config.text)} />
        </div>
      </div>
      <div className={cn('text-2xl font-semibold', config.text)}>
        {value}
      </div>
    </motion.div>
  );
};
