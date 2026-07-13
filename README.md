# 🚀 90 Days Fullstack + AI Roadmap

> **Mission:** Become a production-ready Fullstack Developer with practical AI integration in 90 days.

---

# 🎯 Goal

This repository documents my 90-day journey to strengthen my Fullstack development skills while expanding into AI and backend engineering.

By the end of this roadmap, I aim to:

* Build production-ready Fullstack applications.
* Master modern React and Next.js development.
* Refresh and deepen my NestJS expertise.
* Learn Go through real backend services.
* Learn Python for AI engineering.
* Design and build a microservices architecture.
* Deploy a complete production environment.
* Create portfolio projects ready for technical interviews.

---

# 📖 Project

Instead of building isolated demo applications, this roadmap focuses on developing a complete Fullstack + AI ecosystem.

The system consists of:

* A modern web application.
* Three backend services.
* AI integration.
* Dockerized infrastructure.
* CI/CD pipeline.
* Production deployment.

The objective is to simulate how a real software team develops modern cloud applications.

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Chakra UI
* TanStack Query
* React Hook Form
* Zod

---

## Backend

### Core API

* NestJS
* GraphQL
* REST API
* JWT Authentication

### AI Service

* Python
* FastAPI

### Worker Service

* Go
* Gin (or Fiber)

---

## Database

* PostgreSQL
* Prisma ORM
* Redis

---

## AI

* OpenAI API
* Claude API
* LangChain
* MCP (Model Context Protocol)
* RAG (Retrieval-Augmented Generation)

---

## DevOps

* Docker
* Docker Compose
* Nginx
* GitHub Actions
* Vercel
* Railway

---

## Testing

* Vitest
* Playwright
* Postman

---

# 🏛 Architecture

```text
                        Next.js + Chakra UI
                               │
                               ▼
                     Core API (NestJS)
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
      Auth / Business      AI Service      Worker Service
          (NestJS)          (Python)            (Go)
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                     PostgreSQL + Redis
```

### Service Responsibilities

### 🟢 Core API (NestJS)

Responsible for:

* Authentication
* User Management
* Business Logic
* Database Access
* REST API
* GraphQL API

---

### 🤖 AI Service (Python)

Responsible for:

* Prompt Processing
* LLM Integration
* Chat Completion
* RAG
* Embedding
* AI Agent
* AI Utilities

---

### ⚡ Worker Service (Go)

Responsible for:

* Background Jobs
* Queue Processing
* Email Sending
* Scheduled Tasks
* File Processing
* Notification Service

---

# 🗺 90-Day Roadmap

## Phase 1 — Foundation (Day 1–30)

### Frontend

* Next.js
* React
* TypeScript
* Chakra UI
* Authentication
* Dashboard UI

### Backend

* NestJS Setup
* PostgreSQL
* Prisma
* JWT
* Docker

### Goal

Build a production-ready Fullstack foundation.

---

## Phase 2 — AI & Backend Expansion (Day 31–60)

### Python

* FastAPI
* AI API
* Prompt Engineering
* LangChain
* MCP
* RAG

### Go

* Gin/Fiber
* Background Worker
* Queue
* Goroutines
* Channels

### Goal

Learn two additional backend languages through real services.

---

## Phase 3 — Production (Day 61–90)

### Infrastructure

* Docker Compose
* Reverse Proxy
* CI/CD
* Monitoring
* Logging

### Portfolio

* Deploy Applications
* Documentation
* Technical Blog
* GitHub Cleanup
* Resume Update
* Interview Preparation

### Goal

Deliver a production-ready portfolio.

---

# 📂 Repository Structure

```text
.
├── apps/
│   └── web/                # Next.js frontend
│
├── services/
│   ├── api/                # NestJS
│   ├── ai/                 # Python
│   └── worker/             # Go
│
├── docker/
├── docs/
├── scripts/
└── README.md
```

---

# 📸 Screenshots

> Coming soon...

---

# 📚 Daily Journal

Track daily progress throughout the 90-day journey.

* Day 01
* Day 02
* Day 03
* ...

---

# ✅ Milestones

* [ ] Complete Frontend Foundation
* [ ] Complete NestJS Core API
* [ ] Complete Python AI Service
* [ ] Complete Go Worker Service
* [ ] Dockerize the entire system
* [ ] Deploy to production
* [ ] Write technical documentation
* [ ] Publish portfolio
* [ ] Prepare for technical interviews

---

# 🎓 Learning Outcomes

After completing this roadmap, I expect to confidently demonstrate:

* Modern React & Next.js development
* Fullstack application architecture
* NestJS backend engineering
* Python AI development
* Go concurrency fundamentals
* Microservices communication
* Dockerized deployment
* Production-ready software engineering practices

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.
