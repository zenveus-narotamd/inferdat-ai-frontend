import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentStatus } from '@/types/ops';

interface SystemHealthCardProps {
  name: string;
  status: ComponentStatus;
  uptime: number;
  icon: LucideIcon;
  index: number;
}

const statusConfig = {
  operational: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-500',
    dot: 'bg-emerald-500',
  },
  degraded: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
    dot: 'bg-amber-500',
  },
  down: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    text: 'text-red-500',
    dot: 'bg-red-500',
  },
};

export const SystemHealthCard = ({ name, status, uptime, icon: Icon, index }: SystemHealthCardProps) => {
  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'bg-white border rounded-xl p-4 transition-all duration-200',
        'hover:shadow-md hover:-translate-y-0.5',
        config.border
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center', config.bg)}>
          <Icon className={cn('w-4.5 h-4.5', config.text)} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className={cn('w-1.5 h-1.5 rounded-full', config.dot)} />
          <span className={cn('text-xs font-medium capitalize', config.text)}>
            {status}
          </span>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-text-primary mb-1">{name}</h3>
      <p className="text-xs text-text-tertiary">Uptime: {uptime}%</p>
    </motion.div>
  );
};
