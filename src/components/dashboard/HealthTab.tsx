'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle, Activity, Calendar } from 'lucide-react';
import { StatusBadge } from '@/components/health/StatusBadge';
import { MetricsCard } from '@/components/health/MetricsCard';
import { ServiceCard } from '@/components/health/ServiceCard';
import { IncidentCard } from '@/components/health/IncidentCard';
import { MaintenanceCard } from '@/components/health/MaintenanceCard';
import { cn } from '@/lib/utils';
import {
  healthContent,
  mockMetrics,
  mockServices,
  mockActiveIncidents,
  mockResolvedIncidents,
  mockScheduledMaintenance,
} from '@/content/health';

type HealthSubTab = 'overview' | 'activeIssues' | 'scheduled' | 'history';

export const HealthTab = () => {
  const [activeSubTab, setActiveSubTab] = useState<HealthSubTab>('overview');

  return (
    <div>
      {/* Header Section */}
      <div className="bg-background-secondary border-b border-border">
        <div className="max-w-content mx-auto px-6 lg:px-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="heading-1 text-text-primary mb-3">
              {healthContent.title}
            </h1>
            <p className="text-body-lg text-text-secondary mb-6">
              {healthContent.subtitle}
            </p>
            <StatusBadge status={mockMetrics.overallStatus} size="lg" />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-content mx-auto px-6 lg:px-16 py-12">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricsCard
            title="Average Uptime"
            value={`${mockMetrics.averageUptime}%`}
            icon={TrendingUp}
            trend="up"
            trendValue="+0.02% from last month"
            color="emerald"
          />
          <MetricsCard
            title="Active Incidents"
            value={mockMetrics.activeIncidents}
            icon={AlertCircle}
            color="amber"
          />
          <MetricsCard
            title="Operational Services"
            value={`${mockMetrics.operationalServices}/${mockMetrics.totalServices}`}
            icon={CheckCircle}
            color="emerald"
          />
          <MetricsCard
            title="Total Services"
            value={mockMetrics.totalServices}
            icon={Activity}
            color="purple"
          />
        </div>

        {/* Sub-tabs */}
        <div className="mb-8">
          <div className="border-b border-border">
            <div className="flex gap-8">
              {(Object.keys(healthContent.tabs) as HealthSubTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={cn(
                    'pb-4 text-body font-medium transition-colors relative',
                    activeSubTab === tab
                      ? 'text-purple-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {healthContent.tabs[tab]}
                  {activeSubTab === tab && (
                    <motion.div
                      layoutId="activeHealthSubTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-primary"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-tab Content */}
        <motion.div
          key={activeSubTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeSubTab === 'overview' && (
            <div>
              <h2 className="heading-3 text-text-primary mb-6">All Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          )}

          {activeSubTab === 'activeIssues' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-3 text-text-primary">Active Issues</h2>
                <span className="text-body-sm text-text-secondary">
                  {mockActiveIncidents.length} active incident
                  {mockActiveIncidents.length !== 1 ? 's' : ''}
                </span>
              </div>
              {mockActiveIncidents.length === 0 ? (
                <div className="bg-background-secondary border border-border rounded-2xl p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-h4 font-semibold text-text-primary mb-2">
                    All Systems Operational
                  </h3>
                  <p className="text-body text-text-secondary">
                    No active incidents at this time.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockActiveIncidents.map((incident, index) => (
                    <IncidentCard key={incident.id} incident={incident} index={index} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'scheduled' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-3 text-text-primary">Scheduled Maintenance</h2>
                <span className="text-body-sm text-text-secondary">
                  {mockScheduledMaintenance.length} upcoming
                </span>
              </div>
              {mockScheduledMaintenance.length === 0 ? (
                <div className="bg-background-secondary border border-border rounded-2xl p-12 text-center">
                  <Calendar className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
                  <h3 className="text-h4 font-semibold text-text-primary mb-2">
                    No Scheduled Maintenance
                  </h3>
                  <p className="text-body text-text-secondary">
                    There are no maintenance windows scheduled at this time.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockScheduledMaintenance.map((maintenance, index) => (
                    <MaintenanceCard
                      key={maintenance.id}
                      maintenance={maintenance}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'history' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-3 text-text-primary">Incident History</h2>
                <span className="text-body-sm text-text-secondary">Last 30 days</span>
              </div>
              <div className="space-y-4">
                {mockResolvedIncidents.map((incident, index) => (
                  <IncidentCard key={incident.id} incident={incident} index={index} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
