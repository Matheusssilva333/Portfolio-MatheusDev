import express from "express";
import cors from "cors";

import { projects, skills, experience } from "./constants";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "portfolio-backend", timestamp: new Date().toISOString() });
});

app.get("/api/projects", (_req, res) => {
  res.json(projects);
});

app.get("/api/skills", (_req, res) => {
  res.json(skills);
});

app.get("/api/experience", (_req, res) => {
  res.json(experience);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Portfolio backend rodando em http://localhost:${PORT}`);
});

