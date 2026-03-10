export type UserRole =
  | "admin"
  | "sales"
  | "marketing"
  | "support"
  | "engineering"
  | "finance";

export type DocumentStatus = "uploading" | "processing" | "ready" | "failed";

export interface UploadedDocument {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
  uploadedBy: string;
  role: UserRole;
  status: DocumentStatus;
  tags?: string[];
  description?: string;
  knowledgeBaseId?: string;
  errorMessage?: string;
}

export interface UploadProgress {
  documentId: string;
  progress: number;
  status: DocumentStatus;
}

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/markdown",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
];

export const ALLOWED_FILE_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".txt",
  ".md",
  ".xls",
  ".xlsx",
  ".csv",
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Administrator",
  sales: "Sales",
  marketing: "Marketing",
  support: "Customer Support",
  engineering: "Engineering",
  finance: "Finance",
};
