# Project Structure

## Overview

A production-ready React + TypeScript application with proper component separation and modular architecture following the Inferdat Design System.

## Directory Structure

```
inferdat-ai-frontend/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── ConsoleTab.tsx          # Console tab content (chat + trace)
│   │   │   ├── HealthTab.tsx           # Health dashboard tab content
│   │   │   ├── DocumentsTab.tsx        # Document upload tab content
│   │   │   └── TabNavigation.tsx       # Reusable tab navigation component
│   │   ├── layout/
│   │   │   └── Header.tsx              # Fixed header with logo and user info
│   │   ├── ui/
│   │   │   ├── Button.tsx              # Reusable button (primary, secondary, ghost)
│   │   │   ├── Card.tsx                # Animated card with hover effects
│   │   │   ├── Input.tsx               # Form input with focus states
│   │   │   ├── Select.tsx              # Dropdown select component
│   │   │   └── Textarea.tsx            # Textarea component
│   │   ├── console/
│   │   │   ├── CardList.tsx            # Left panel - vertically stacked cards
│   │   │   ├── ChatPanel.tsx           # Middle panel - chat interface
│   │   │   └── TracePanel.tsx          # Right panel - live trace events
│   │   ├── health/
│   │   │   ├── StatusBadge.tsx         # Status indicator badges
│   │   │   ├── MetricsCard.tsx         # Metrics display cards
│   │   │   ├── ServiceCard.tsx         # Service status cards
│   │   │   ├── IncidentCard.tsx        # Incident cards with timeline
│   │   │   └── MaintenanceCard.tsx     # Maintenance window cards
│   │   └── document/
│   │       ├── FileUploadZone.tsx      # Drag & drop file upload
│   │       └── DocumentCard.tsx        # Document display card
│   ├── content/
│   │   ├── console.ts                  # Console page content config
│   │   ├── health.ts                   # Health dashboard content & mock data
│   │   └── document.ts                 # Document upload content & mock data
│   ├── hooks/
│   │   ├── useChat.ts                  # Chat state management hook
│   │   ├── useTrace.ts                 # Trace events management hook
│   │   └── useFileUpload.ts            # File upload logic hook
│   ├── lib/
│   │   └── utils.ts                    # Utility functions (cn for className merging)
│   ├── pages/
│   │   ├── DashboardPage.tsx           # Main unified dashboard with tabs
│   │   ├── ConsolePage.tsx             # (Legacy) Standalone console page
│   │   ├── HealthDashboard.tsx         # (Legacy) Standalone health page
│   │   └── DocUploadPage.tsx           # (Legacy) Standalone upload page
│   ├── types/
│   │   ├── index.ts                    # Common types (Message, Trace, Card, etc.)
│   │   ├── health.ts                   # Health dashboard types
│   │   └── document.ts                 # Document upload types
│   ├── App.tsx                         # Router configuration
│   ├── main.tsx                        # Application entry point
│   └── index.css                       # Global styles and Tailwind directives
├── tailwind.config.js                  # Tailwind configuration with design tokens
├── postcss.config.js                   # PostCSS configuration
├── vite.config.ts                      # Vite configuration with path aliases
├── tsconfig.json                       # TypeScript configuration
├── tsconfig.app.json                   # App-specific TypeScript config
├── package.json                        # Dependencies and scripts
└── README.md                           # Project documentation
```

## Component Architecture

### Separation of Concerns

**Pages** (`src/pages/`)

- Top-level route components
- Minimal logic, mostly composition
- Example: `DashboardPage.tsx` orchestrates tabs

**Tab Components** (`src/components/dashboard/`)

- Self-contained tab content
- Manage their own state and logic
- Reusable across different contexts
- Examples: `ConsoleTab.tsx`, `HealthTab.tsx`, `DocumentsTab.tsx`

**Feature Components** (`src/components/console/`, `health/`, `document/`)

- Domain-specific components
- Encapsulate feature logic
- Examples: `ChatPanel.tsx`, `ServiceCard.tsx`, `FileUploadZone.tsx`

**UI Primitives** (`src/components/ui/`)

- Generic, reusable components
- No business logic
- Examples: `Button.tsx`, `Card.tsx`, `Input.tsx`

**Layout Components** (`src/components/layout/`)

- Structural components
- Example: `Header.tsx`

### Custom Hooks

**useChat** (`src/hooks/useChat.ts`)

- Manages chat messages state
- Handles message sending
- Simulates API responses

**useTrace** (`src/hooks/useTrace.ts`)

- Manages trace events
- Adds events with timestamps
- Simulates trace logging

**useFileUpload** (`src/hooks/useFileUpload.ts`)

- Handles file upload logic
- Validates files
- Tracks upload progress
- Manages document list

### Content Configuration

All user-facing text and mock data live in `/src/content/*.ts` files:

- `console.ts` - Console page content
- `health.ts` - Health dashboard content and mock services/incidents
- `document.ts` - Document upload content and mock documents

### Type Definitions

Strict TypeScript types in `/src/types/`:

- `index.ts` - Common types (Message, TraceEvent, CardItem, etc.)
- `health.ts` - Health-specific types (Service, Incident, MaintenanceWindow, etc.)
- `document.ts` - Document-specific types (UploadedDocument, UserRole, etc.)

## Key Features

### Type Safety

- Strict TypeScript with no `any` types
- Proper type definitions for all components and hooks
- Type-safe props and state management

### Component Reusability

- Modular, single-responsibility components
- Props-based customization
- Forward refs for DOM access
- Composable architecture

### State Management

- Custom hooks for feature-specific logic
- Local state where appropriate
- No global state library needed (yet)

### Styling

- Tailwind CSS with custom design tokens
- Framer Motion for smooth animations
- Responsive design (mobile-first)
- Design system compliance

### Routing

- React Router for navigation
- Single main route: `/dashboard`
- Tab-based navigation within dashboard

## Design Patterns

### Component Composition

```tsx
// Page orchestrates tabs
<DashboardPage>
  <TabNavigation />
  <ConsoleTab /> // Self-contained
  <HealthTab /> // Self-contained
  <DocumentsTab /> // Self-contained
</DashboardPage>
```

### Custom Hooks Pattern

```tsx
// Hook encapsulates logic
const { messages, sendMessage } = useChat();

// Component uses hook
<ChatPanel messages={messages} onSendMessage={sendMessage} />;
```

### Content Separation

```tsx
// Content in separate file
export const consoleContent = {
  cards: [...],
  chat: { placeholder: '...' }
};

// Component imports content
import { consoleContent } from '@/content/console';
```

## Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Future Enhancements

- Connect to real AWS Bedrock API
- Add authentication
- Implement WebSocket for real-time updates
- Add state management library (if needed)
- Add testing (Jest, React Testing Library)
- Add Storybook for component documentation
- Implement error boundaries
- Add loading states
- Implement optimistic updates
