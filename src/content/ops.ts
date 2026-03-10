import type {
  SystemComponent,
  TopQuestion,
  Document,
  GuardrailEvent,
  SystemMetrics,
  Issue,
} from "@/types/ops";

export const opsContent = {
  title: "Operations Dashboard",
  subtitle: "Monitor AI assistant performance and system health",
};

// Mock system metrics
export const mockSystemMetrics: SystemMetrics = {
  activeConversations: 24,
  totalQueries: 1847,
  successRate: 98.5,
  avgResponseTime: 1.2,
  totalDocuments: 342,
  documentsProcessing: 3,
  failedIngestions: 2,
  blockedQueries: 12,
  piiRedactions: 8,
  retrievalLatency: 0.3,
  modelLatency: 0.9,
  kbHitRate: 94.2,
  openIssues: 5,
  inProgressIssues: 3,
  resolvedIssues: 28,
};

// Mock system components
export const mockComponents: SystemComponent[] = [
  {
    id: "agent",
    name: "Bedrock Agent",
    status: "operational",
    uptime: 99.98,
    lastCheck: new Date(),
  },
  {
    id: "knowledge-base",
    name: "Knowledge Base",
    status: "operational",
    uptime: 99.95,
    lastCheck: new Date(),
  },
  {
    id: "guardrails",
    name: "Guardrails",
    status: "operational",
    uptime: 99.99,
    lastCheck: new Date(),
  },
  {
    id: "document-pipeline",
    name: "Document Pipeline",
    status: "degraded",
    uptime: 98.5,
    lastCheck: new Date(),
  },
];

// Mock query metrics (last 24 hours)
export const mockQueryMetrics: { timestamp: Date; count: number }[] =
  Array.from({ length: 24 }, (_, i) => ({
    timestamp: new Date(Date.now() - (23 - i) * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 50) + 30,
  }));

// Mock top questions
export const mockTopQuestions: TopQuestion[] = [
  {
    question: "What are the compliance requirements for data retention?",
    count: 45,
    avgResponseTime: 1.1,
  },
  {
    question: "How do I configure multi-factor authentication?",
    count: 38,
    avgResponseTime: 0.9,
  },
  {
    question: "What is the process for onboarding new employees?",
    count: 32,
    avgResponseTime: 1.3,
  },
  {
    question: "Where can I find the security policy documentation?",
    count: 28,
    avgResponseTime: 0.8,
  },
  {
    question: "How do I request access to internal systems?",
    count: 24,
    avgResponseTime: 1.0,
  },
];

// Mock recent documents
export const mockRecentDocuments: Document[] = [
  {
    id: "doc-1",
    name: "Employee_Handbook_2024.pdf",
    uploadedAt: new Date(Date.now() - 10 * 60 * 1000),
    status: "indexed",
    size: "2.4 MB",
  },
  {
    id: "doc-2",
    name: "Security_Policy_v3.docx",
    uploadedAt: new Date(Date.now() - 25 * 60 * 1000),
    status: "indexed",
    size: "1.8 MB",
  },
  {
    id: "doc-3",
    name: "Compliance_Guidelines.pdf",
    uploadedAt: new Date(Date.now() - 45 * 60 * 1000),
    status: "processing",
    size: "3.2 MB",
  },
  {
    id: "doc-4",
    name: "IT_Infrastructure_Overview.pdf",
    uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    status: "indexed",
    size: "5.1 MB",
  },
  {
    id: "doc-5",
    name: "Benefits_Package_2024.pdf",
    uploadedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    status: "failed",
    size: "1.2 MB",
  },
];

// Mock guardrail events
export const mockGuardrailEvents: GuardrailEvent[] = [
  {
    id: "gr-1",
    type: "blocked_query",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    details: "Query contained prohibited content",
  },
  {
    id: "gr-2",
    type: "pii_redaction",
    timestamp: new Date(Date.now() - 32 * 60 * 1000),
    details: "SSN detected and redacted from response",
  },
  {
    id: "gr-3",
    type: "pii_redaction",
    timestamp: new Date(Date.now() - 48 * 60 * 1000),
    details: "Email address redacted from response",
  },
  {
    id: "gr-4",
    type: "policy_violation",
    timestamp: new Date(Date.now() - 75 * 60 * 1000),
    details: "Response violated content policy",
  },
  {
    id: "gr-5",
    type: "unsafe_prompt",
    timestamp: new Date(Date.now() - 90 * 60 * 1000),
    details: "Prompt injection attempt detected",
  },
];

// Mock most referenced documents
export const mockReferencedDocuments = [
  { name: "Security_Policy_v3.docx", references: 156 },
  { name: "Employee_Handbook_2024.pdf", references: 142 },
  { name: "Compliance_Guidelines.pdf", references: 98 },
  { name: "IT_Infrastructure_Overview.pdf", references: 87 },
  { name: "Benefits_Package_2024.pdf", references: 76 },
];

// Mock issues
export const mockIssues: Issue[] = [
  {
    id: "issue-1",
    type: "guardrail_failure",
    title: "Guardrail failed to block inappropriate content",
    description:
      "Content filter did not catch offensive language in user query",
    status: "open",
    severity: "high",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    affectedComponent: "Guardrails",
  },
  {
    id: "issue-2",
    type: "profanity_detected",
    title: "Profanity check bypass detected",
    description:
      "User found a way to bypass profanity filter using special characters",
    status: "in_progress",
    severity: "medium",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
    affectedComponent: "Guardrails",
  },
  {
    id: "issue-3",
    type: "pii_leak",
    title: "PII redaction incomplete",
    description: "Phone number format not recognized by PII detector",
    status: "in_progress",
    severity: "critical",
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    affectedComponent: "Guardrails",
  },
  {
    id: "issue-4",
    type: "retrieval_error",
    title: "Knowledge base retrieval timeout",
    description:
      "OpenSearch query exceeded timeout threshold for complex queries",
    status: "open",
    severity: "medium",
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    affectedComponent: "Knowledge Base",
  },
  {
    id: "issue-5",
    type: "model_timeout",
    title: "Bedrock model response timeout",
    description:
      "Model took longer than 30s to respond for complex reasoning tasks",
    status: "open",
    severity: "low",
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    affectedComponent: "Bedrock Agent",
  },
  {
    id: "issue-6",
    type: "ingestion_failure",
    title: "Document chunking failed for large PDF",
    description: "PDF with 500+ pages failed during preprocessing step",
    status: "in_progress",
    severity: "medium",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    affectedComponent: "Document Pipeline",
  },
  {
    id: "issue-7",
    type: "policy_violation",
    title: "Response contained restricted information",
    description: "Agent provided salary information that should be restricted",
    status: "open",
    severity: "high",
    createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
    affectedComponent: "Bedrock Agent",
  },
  {
    id: "issue-8",
    type: "guardrail_failure",
    title: "Hallucination detection missed false claim",
    description: "Agent made unsupported claim not caught by grounding check",
    status: "open",
    severity: "medium",
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
    affectedComponent: "Guardrails",
  },
];
