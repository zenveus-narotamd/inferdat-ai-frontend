export const consoleContent = {
  cards: [
    {
      id: "knowledge-base",
      title: "Knowledge Base",
      description: "Managed retrieval system for enterprise documents",
      icon: "Database",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/5",
      textColor: "text-purple-500",
      subCards: [
        {
          id: "kb-1",
          title: "Semantic Search",
          content:
            "Enterprise documents are indexed with embeddings enabling semantic retrieval instead of keyword matching.",
          description:
            "Users can ask natural language questions and retrieve the most relevant knowledge chunks.",
        },
        {
          id: "kb-2",
          title: "Automatic Chunking",
          content:
            "Documents are automatically processed and split into optimized chunks for better retrieval accuracy.",
          description:
            "Ensures the most relevant sections of documents are retrieved during queries.",
        },
        {
          id: "kb-3",
          title: "Vector Storage",
          content:
            "Embeddings are stored in OpenSearch Serverless enabling scalable vector search.",
          description:
            "Supports large enterprise document sets with fast retrieval performance.",
        },
      ],
    },

    {
      id: "agent",
      title: "Bedrock Agent",
      description: "Conversational orchestration layer for enterprise Q&A",
      icon: "Bot",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/5",
      textColor: "text-blue-500",
      subCards: [
        {
          id: "agent-1",
          title: "Multi-Turn Conversations",
          content:
            "The assistant supports contextual conversations allowing users to ask follow-up questions naturally.",
          description:
            "Session memory ensures continuity across multiple questions.",
        },
        {
          id: "agent-2",
          title: "Retrieval-Augmented Generation",
          content:
            "Responses are generated using relevant knowledge base content retrieved at query time.",
          description: "Ensures answers are grounded in enterprise documents.",
        },
        {
          id: "agent-3",
          title: "Cited Responses",
          content:
            "Answers include references to the exact document sections used to generate the response.",
          description:
            "Improves transparency and user trust in generated answers.",
        },
      ],
    },

    {
      id: "guardrails",
      title: "Security & Guardrails",
      description: "Enterprise protection layer for safe AI responses",
      icon: "ShieldCheck",
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/5",
      textColor: "text-yellow-600",
      subCards: [
        {
          id: "guardrails-1",
          title: "Content Filtering",
          content:
            "User queries and model outputs are filtered against configurable safety policies.",
          description: "Prevents harmful or inappropriate responses.",
        },
        {
          id: "guardrails-2",
          title: "PII Protection",
          content:
            "Sensitive information such as personal identifiers is automatically detected and redacted.",
          description:
            "Ensures privacy and compliance with enterprise data policies.",
        },
        {
          id: "guardrails-3",
          title: "Hallucination Protection",
          content:
            "Responses are validated against retrieved knowledge to reduce unsupported claims.",
          description: "Ensures answers stay grounded in real enterprise data.",
        },
      ],
    },

    {
      id: "document-management",
      title: "Document Management",
      description: "Tools for managing enterprise knowledge sources",
      icon: "FileText",
      color: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/5",
      textColor: "text-emerald-500",
      subCards: [
        {
          id: "doc-1",
          title: "Document Upload",
          content:
            "Upload PDFs, Word documents, and other supported formats directly to the knowledge base.",
          description: "Supports quick onboarding of enterprise documentation.",
        },
        {
          id: "doc-2",
          title: "Automated Indexing",
          content:
            "Uploaded documents are automatically processed and indexed.",
          description: "No manual preprocessing required.",
        },
        {
          id: "doc-3",
          title: "Source Citations",
          content: "Responses always reference the original document source.",
          description: "Helps users verify information quickly.",
        },
      ],
    },

    {
      id: "observability",
      title: "Observability & Trace",
      description: "Visibility into system decisions and query processing",
      icon: "Activity",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/5",
      textColor: "text-orange-500",
      subCards: [
        {
          id: "obs-1",
          title: "Live Trace",
          content:
            "Each query displays a trace of retrieval, reasoning, and guardrail checks.",
          description: "Provides transparency into how answers are generated.",
        },
        {
          id: "obs-2",
          title: "Query Logging",
          content:
            "All interactions are logged with timestamps and processing steps.",
          description: "Enables auditing and system debugging.",
        },
        {
          id: "obs-3",
          title: "Performance Monitoring",
          content:
            "Track query performance, retrieval accuracy, and system activity.",
          description:
            "Helps optimize system behavior and improve response quality.",
        },
      ],
    },
  ],

  chat: {
    placeholder: "Ask a question about your documents...",
    emptyState: "Start a conversation to interact with the knowledge assistant",
  },

  trace: {
    title: "Live Trace",
    emptyState: "Processing details will appear here when a query is executed",
  },
};
