export type ComponentStatus = "operational" | "degraded" | "down";

export type IssueStatus = "open" | "in_progress" | "resolved";

export type IssueType =
  | "guardrail_failure"
  | "profanity_detected"
  | "pii_leak"
  | "retrieval_error"
  | "model_timeout"
  | "ingestion_failure"
  | "policy_violation";

export interface Issue {
  id: string;
  type: IssueType;
  title: string;
  description: string;
  status: IssueStatus;
  severity: "low" | "medium" | "high" | "critical";
  createdAt: Date;
  updatedAt: Date;
  affectedComponent?: string;
}

export interface SystemComponent {
  id: string;
  name: string;
  status: ComponentStatus;
  uptime: number;
  lastCheck: Date;
}

export interface QueryMetric {
  timestamp: Date;
  count: number;
}

export interface TopQuestion {
  question: string;
  count: number;
  avgResponseTime: number;
}

export interface Document {
  id: string;
  name: string;
  uploadedAt: Date;
  status: "indexed" | "processing" | "failed";
  size: string;
}

export interface GuardrailEvent {
  id: string;
  type:
    | "blocked_query"
    | "pii_redaction"
    | "policy_violation"
    | "unsafe_prompt";
  timestamp: Date;
  details: string;
}

export interface SystemMetrics {
  activeConversations: number;
  totalQueries: number;
  successRate: number;
  avgResponseTime: number;
  totalDocuments: number;
  documentsProcessing: number;
  failedIngestions: number;
  blockedQueries: number;
  piiRedactions: number;
  retrievalLatency: number;
  modelLatency: number;
  kbHitRate: number;
  openIssues: number;
  inProgressIssues: number;
  resolvedIssues: number;
}
