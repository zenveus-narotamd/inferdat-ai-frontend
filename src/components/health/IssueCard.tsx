import { motion } from "framer-motion";
import {
  ShieldAlert,
  MessageSquareWarning,
  ShieldX,
  SearchX,
  Clock,
  FileX,
  AlertTriangle,
  Circle,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Issue } from "@/types/ops";

interface IssueCardProps {
  issue: Issue;
  index: number;
}

const issueTypeConfig = {
  guardrail_failure: {
    icon: ShieldAlert,
    label: "Guardrail Failure",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  profanity_detected: {
    icon: MessageSquareWarning,
    label: "Profanity Detected",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  pii_leak: {
    icon: ShieldX,
    label: "PII Leak",
    color: "text-red-600",
    bg: "bg-red-600/10",
    border: "border-red-600/20",
  },
  retrieval_error: {
    icon: SearchX,
    label: "Retrieval Error",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  model_timeout: {
    icon: Clock,
    label: "Model Timeout",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  ingestion_failure: {
    icon: FileX,
    label: "Ingestion Failure",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  policy_violation: {
    icon: AlertTriangle,
    label: "Policy Violation",
    color: "text-amber-600",
    bg: "bg-amber-600/10",
    border: "border-amber-600/20",
  },
};

const statusConfig = {
  open: {
    icon: Circle,
    label: "Open",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  in_progress: {
    icon: CircleDot,
    label: "In Progress",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  resolved: {
    icon: CheckCircle2,
    label: "Resolved",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
};

const severityConfig = {
  low: {
    label: "Low",
    color: "text-sky-600",
    bg: "bg-sky-600/10",
  },
  medium: {
    label: "Medium",
    color: "text-amber-600",
    bg: "bg-amber-600/10",
  },
  high: {
    label: "High",
    color: "text-orange-600",
    bg: "bg-orange-600/10",
  },
  critical: {
    label: "Critical",
    color: "text-red-600",
    bg: "bg-red-600/10",
  },
};

export const IssueCard = ({ issue, index }: IssueCardProps) => {
  const typeConfig = issueTypeConfig[issue.type];
  const statusCfg = statusConfig[issue.status];
  const severityCfg = severityConfig[issue.severity];
  const TypeIcon = typeConfig.icon;
  const StatusIcon = statusCfg.icon;

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "bg-white border rounded-xl p-4 transition-all duration-200",
        "hover:shadow-md hover:-translate-y-0.5",
        typeConfig.border,
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={cn(
            "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
            typeConfig.bg,
          )}
        >
          <TypeIcon className={cn("w-4.5 h-4.5", typeConfig.color)} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-semibold text-text-primary">
              {issue.title}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0">
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full",
                  statusCfg.bg,
                  statusCfg.color,
                )}
              >
                <StatusIcon className="w-3 h-3" />
                {statusCfg.label}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary mb-3">
            {issue.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Type Badge */}
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md",
                typeConfig.bg,
                typeConfig.color,
              )}
            >
              {typeConfig.label}
            </span>

            {/* Severity Badge */}
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md",
                severityCfg.bg,
                severityCfg.color,
              )}
            >
              {severityCfg.label}
            </span>

            {/* Component */}
            {issue.affectedComponent && (
              <span className="text-xs text-text-tertiary">
                • {issue.affectedComponent}
              </span>
            )}

            {/* Time */}
            <span className="text-xs text-text-tertiary ml-auto">
              {formatTime(issue.updatedAt)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
