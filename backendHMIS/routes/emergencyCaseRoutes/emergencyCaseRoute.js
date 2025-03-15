import express from "express";
import { EmergencyCase } from "../../models/emergencyCase/emergencyCaseModel.js";

const router = express.Router();

// CREATE a new Emergency Case
router.post("/", async (req, res) => {
  try {
    const newEmergencyCase = new EmergencyCase(req.body);
    const savedCase = await newEmergencyCase.save();
    res.status(201).json(savedCase);
  } catch (error) {
    res.status(500).json({ message: "Error creating emergency case", error });
  }
});

// GET all Emergency Cases
router.get("/", async (req, res) => {
  try {
    const cases = await EmergencyCase.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cases", error });
  }
});

// GET a single Emergency Case by ID
router.get("/:id", async (req, res) => {
  try {
    const emergencyCase = await EmergencyCase.findById(req.params.id);
    if (!emergencyCase) {
      return res.status(404).json({ message: "Emergency case not found" });
    }
    res.status(200).json(emergencyCase);
  } catch (error) {
    res.status(500).json({ message: "Error fetching case", error });
  }
});

// UPDATE an Emergency Case by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedCase = await EmergencyCase.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCase) {
      return res.status(404).json({ message: "Emergency case not found" });
    }

    res.status(200).json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: "Error updating case", error });
  }
});

// DELETE an Emergency Case by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCase = await EmergencyCase.findByIdAndDelete(req.params.id);
    if (!deletedCase) {
      return res.status(404).json({ message: "Emergency case not found" });
    }
    res.status(200).json({ message: "Emergency case deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting case", error });
  }
});

export default router;
