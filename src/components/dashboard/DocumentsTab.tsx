'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle } from 'lucide-react';
import { FileUploadZone } from '@/components/document/FileUploadZone';
import { DocumentCard } from '@/components/document/DocumentCard';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useFileUpload } from '@/hooks/useFileUpload';
import { documentContent } from '@/content/document';
import { ROLE_LABELS, type UserRole } from '@/types/document';

export const DocumentsTab = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [role, setRole] = useState<UserRole>('admin');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');

  const { documents, uploadProgress, error, uploadFile, deleteDocument } = useFileUpload();

  const handleUpload = async () => {
    if (!selectedFile) return;

    const tagArray = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    await uploadFile(selectedFile, {
      role,
      tags: tagArray.length > 0 ? tagArray : undefined,
      description: description.trim() || undefined,
    });

    setSelectedFile(null);
    setTags('');
    setDescription('');
  };

  const isUploading = uploadProgress !== null;

  return (
    <div>
      {/* Header Section */}
      <div className="bg-background-secondary border-b border-border">
        <div className="max-w-content-narrow mx-auto px-6 lg:px-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="heading-1 text-text-primary">
                {documentContent.title}
              </h1>
            </div>
            <p className="text-body-lg text-text-secondary">
              {documentContent.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-content-narrow mx-auto px-6 lg:px-16 py-12">
        {/* Upload Form */}
        <div className="bg-background-secondary border border-border rounded-2xl p-8 mb-8">
          <h2 className="heading-3 text-text-primary mb-6">
            {documentContent.upload.title}
          </h2>

          <FileUploadZone
            onFileSelect={setSelectedFile}
            selectedFile={selectedFile}
            onClearFile={() => setSelectedFile(null)}
            disabled={isUploading}
          />

          {selectedFile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-6"
            >
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {documentContent.form.roleLabel}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  disabled={isUploading}
                >
                  {Object.entries(ROLE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {documentContent.form.tagsLabel}
                </label>
                <Input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder={documentContent.form.tagsPlaceholder}
                  disabled={isUploading}
                />
                <p className="text-caption text-text-tertiary mt-1">
                  Separate tags with commas (e.g., product, catalog, 2024)
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {documentContent.form.descriptionLabel}
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={documentContent.form.descriptionPlaceholder}
                  disabled={isUploading}
                  rows={3}
                />
              </div>

              {/* Upload Progress */}
              {uploadProgress && (
                <div className="bg-purple-primary/5 border border-purple-primary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-primary">
                      {uploadProgress.status === 'uploading' && 'Uploading...'}
                      {uploadProgress.status === 'processing' && 'Processing...'}
                      {uploadProgress.status === 'ready' && 'Complete!'}
                    </span>
                    <span className="text-sm font-medium text-purple-primary">
                      {uploadProgress.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-background-tertiary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${uploadProgress.progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-body-sm text-red-500">{error}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button onClick={handleUpload} disabled={isUploading} className="flex-1">
                  {isUploading ? 'Uploading...' : documentContent.form.uploadButton}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedFile(null);
                    setTags('');
                    setDescription('');
                  }}
                  disabled={isUploading}
                >
                  {documentContent.form.cancelButton}
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Documents List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-3 text-text-primary">
              {documentContent.list.title}
            </h2>
            <span className="text-body-sm text-text-secondary">
              {documents.length} document{documents.length !== 1 ? 's' : ''}
            </span>
          </div>

          {documents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background-secondary border border-border rounded-2xl p-12 text-center"
            >
              <FileText className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
              <h3 className="text-h4 font-semibold text-text-primary mb-2">
                {documentContent.list.empty}
              </h3>
              <p className="text-body text-text-secondary">
                {documentContent.list.emptyDescription}
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  onDelete={deleteDocument}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
