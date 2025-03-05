import express from "express";
import { Diagnosis } from "../../models/patientEncounterForm/patientDiagnosisModel.js"; 

const router = express.Router();

// Create a New Diagnosis
router.post("/", async (req, res) => {
  try {
    const { diagnosis, chapter, remarks } = req.body;

    const newDiagnosis = new Diagnosis({
      diagnosis,
      chapter,
      remarks,
    });

    const savedDiagnosis = await newDiagnosis.save();
    res.status(201).json(savedDiagnosis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Diagnoses
router.get("/", async (req, res) => {
  try {
    const diagnoses = await Diagnosis.find();
    res.status(200).json({ count: diagnoses.length, data: diagnoses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a Diagnosis by ID
router.get("/:id", async (req, res) => {
  try {
    const diagnosis = await Diagnosis.findById(req.params.id);
    if (!diagnosis) {
      return res.status(404).json({ message: "Diagnosis not found" });
    }
    res.status(200).json(diagnosis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Diagnosis by ID
router.put("/:id", async (req, res) => {
  try {
    const { diagnosis, chapter, remarks } = req.body;

    const updatedDiagnosis = await Diagnosis.findByIdAndUpdate(
      req.params.id,
      { diagnosis, chapter, remarks },
      { new: true }
    );

    if (!updatedDiagnosis) {
      return res.status(404).json({ message: "Diagnosis not found" });
    }

    res.status(200).json(updatedDiagnosis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a Diagnosis by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedDiagnosis = await Diagnosis.findByIdAndDelete(req.params.id);
    if (!deletedDiagnosis) {
      return res.status(404).json({ message: "Diagnosis not found" });
    }
    res.status(200).json({ message: "Diagnosis deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
