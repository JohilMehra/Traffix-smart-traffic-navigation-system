import express from "express";
import { edges } from "./graph.js";
import { dijkstra } from "./dijkstra.js";

const router = express.Router();

// Shortest path API
router.get("/shortest", (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({ error: "Missing start or end node" });
  }

  const result = dijkstra(edges, start, end);

  res.json(result);
});

// Traffic update (random weights)
router.get("/update", (req, res) => {
  for (let node in edges) {
    edges[node].forEach(edge => {
      edge.weight = Math.floor(Math.random() * 10) + 1;
    });
  }

  res.json({ message: "Traffic updated", edges });
});

export default router;