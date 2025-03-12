import express from "express";
import { Investigation } from "../../models/patientEncounterForm/investigationModel.js";

const router = express.Router();

// Create a new Investigation
router.post("/", async (req, res) => {
  try {
    const newInvestigation = new Investigation(req.body);
    const savedInvestigation = await newInvestigation.save();
    res.status(201).json(savedInvestigation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Investigations
router.get("/", async (req, res) => {
  try {
    const investigations = await Investigation.find();
    res.status(200).json(investigations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single Investigation by ID
router.get("/:id", async (req, res) => {
  try {
    const investigation = await Investigation.findById(req.params.id);
    if (!investigation) {
      return res.status(404).json({ message: "Investigation not found" });
    }
    res.status(200).json(investigation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an Investigation by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedInvestigation = await Investigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedInvestigation) {
      return res.status(404).json({ message: "Investigation not found" });
    }
    res.status(200).json(updatedInvestigation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an Investigation by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedInvestigation = await Investigation.findByIdAndDelete(req.params.id);
    if (!deletedInvestigation) {
      return res.status(404).json({ message: "Investigation not found" });
    }
    res.status(200).json({ message: "Investigation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
