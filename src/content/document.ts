import type { UploadedDocument } from "@/types/document";

export const documentContent = {
  title: "Document Upload",
  subtitle:
    "Upload documents to AWS Bedrock Knowledge Base for AI-powered chat",

  upload: {
    title: "Upload Document",
    dragText: "Drag and drop your file here, or click to browse",
    browseText: "Browse Files",
    supportedFormats:
      "Supported formats: PDF, DOC, DOCX, TXT, MD, XLS, XLSX, CSV",
    maxSize: "Maximum file size: 50MB",
  },

  form: {
    roleLabel: "Select Access",
    rolePlaceholder: "Choose a role for this document",
    tagsLabel: "Tags (optional)",
    tagsPlaceholder: "Add tags separated by commas",
    descriptionLabel: "Description (optional)",
    descriptionPlaceholder: "Add a brief description of the document",
    uploadButton: "Upload to Knowledge Base",
    cancelButton: "Cancel",
  },

  list: {
    title: "Uploaded Documents",
    empty: "No documents uploaded yet",
    emptyDescription:
      "Upload your first document to get started with AI-powered chat",
  },
};

// Mock data for demonstration
export const mockDocuments: UploadedDocument[] = [
  {
    id: "doc-001",
    name: "Product_Catalog_2024.pdf",
    size: 2457600,
    type: "application/pdf",
    uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    uploadedBy: "John Doe",
    role: "sales",
    status: "ready",
    tags: ["product", "catalog", "2024"],
    description: "Complete product catalog for 2024",
    knowledgeBaseId: "kb-12345",
  },
  {
    id: "doc-002",
    name: "Sales_Training_Manual.docx",
    size: 1843200,
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    uploadedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    uploadedBy: "Jane Smith",
    role: "sales",
    status: "ready",
    tags: ["training", "sales"],
    description: "Sales team training materials",
    knowledgeBaseId: "kb-12346",
  },
  {
    id: "doc-003",
    name: "Marketing_Strategy_Q1.pdf",
    size: 3145728,
    type: "application/pdf",
    uploadedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    uploadedBy: "Mike Johnson",
    role: "marketing",
    status: "ready",
    tags: ["strategy", "Q1", "marketing"],
    knowledgeBaseId: "kb-12347",
  },
];
