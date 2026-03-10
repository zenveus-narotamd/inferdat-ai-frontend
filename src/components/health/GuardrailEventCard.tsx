import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, AlertTriangle, ShieldX } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GuardrailEvent } from '@/types/ops';

interface GuardrailEventCardProps {
  event: GuardrailEvent;
  index: number;
}

const eventConfig = {
  blocked_query: {
    icon: ShieldX,
    label: 'Blocked Query',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  pii_redaction: {
    icon: ShieldCheck,
    label: 'PII Redaction',
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  policy_violation: {
    icon: AlertTriangle,
    label: 'Policy Violation',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  unsafe_prompt: {
    icon: ShieldAlert,
    label: 'Unsafe Prompt',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
};

export const GuardrailEventCard = ({ event, index }: GuardrailEventCardProps) => {
  const config = eventConfig[event.type];
  const Icon = config.icon;

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'bg-white border rounded-lg p-3 flex items-start gap-3',
        config.border
      )}
    >
      <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', config.bg)}>
        <Icon className={cn('w-4 h-4', config.color)} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className={cn('text-xs font-semibold', config.color)}>
            {config.label}
          </span>
          <span className="text-xs text-text-tertiary shrink-0">
            {formatTime(event.timestamp)}
          </span>
        </div>
        <p className="text-sm text-text-secondary">{event.details}</p>
      </div>
    </motion.div>
  );
};
