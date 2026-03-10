# Inferdat AI Frontend

A modern React application built with Vite, TypeScript, and Tailwind CSS following the Inferdat Design System.

## Features

- **Console Interface**: Three-panel layout with cards, chat, and live trace
- **Real-time Chat**: ChatGPT-style interface with message history
- **Live Trace**: Real-time event logging and API activity monitoring
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Type-Safe**: Full TypeScript coverage with strict mode
- **Animated**: Smooth transitions using Framer Motion
- **Design System**: Follows Inferdat brand guidelines

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (icons)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/dashboard`

The dashboard includes three main tabs:

- **Console**: Chat interface with live trace
- **Health Dashboard**: System health monitoring
- **Documents**: Document upload for AWS Bedrock

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header and layout components
│   ├── ui/              # Reusable UI primitives (Button, Card, Input)
│   └── console/         # Console-specific components
├── content/             # Content configuration files
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Dashboard Page

The unified dashboard page (`/dashboard`) features three main tabs:

### Console Tab

- **Left Panel**: Vertically stacked cards with titles and subtitles
- **Middle Panel**: Chat interface for user interactions
- **Right Panel**: Live trace showing real-time API activity

### Health Dashboard Tab

- **Overall Status Banner**: System-wide health status with key metrics
- **Metrics Cards**: Uptime, active incidents, operational services, total services
- **Sub-tabs**:
  - **Overview**: Grid of all services with status and uptime
  - **Active Issues**: Current incidents with expandable timeline
  - **Scheduled Maintenance**: Upcoming maintenance windows
  - **Incident History**: Past resolved incidents
- **Service Cards**: Individual service health with uptime percentage
- **Incident Cards**: Expandable cards showing incident details and updates
- **Status Indicators**: Color-coded badges (green=operational, yellow=degraded, red=outage)

### Documents Tab

- **Drag & Drop Upload**: Intuitive file upload with drag and drop support
- **File Validation**: Supports PDF, DOC, DOCX, TXT, MD, XLS, XLSX, CSV (max 50MB)
- **Role Selection**: Assign documents to roles (Admin, Sales, Marketing, Support, Engineering, Finance)
- **Metadata**: Add tags and descriptions to documents
- **Upload Progress**: Real-time progress indicator with status updates
- **Document List**: View all uploaded documents with:
  - Status badges (uploading, processing, ready, failed)
  - File information (size, upload time, uploader)
  - Tags and descriptions
  - Knowledge Base ID (for AWS Bedrock integration)
  - Delete functionality
- **AWS Bedrock Integration**: Documents are uploaded to AWS Bedrock Knowledge Base for RAG (Retrieval-Augmented Generation)

## Design System

This project follows the Inferdat Design System with:

- Purple (#7C3AED) and pink (#EC4899) gradient brand colors
- Inter font family with optimized typography scale
- Consistent spacing and layout patterns
- Subtle animations and hover states
- Accessibility-first approach

See `ui_design_standards.md` for complete design guidelines.

## Development Guidelines

- No `any` types - use proper TypeScript types
- Components are modular and reusable
- Content separated from components
- Follow design system color tokens
- Use `cn()` utility for className merging
- Respect `prefers-reduced-motion`

## License

MIT
