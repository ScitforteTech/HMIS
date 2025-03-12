import express from "express";
import { Leave } from "../../models/patientEncounterForm/leaveModel.js";

const router = express.Router();

// Create a new leave record
router.post("/", async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all leave records
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single leave record by ID
router.get("/:id", async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: "Leave record not found" });
    }
    res.json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a leave record by ID
router.put("/:id", async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!leave) {
      return res.status(404).json({ message: "Leave record not found" });
    }
    res.json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a leave record by ID
router.delete("/:id", async (req, res) => {
  try {
    const leave = await Leave.findByIdAndDelete(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: "Leave record not found" });
    }
    res.json({ message: "Leave record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
