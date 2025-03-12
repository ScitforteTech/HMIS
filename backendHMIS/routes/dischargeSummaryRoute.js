import express from "express";
import { DischargeSummary } from "../../models/DischargeSummary.js";

const router = express.Router();

// Create a new discharge summary
router.post("/", async (req, res) => {
  try {
    const dischargeSummary = new DischargeSummary(req.body);
    await dischargeSummary.save();
    res.status(201).json(dischargeSummary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all discharge summaries
router.get("/", async (req, res) => {
  try {
    const summaries = await DischargeSummary.find();
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single discharge summary by ID
router.get("/:id", async (req, res) => {
  try {
    const summary = await DischargeSummary.findById(req.params.id);
    if (!summary) {
      return res.status(404).json({ message: "Discharge Summary not found" });
    }
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a discharge summary by ID
router.put("/:id", async (req, res) => {
  try {
    const summary = await DischargeSummary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!summary) {
      return res.status(404).json({ message: "Discharge Summary not found" });
    }
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a discharge summary by ID
router.delete("/:id", async (req, res) => {
  try {
    const summary = await DischargeSummary.findByIdAndDelete(req.params.id);
    if (!summary) {
      return res.status(404).json({ message: "Discharge Summary not found" });
    }
    res.status(200).json({ message: "Discharge Summary deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
