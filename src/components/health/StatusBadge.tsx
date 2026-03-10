import { CheckCircle, AlertCircle, XCircle, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceStatus } from '@/types/health';

interface StatusBadgeProps {
  status: ServiceStatus;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const statusConfig = {
  operational: {
    label: 'Operational',
    icon: CheckCircle,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  degraded: {
    label: 'Degraded',
    icon: AlertCircle,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  outage: {
    label: 'Outage',
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  maintenance: {
    label: 'Maintenance',
    icon: Wrench,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
};

const sizeConfig = {
  sm: {
    container: 'px-2.5 py-1 text-xs',
    icon: 'w-3 h-3',
  },
  md: {
    container: 'px-3 py-1.5 text-sm',
    icon: 'w-4 h-4',
  },
  lg: {
    container: 'px-4 py-2 text-base',
    icon: 'w-5 h-5',
  },
};

export const StatusBadge = ({ status, size = 'md', showLabel = true }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  const sizeStyles = sizeConfig[size];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border font-medium',
        config.bg,
        config.border,
        config.color,
        sizeStyles.container
      )}
    >
      <Icon className={sizeStyles.icon} />
      {showLabel && <span>{config.label}</span>}
    </div>
  );
};
