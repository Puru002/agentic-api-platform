# 🤖 AGENTS.md

## Project Context
- This is an agentic AI system
- Uses APIs for execution
- Agents interact with backend services

## Folder Structure
- /agents → AI agents
- /services → backend APIs
- /apis → API contracts
- /docs → documentation

## Commands
- Start API: node services/api-service/index.js
- Run agent: python agents/hello_agent.py

## Rules
- Do not break API contracts
- Always validate inputs
- Keep code modular

## Agent Behavior
- Agents must call APIs (not access DB directly)
- Always return structured responses
