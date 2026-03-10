"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Clock,
  Database,
  Bot,
  ShieldCheck,
  FileStack,
  BarChart3,
  FileText,
  AlertCircle,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import { QuickMetricCard } from "@/components/health/QuickMetricCard";
import { SystemHealthCard } from "@/components/health/SystemHealthCard";
import { GuardrailEventCard } from "@/components/health/GuardrailEventCard";
import { DocumentTable } from "@/components/health/DocumentTable";
import { IssueCard } from "@/components/health/IssueCard";
import {
  opsContent,
  mockSystemMetrics,
  mockComponents,
  mockRecentDocuments,
  mockGuardrailEvents,
  mockReferencedDocuments,
  mockIssues,
} from "@/content/ops";

export const HealthTab = () => {
  return (
    <div className="h-full overflow-y-auto">
      {/* Header Section */}
      <div className="bg-background-secondary border-b border-border">
        <div className="max-w-content mx-auto px-6 lg:px-16 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl font-semibold text-text-primary mb-2">
              {opsContent.title}
            </h1>
            <p className="text-base text-text-secondary">
              {opsContent.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-content mx-auto px-6 lg:px-16 py-8 space-y-10">
        {/* Section 1: System Health Overview */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            System Health Overview
          </h2>

          {/* Component Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <SystemHealthCard
              name={mockComponents[0].name}
              status={mockComponents[0].status}
              uptime={mockComponents[0].uptime}
              icon={Bot}
              index={0}
            />
            <SystemHealthCard
              name={mockComponents[1].name}
              status={mockComponents[1].status}
              uptime={mockComponents[1].uptime}
              icon={Database}
              index={1}
            />
            <SystemHealthCard
              name={mockComponents[2].name}
              status={mockComponents[2].status}
              uptime={mockComponents[2].uptime}
              icon={ShieldCheck}
              index={2}
            />
            <SystemHealthCard
              name={mockComponents[3].name}
              status={mockComponents[3].status}
              uptime={mockComponents[3].uptime}
              icon={FileStack}
              index={3}
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickMetricCard
              label="Active Conversations"
              value={mockSystemMetrics.activeConversations}
              icon={MessageSquare}
              color="purple"
              index={0}
            />
            <QuickMetricCard
              label="Total Queries"
              value={mockSystemMetrics.totalQueries.toLocaleString()}
              icon={BarChart3}
              color="sky"
              index={1}
            />
            <QuickMetricCard
              label="Success Rate"
              value={`${mockSystemMetrics.successRate}%`}
              icon={CheckCircle}
              color="emerald"
              index={2}
            />
            <QuickMetricCard
              label="Avg Response Time"
              value={`${mockSystemMetrics.avgResponseTime}s`}
              icon={Clock}
              color="amber"
              index={3}
            />
          </div>
        </section>

        {/* Section 2: Issues & Incidents */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Issues & Incidents
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <QuickMetricCard
              label="Open Issues"
              value={mockSystemMetrics.openIssues}
              icon={AlertCircle}
              color="amber"
              index={0}
            />
            <QuickMetricCard
              label="In Progress"
              value={mockSystemMetrics.inProgressIssues}
              icon={CircleDot}
              color="sky"
              index={1}
            />
            <QuickMetricCard
              label="Resolved (30d)"
              value={mockSystemMetrics.resolvedIssues}
              icon={CheckCircle2}
              color="emerald"
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              Recent Issues
            </h3>
            <div className="space-y-3">
              {mockIssues
                .filter((issue) => issue.status !== "resolved")
                .map((issue, index) => (
                  <IssueCard key={issue.id} issue={issue} index={index} />
                ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Knowledge Base Health */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Knowledge Base Health
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <QuickMetricCard
              label="Total Documents"
              value={mockSystemMetrics.totalDocuments}
              icon={FileText}
              color="purple"
              index={0}
            />
            <QuickMetricCard
              label="Processing"
              value={mockSystemMetrics.documentsProcessing}
              icon={Clock}
              color="amber"
              index={1}
            />
            <QuickMetricCard
              label="Failed Ingestions"
              value={mockSystemMetrics.failedIngestions}
              icon={TrendingUp}
              color="sky"
              index={2}
            />
            <QuickMetricCard
              label="KB Hit Rate"
              value={`${mockSystemMetrics.kbHitRate}%`}
              icon={CheckCircle}
              color="emerald"
              index={3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              Recent Documents
            </h3>
            <DocumentTable documents={mockRecentDocuments} />
          </motion.div>
        </section>

        {/* Section 4: Guardrails & Safety */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Guardrails & Safety
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <QuickMetricCard
              label="Blocked Queries"
              value={mockSystemMetrics.blockedQueries}
              icon={ShieldCheck}
              color="amber"
              index={0}
            />
            <QuickMetricCard
              label="PII Redactions"
              value={mockSystemMetrics.piiRedactions}
              icon={ShieldCheck}
              color="sky"
              index={1}
            />
            <QuickMetricCard
              label="Total Events (24h)"
              value={mockGuardrailEvents.length}
              icon={BarChart3}
              color="purple"
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              Recent Events
            </h3>
            <div className="space-y-2">
              {mockGuardrailEvents.map((event, index) => (
                <GuardrailEventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 5: Retrieval & AI Performance */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Retrieval & AI Performance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                Latency Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Retrieval Latency
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {mockSystemMetrics.retrievalLatency}s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Model Response Latency
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {mockSystemMetrics.modelLatency}s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Total Response Time
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {mockSystemMetrics.avgResponseTime}s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Knowledge Base Hit Rate
                  </span>
                  <span className="text-sm font-semibold text-emerald-500">
                    {mockSystemMetrics.kbHitRate}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Most Referenced Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-border rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                Most Referenced Documents
              </h3>
              <div className="space-y-3">
                {mockReferencedDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-4 h-4 text-text-tertiary shrink-0" />
                      <span className="text-sm text-text-primary truncate">
                        {doc.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-purple-primary shrink-0 ml-2">
                      {doc.references}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
