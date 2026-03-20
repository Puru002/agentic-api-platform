# API Service

This service provides endpoints used by agents to execute tasks.

---

## 🔌 Endpoints

### GET /health

Check service status.

Response:
```json
{
  "status": "ok"
}

Request
{
  "task": "get-user-data",
  "input": {
    "userId": "123"
  }
}

Response
{
  "status": "success",
  "data": {
    "userId": "123",
    "name": "John Doe"
  }
}
