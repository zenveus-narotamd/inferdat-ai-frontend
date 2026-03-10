import { useState, useCallback } from "react";
import type { TraceEvent } from "@/types";

export const useTrace = () => {
  const [events, setEvents] = useState<TraceEvent[]>([]);

  const addEvent = useCallback(
    (type: TraceEvent["type"], message: string, details?: string) => {
      const event: TraceEvent = {
        id: `trace-${Date.now()}-${Math.random()}`,
        timestamp: new Date(),
        type,
        message,
        details,
      };

      setEvents((prev) => [...prev, event]);
    },
    [],
  );

  const clearEvents = useCallback(() => {
    setEvents([]);
  }, []);

  const simulateTrace = useCallback(
    (userMessage: string) => {
      // Simulate trace events for a message
      addEvent("info", "Message received", `Processing: "${userMessage}"`);

      setTimeout(() => {
        addEvent("info", "Analyzing request", "Parsing user intent...");
      }, 300);

      setTimeout(() => {
        addEvent(
          "success",
          "Request analyzed",
          "Intent identified successfully",
        );
      }, 600);

      setTimeout(() => {
        addEvent("info", "Generating response", "AI model processing...");
      }, 900);

      setTimeout(() => {
        addEvent("success", "Response generated", "Message sent to user");
      }, 1200);
    },
    [addEvent],
  );

  return {
    events,
    addEvent,
    clearEvents,
    simulateTrace,
  };
};
