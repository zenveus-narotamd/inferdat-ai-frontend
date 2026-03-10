import { useState, useCallback } from "react";
import type {
  UploadedDocument,
  UserRole,
  UploadProgress,
} from "@/types/document";
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "@/types/document";

interface UploadOptions {
  role: UserRole;
  tags?: string[];
  description?: string;
}

export const useFileUpload = () => {
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "File type not supported. Please upload PDF, DOC, DOCX, TXT, MD, XLS, XLSX, or CSV files.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size exceeds 50MB limit.";
    }
    return null;
  }, []);

  const uploadFile = useCallback(
    async (file: File, options: UploadOptions) => {
      setError(null);

      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      const documentId = `doc-${Date.now()}`;
      const newDocument: UploadedDocument = {
        id: documentId,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date(),
        uploadedBy: "Current User", // Replace with actual user
        role: options.role,
        status: "uploading",
        tags: options.tags,
        description: options.description,
      };

      setDocuments((prev) => [newDocument, ...prev]);
      setUploadProgress({ documentId, progress: 0, status: "uploading" });

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (!prev || prev.progress >= 90) return prev;
          return { ...prev, progress: prev.progress + 10 };
        });
      }, 200);

      // Simulate API call to AWS Bedrock
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate processing
        setUploadProgress({ documentId, progress: 95, status: "processing" });
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Success
        clearInterval(progressInterval);
        setUploadProgress({ documentId, progress: 100, status: "ready" });

        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === documentId
              ? {
                  ...doc,
                  status: "ready",
                  knowledgeBaseId: `kb-${Math.random().toString(36).substr(2, 9)}`,
                }
              : doc,
          ),
        );

        setTimeout(() => setUploadProgress(null), 1000);
      } catch (err) {
        clearInterval(progressInterval);
        const errorMessage =
          err instanceof Error ? err.message : "Upload failed";

        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === documentId
              ? { ...doc, status: "failed", errorMessage }
              : doc,
          ),
        );

        setUploadProgress(null);
        setError(errorMessage);
      }
    },
    [validateFile],
  );

  const deleteDocument = useCallback((documentId: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== documentId));
  }, []);

  const retryUpload = useCallback((document: UploadedDocument) => {
    // In a real implementation, you would re-upload the file
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === document.id ? { ...doc, status: "uploading" } : doc,
      ),
    );
  }, []);

  return {
    documents,
    uploadProgress,
    error,
    uploadFile,
    deleteDocument,
    retryUpload,
    validateFile,
  };
};
