export type ServiceStatus =
  | "operational"
  | "degraded"
  | "outage"
  | "maintenance";
export type IncidentSeverity = "critical" | "major" | "minor";
export type IncidentStatus =
  | "investigating"
  | "identified"
  | "monitoring"
  | "resolved";

export interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  uptime: number;
  lastIncident?: Date;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  affectedServices: string[];
  startTime: Date;
  endTime?: Date;
  updates: IncidentUpdate[];
}

export interface IncidentUpdate {
  id: string;
  timestamp: Date;
  status: IncidentStatus;
  message: string;
}

export interface MaintenanceWindow {
  id: string;
  title: string;
  description: string;
  affectedServices: string[];
  scheduledStart: Date;
  scheduledEnd: Date;
  status: "scheduled" | "in-progress" | "completed";
}

export interface SystemMetrics {
  overallStatus: ServiceStatus;
  totalServices: number;
  operationalServices: number;
  degradedServices: number;
  downServices: number;
  activeIncidents: number;
  averageUptime: number;
}
