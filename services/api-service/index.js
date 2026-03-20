const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Execute task (agent-driven)
app.post("/execute", (req, res) => {
  const { task, input } = req.body;

  // Simulated task handling
  if (task === "get-user-data") {
    return res.json({
      status: "success",
      data: {
        userId: input?.userId || "unknown",
        name: "John Doe"
      }
    });
  }

  return res.json({
    status: "error",
    message: "Unknown task"
  });
});

// Start server
app.listen(3000, () => {
  console.log("API running on port 3000");
});
