import express from "express";
import { Medication } from "../../models/patientEncounterForm/medicationModel.js";

const router = express.Router();

// Create a new medication entry
router.post("/", async (req, res) => {
  try {
    const medication = new Medication(req.body);
    await medication.save();
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all medications
router.get("/", async (req, res) => {
  try {
    const medications = await Medication.find();
    res.status(200).json(medications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single medication by ID
router.get("/:id", async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id);
    if (!medication) {
      return res.status(404).json({ message: "Medication not found" });
    }
    res.status(200).json(medication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a medication by ID
router.put("/:id", async (req, res) => {
  try {
    const medication = await Medication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!medication) {
      return res.status(404).json({ message: "Medication not found" });
    }
    res.status(200).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a medication by ID
router.delete("/:id", async (req, res) => {
  try {
    const medication = await Medication.findByIdAndDelete(req.params.id);
    if (!medication) {
      return res.status(404).json({ message: "Medication not found" });
    }
    res.status(200).json({ message: "Medication deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
