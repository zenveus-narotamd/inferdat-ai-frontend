import type {
  Service,
  Incident,
  MaintenanceWindow,
  SystemMetrics,
} from "@/types/health";

export const healthContent = {
  title: "System Health Dashboard",
  subtitle: "Monitor service status and incidents in real-time",

  tabs: {
    overview: "Overview",
    activeIssues: "Active Issues",
    scheduled: "Scheduled Maintenance",
    history: "Incident History",
  },
};

// Mock data
export const mockMetrics: SystemMetrics = {
  overallStatus: "operational",
  totalServices: 12,
  operationalServices: 10,
  degradedServices: 2,
  downServices: 0,
  activeIncidents: 1,
  averageUptime: 99.95,
};

export const mockServices: Service[] = [
  {
    id: "api-gateway",
    name: "API Gateway",
    description: "Core API routing and management",
    status: "operational",
    uptime: 99.99,
  },
  {
    id: "auth-service",
    name: "Authentication Service",
    description: "User authentication and authorization",
    status: "operational",
    uptime: 99.98,
  },
  {
    id: "data-processing",
    name: "Data Processing",
    description: "Real-time data transformation",
    status: "degraded",
    uptime: 99.85,
    lastIncident: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "ml-inference",
    name: "ML Inference Engine",
    description: "Machine learning model serving",
    status: "operational",
    uptime: 99.97,
  },
  {
    id: "database",
    name: "Database Cluster",
    description: "Primary data storage",
    status: "operational",
    uptime: 99.99,
  },
  {
    id: "cache-layer",
    name: "Cache Layer",
    description: "Distributed caching system",
    status: "operational",
    uptime: 99.96,
  },
  {
    id: "storage",
    name: "Object Storage",
    description: "File and object storage",
    status: "operational",
    uptime: 99.99,
  },
  {
    id: "notification",
    name: "Notification Service",
    description: "Email and push notifications",
    status: "degraded",
    uptime: 99.8,
    lastIncident: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "analytics",
    name: "Analytics Engine",
    description: "Data analytics and reporting",
    status: "operational",
    uptime: 99.94,
  },
  {
    id: "cdn",
    name: "CDN",
    description: "Content delivery network",
    status: "operational",
    uptime: 99.98,
  },
  {
    id: "monitoring",
    name: "Monitoring System",
    description: "Infrastructure monitoring",
    status: "operational",
    uptime: 99.99,
  },
  {
    id: "backup",
    name: "Backup Service",
    description: "Automated backup system",
    status: "operational",
    uptime: 99.95,
  },
];

export const mockActiveIncidents: Incident[] = [
  {
    id: "inc-001",
    title: "Increased latency in Data Processing service",
    description:
      "Users may experience slower response times when processing large datasets.",
    severity: "minor",
    status: "monitoring",
    affectedServices: ["data-processing"],
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updates: [
      {
        id: "upd-001",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: "investigating",
        message:
          "We are investigating reports of increased latency in the Data Processing service.",
      },
      {
        id: "upd-002",
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
        status: "identified",
        message:
          "The issue has been identified as a resource constraint. We are scaling up capacity.",
      },
      {
        id: "upd-003",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        status: "monitoring",
        message:
          "Additional resources have been deployed. We are monitoring the situation.",
      },
    ],
  },
];

export const mockResolvedIncidents: Incident[] = [
  {
    id: "inc-002",
    title: "Notification Service delivery delays",
    description: "Email notifications were delayed by up to 15 minutes.",
    severity: "minor",
    status: "resolved",
    affectedServices: ["notification"],
    startTime: new Date(Date.now() - 5 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    updates: [
      {
        id: "upd-004",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        status: "investigating",
        message: "We are investigating reports of delayed email notifications.",
      },
      {
        id: "upd-005",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
        status: "identified",
        message:
          "Issue identified with the email queue processor. Implementing fix.",
      },
      {
        id: "upd-006",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        status: "resolved",
        message:
          "The issue has been resolved. All queued notifications have been delivered.",
      },
    ],
  },
  {
    id: "inc-003",
    title: "API Gateway intermittent errors",
    description: "Some API requests returned 503 errors.",
    severity: "major",
    status: "resolved",
    affectedServices: ["api-gateway"],
    startTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 23 * 60 * 60 * 1000),
    updates: [
      {
        id: "upd-007",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: "investigating",
        message: "We are investigating reports of API errors.",
      },
      {
        id: "upd-008",
        timestamp: new Date(Date.now() - 23.5 * 60 * 60 * 1000),
        status: "identified",
        message: "Load balancer configuration issue identified. Applying fix.",
      },
      {
        id: "upd-009",
        timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
        status: "resolved",
        message: "Configuration has been corrected. All systems operational.",
      },
    ],
  },
];

export const mockScheduledMaintenance: MaintenanceWindow[] = [
  {
    id: "maint-001",
    title: "Database Cluster Upgrade",
    description:
      "Upgrading database cluster to the latest version. No downtime expected.",
    affectedServices: ["database"],
    scheduledStart: new Date(Date.now() + 48 * 60 * 60 * 1000),
    scheduledEnd: new Date(Date.now() + 50 * 60 * 60 * 1000),
    status: "scheduled",
  },
  {
    id: "maint-002",
    title: "CDN Infrastructure Maintenance",
    description:
      "Routine maintenance on CDN edge servers. Minimal impact expected.",
    affectedServices: ["cdn"],
    scheduledStart: new Date(Date.now() + 72 * 60 * 60 * 1000),
    scheduledEnd: new Date(Date.now() + 74 * 60 * 60 * 1000),
    status: "scheduled",
  },
];
