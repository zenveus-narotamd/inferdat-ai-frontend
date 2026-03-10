export const consoleContent = {
  cards: [
    {
      id: "ingestion",
      title: "Document Ingestion",
      description:
        "Upload, preprocess, and index documents into the knowledge base",
      icon: "UploadCloud",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/5",
      textColor: "text-purple-500",
      subCards: [
        {
          id: "ingestion-1",
          title: "Document Upload",
          content:
            "Users upload documents to Amazon S3. Supported formats are automatically validated and rejected if unsupported.",
          description:
            "Ensures only the right file types are ingested and triggers the ingestion pipeline.",
        },
        {
          id: "ingestion-2",
          title: "Preprocessing & Chunking",
          content:
            "Documents are preprocessed: headers/footers removed, formatting normalized, OCR applied if needed, and text extracted. Chunks are generated based on document type.",
          description:
            "Contracts → clause chunking, FAQs → QA chunking, Guidelines → section chunking, Reports → table-aware chunking.",
        },
        {
          id: "ingestion-3",
          title: "Embedding Generation",
          content:
            "Text chunks are converted into embeddings using Amazon Bedrock.",
          description:
            "Embeddings are stored in Amazon OpenSearch Serverless for semantic search.",
        },
        {
          id: "ingestion-4",
          title: "Knowledge Base Indexing",
          content:
            "All chunks are indexed into the KB. Partial indexing triggers retry logic.",
          description:
            "Ensures the KB is ready for retrieval with all ingested content.",
        },
      ],
    },
    {
      id: "failure",
      title: "Failure Handling & Retry",
      description: "Ensure resilience and reliable responses across the system",
      icon: "AlertTriangle",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500",
      bgColor: "bg-red-500/5",
      textColor: "text-red-500",
      subCards: [
        {
          id: "failure-1",
          title: "Agent/API Throttling",
          content:
            "Bedrock API calls monitor throttling events and retry automatically with exponential backoff.",
          description:
            "Prevents request failures due to rate limits and ensures consistent system behavior.",
        },
        {
          id: "failure-2",
          title: "Search & Retrieval Errors",
          content:
            "OpenSearch or KB retrieval failures trigger automatic retries and alert logging.",
          description:
            "Guarantees that temporary search issues do not break the user experience.",
        },
        {
          id: "failure-3",
          title: "Fallback Models",
          content:
            "Primary model errors or unavailability automatically route queries to backup models.",
          description:
            "Maintains high availability and ensures the user always gets a response.",
        },
      ],
    },
    {
      id: "guardrails",
      title: "Security & Guardrails",
      description:
        "Input/output filtering, PII protection, compliance, and policy enforcement",
      icon: "Shield",
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/5",
      textColor: "text-yellow-600",
      subCards: [
        {
          id: "guardrails-1",
          title: "Input Guardrails",
          content:
            "All user queries are scanned for harmful content, PII, and prompt injection attempts.",
          description:
            "Blocks malicious or unsafe input before it reaches the agent.",
        },
        {
          id: "guardrails-2",
          title: "Output Guardrails",
          content:
            "Generated responses are checked for policy violations, sensitive data leakage, and hallucination risk.",
          description:
            "Ensures the system only returns safe, compliant, and accurate answers.",
        },
        {
          id: "guardrails-3",
          title: "Audit Logging",
          content:
            "All queries, agent calls, and data accesses are logged with identity, timestamps, and context.",
          description:
            "Provides a full trace for compliance, review, and forensic analysis.",
        },
      ],
    },
    {
      id: "query",
      title: "User Query & RAG Retrieval",
      description:
        "Multi-turn question answering with contextual retrieval from the KB",
      icon: "MessageCircle",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/5",
      textColor: "text-blue-500",
      subCards: [
        {
          id: "query-1",
          title: "Query Submission",
          content:
            "User submits a question via the chat UI. The system maintains context across turns using session memory.",
          description:
            "Supports natural multi-turn conversations without losing context.",
        },
        {
          id: "query-2",
          title: "Knowledge Retrieval",
          content:
            "Agent queries the Bedrock KB, retrieves relevant chunks using semantic search and reranking.",
          description:
            "Ensures answers are based on the most relevant and accurate content.",
        },
        {
          id: "query-3",
          title: "Response Generation",
          content:
            "Agent generates a cited answer with guardrail checks applied to ensure safety and compliance.",
          description:
            "Final response is accurate, safe, and compliant with enterprise policies.",
        },
        {
          id: "query-4",
          title: "Trace & Feedback",
          content:
            "All query steps, retrieved chunks, and model decisions are logged and visible in the Live Trace panel.",
          description:
            "Enables debugging, monitoring, and continuous improvement of retrieval and response quality.",
        },
      ],
    },
  ],

  chat: {
    placeholder: "Type your message here...",
    emptyState: "Start a conversation to see responses here",
  },

  trace: {
    title: "Live Trace",
    emptyState: "Trace events will appear here when you send a message",
  },
};
