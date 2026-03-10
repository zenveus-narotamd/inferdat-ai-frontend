import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Document } from "@/types/ops";

interface DocumentTableProps {
  documents: Document[];
}

const statusConfig = {
  indexed: {
    icon: CheckCircle,
    text: "Indexed",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  processing: {
    icon: Clock,
    text: "Processing",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  failed: {
    icon: XCircle,
    text: "Failed",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
};

export const DocumentTable = ({ documents }: DocumentTableProps) => {
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
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-background-tertiary border-b border-border">
            <tr>
              <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-4 py-3">
                Document
              </th>
              <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-4 py-3">
                Size
              </th>
              <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-4 py-3">
                Status
              </th>
              <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-4 py-3">
                Uploaded
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {documents.map((doc, index) => {
              const config = statusConfig[doc.status];
              const StatusIcon = config.icon;

              return (
                <motion.tr
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="hover:bg-background-tertiary/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-text-tertiary shrink-0" />
                      <span className="text-sm text-text-primary font-medium truncate">
                        {doc.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-text-secondary">
                      {doc.size}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <StatusIcon className={cn("w-3.5 h-3.5", config.color)} />
                      <span className={cn("text-xs font-medium", config.color)}>
                        {config.text}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-text-tertiary">
                      {formatTime(doc.uploadedAt)}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
