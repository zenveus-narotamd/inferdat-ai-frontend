export interface CardItem {
  id: string;
  title: string;
  subtitle: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface TraceEvent {
  id: string;
  timestamp: Date;
  type: "info" | "success" | "error" | "warning";
  message: string;
  details?: string;
}

export interface UserInfo {
  name: string;
  email: string;
  avatar?: string;
}
