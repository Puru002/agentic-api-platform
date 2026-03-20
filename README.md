# Agentic API Platform

A modular platform to build, orchestrate, and manage AI agents using APIs and services.

---

## 🧠 Architecture

This platform follows a 3-layer design:

Agents → APIs → Services

- Agents: Decision-making layer
- APIs: Interface layer
- Services: Execution layer

---

## 📦 Project Structure

agentic-api-platform/
├── agents/
├── apis/
├── services/
│   └── api-service/
├── docs/
├── AGENTS.md
├── README.md

---

## 🔄 How It Works

1. User sends request
2. Agent interprets intent
3. API processes request
4. Service executes logic
5. Response returned

---

## 🚀 Run the API

```bash
cd services/api-service
npm install
node index.js
