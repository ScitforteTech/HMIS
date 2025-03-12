import express from "express";
import { ReceivePatient } from "../../models/receivePatientModel.js";

const router = express.Router();

// Create a new patient record
router.post("/", async (req, res) => {
  try {
    const patient = new ReceivePatient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all received patients
router.get("/", async (req, res) => {
  try {
    const patients = await ReceivePatient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific patient by ID
router.get("/:id", async (req, res) => {
  try {
    const patient = await ReceivePatient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a patient record
router.put("/:id", async (req, res) => {
  try {
    const patient = await ReceivePatient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a patient record
router.delete("/:id", async (req, res) => {
  try {
    const patient = await ReceivePatient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json({ message: "Patient record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
