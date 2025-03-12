import express from "express";
import { NextVisit } from "../../models/patientEncounterForm/nextVisitModel.js";

const router = express.Router();

// Create a new Next Visit
router.post("/", async (req, res) => {
  try {
    const nextVisit = new NextVisit(req.body);
    await nextVisit.save();
    res.status(201).json(nextVisit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Next Visits
router.get("/", async (req, res) => {
  try {
    const nextVisits = await NextVisit.find();
    res.status(200).json(nextVisits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single Next Visit by ID
router.get("/:id", async (req, res) => {
  try {
    const nextVisit = await NextVisit.findById(req.params.id);
    if (!nextVisit) return res.status(404).json({ message: "Next Visit not found" });
    res.status(200).json(nextVisit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Next Visit
router.put("/:id", async (req, res) => {
  try {
    const nextVisit = await NextVisit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!nextVisit) return res.status(404).json({ message: "Next Visit not found" });
    res.status(200).json(nextVisit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a Next Visit
router.delete("/:id", async (req, res) => {
  try {
    const nextVisit = await NextVisit.findByIdAndDelete(req.params.id);
    if (!nextVisit) return res.status(404).json({ message: "Next Visit not found" });
    res.status(200).json({ message: "Next Visit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
