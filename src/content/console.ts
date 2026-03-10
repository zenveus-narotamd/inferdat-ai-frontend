import type { ConsoleCard } from "@/types/console";

export const consoleContent = {
  cards: [
    {
      id: "orchestration",
      title: "Orchestration",
      description:
        "Intelligent routing across specialist agents based on intent",
      icon: "Workflow",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/5",
      textColor: "text-purple-500",
      subCards: [
        {
          id: "orchestration-1",
          title: "Multi-Agent Delegation",
          content:
            "An orchestrator agent decomposes complex requests and delegates to specialist sub-agents, each exposed as an MCP tool via Strands SDK.",
          description:
            "Complex work gets broken into focused steps, each handled by the right specialist with the right tools. This pattern scales from one agent to dozens.",
        },
        {
          id: "orchestration-2",
          title: "MCP Tool Gateway",
          content:
            "AgentCore MCP Gateway routes tool calls to serverless functions. Any API, database, or internal system is registered as a tool target.",
          description:
            "New data sources and systems become agent-callable tools through a standard protocol. No custom integration code per system.",
        },
        {
          id: "orchestration-3",
          title: "Intent-Based Routing",
          content:
            "The orchestrator reasons about what each request needs. Simple questions go to one agent; complex tasks fan out to multiple agents in sequence.",
          description:
            "No wasted compute on simple lookups, full multi-agent coordination when the task demands it. The routing logic lives in the prompt, not hardcoded.",
        },
        {
          id: "orchestration-4",
          title: "Model Fallback & Retry",
          content:
            "Agents are configured with fallback model chains and automatic retry logic. If a primary model is throttled or unavailable, the request routes to an alternate.",
          description:
            "Production systems need resilience. A single model outage shouldn't take down the entire agent pipeline.",
        },
      ],
    },
    {
      id: "memory",
      title: "Memory",
      description: "Session and semantic memory for multi-turn context",
      icon: "Brain",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/5",
      textColor: "text-blue-500",
      subCards: [
        {
          id: "memory-1",
          title: "Session Memory",
          content:
            "AgentCore Memory loads an optimal window of conversation turns at the start of each request and persists new messages after each exchange.",
          description:
            "Users have natural multi-turn conversations without repeating context. The agent picks up where you left off, across requests.",
        },
        {
          id: "memory-2",
          title: "Semantic Memory",
          content:
            "AgentCore Memory extracts facts and user preferences into dedicated namespaces that persist across sessions. Extraction rules and namespaces are configurable per use case.",
          description:
            "The system learns over time. Preferences and key facts carry forward even when starting a new conversation. Enables personalization at scale.",
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      description:
        "Guardrails, PII protection, access controls, and input/output filtering",
      icon: "Shield",
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/5",
      textColor: "text-yellow-600",
      subCards: [
        {
          id: "security-1",
          title: "Content Guardrails",
          content:
            "Bedrock Guardrails filter every input and output through configurable content policies (hate, violence, misconduct, etc.) and custom denied topic policies tailored to the use case.",
          description:
            "Prevents the agent from generating harmful content or being manipulated into off-topic responses. Policies are tunable per deployment without code changes.",
        },
        {
          id: "security-2",
          title: "PII Protection",
          content:
            "Sensitive data types (SSN, credit cards, bank accounts, etc.) are blocked or automatically anonymized in agent responses. Configurable per PII category.",
          description:
            "Prevents accidental exposure of personally identifiable information, even if it appears in source data. Critical for regulated industries.",
        },
        {
          id: "security-3",
          title: "Identity & Access Control",
          content:
            "AgentCore Identity manages authentication and role-based permissions. Users and service accounts are scoped to specific agents, tools, and data sources.",
          description:
            "Not everyone should have access to every agent or every data source. Fine-grained access control ensures the right people reach the right capabilities.",
        },
        {
          id: "security-4",
          title: "Audit Logging",
          content:
            "Every agent invocation, tool call, and data access is logged with caller identity, timestamps, and request context through Inferdat Observe. Full trace history is retained for compliance and forensic review.",
          description:
            "Regulated environments require a full audit trail. When something goes wrong, you need to know who asked what, when, and what the system did.",
        },
      ],
    },
    {
      id: "observability",
      title: "Observability",
      description:
        "Full trace visibility — every agent call, tool use, and token",
      icon: "Activity",
      color: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/5",
      textColor: "text-emerald-500",
      subCards: [
        {
          id: "observability-1",
          title: "Trace Visualization",
          content:
            "Every agent call, tool invocation, and model interaction is automatically traced. Full nested span trees are visible in Inferdat Observe.",
          description:
            "When something goes wrong or takes too long, you see exactly which step, which tool, and which agent caused it. No guesswork.",
        },
        {
          id: "observability-2",
          title: "Evaluation Scoring",
          content:
            "Every trace receives automatic evaluation scores — latency, error rate, completeness, tool usage effectiveness. Custom evaluators are added per use case.",
          description:
            "Quality is measured on every request, not sampled. Degradation is caught immediately, not after user complaints.",
        },
        {
          id: "observability-3",
          title: "Prompt Management",
          content:
            "All agent prompts are versioned and served from Inferdat Observe. Model, temperature, and other parameters are configurable per agent without code changes.",
          description:
            "Iterate on prompts, swap models, or tune parameters directly in the UI. No redeployment needed. Supports A/B testing and rollback.",
        },
        {
          id: "observability-4",
          title: "Human-in-the-Loop Review",
          content:
            "Traces are flagged for human review based on confidence thresholds, evaluation scores, or content triggers. Reviewers annotate directly in Inferdat Observe.",
          description:
            "Not every response should go unchecked. High-stakes outputs get human oversight without slowing down the majority of requests.",
        },
      ],
    },
    {
      id: "cost",
      title: "Cost Optimization",
      description:
        "Prompt caching, intelligent routing, and per-query cost tracking",
      icon: "DollarSign",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/5",
      textColor: "text-orange-500",
      subCards: [
        {
          id: "cost-1",
          title: "Prompt Caching",
          content:
            "Bedrock prompt caching stores frequently used context (system prompts, few-shot examples, large documents) so repeated calls skip redundant input processing.",
          description:
            "Reduces cost by up to 90% and latency by up to 85% for prompts with shared prefixes. High-volume agents benefit immediately.",
        },
        {
          id: "cost-2",
          title: "Intelligent Prompt Routing",
          content:
            "Bedrock Intelligent Prompt Routing evaluates each request and routes it to the most cost-effective model in a family that can handle the complexity.",
          description:
            "Simple questions don't need the most expensive model. Automatic routing reduces cost by up to 30% with no quality loss on straightforward tasks.",
        },
        {
          id: "cost-3",
          title: "Cost Tracking per Query",
          content:
            "Inferdat Observe captures token usage and model pricing per trace. Cost is attributed to each agent, tool call, and session for full visibility.",
          description:
            "You can't optimize what you can't measure. Per-query cost attribution reveals which agents, tools, or user patterns drive spend.",
        },
        {
          id: "cost-4",
          title: "Budget Controls",
          content:
            "Configurable spend limits per agent, per user, or per time window. Alerts fire before limits are hit; hard caps prevent runaway costs.",
          description:
            "Production AI without budget guardrails is a billing surprise waiting to happen. Proactive controls keep costs predictable.",
        },
      ],
    },
    {
      id: "runtime",
      title: "Runtime",
      description: "Serverless deployment, CI/CD, and infrastructure as code",
      icon: "Zap",
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500",
      bgColor: "bg-pink-500/5",
      textColor: "text-pink-500",
      subCards: [
        {
          id: "runtime-1",
          title: "Serverless Execution",
          content:
            "Agents run on AgentCore Runtime with microVM isolation per session. Each request gets its own isolated execution environment with consumption-based scaling.",
          description:
            "No shared state between sessions, no noisy-neighbor issues, and no servers to manage or patch. Scales to zero, scales to thousands.",
        },
        {
          id: "runtime-2",
          title: "Infrastructure as Code",
          content:
            "The entire environment — networking, data stores, tool functions, agent resources, observability, and metrics — is defined in CDK stacks. Fully reproducible.",
          description:
            "Spin up a new environment for a customer POC in one command. Every resource is auditable, version-controlled, and consistent across deployments.",
        },
        {
          id: "runtime-3",
          title: "CI/CD Pipeline",
          content:
            "A self-mutating pipeline deploys infrastructure and agent code on every push. Agents, tools, and prompts all flow through the same promotion path.",
          description:
            "Changes to agent logic, tool integrations, or infrastructure go through automated build, test, and deploy. No manual steps, no drift between environments.",
        },
        {
          id: "runtime-4",
          title: "Rate Limiting & Throttling",
          content:
            "Configurable request rate limits per user, per agent, and per API endpoint. Protects backend systems and model endpoints from burst traffic.",
          description:
            "A single runaway client shouldn't exhaust model quotas or overwhelm downstream tools. Rate limits keep the system stable under load.",
        },
      ],
    },
  ] as ConsoleCard[],

  chat: {
    placeholder: "Type your message here...",
    emptyState: "Start a conversation to see responses here",
  },

  trace: {
    title: "Live Trace",
    emptyState: "Trace events will appear here when you send a message",
  },
};
