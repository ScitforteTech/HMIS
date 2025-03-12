import express from "express";
import { Admit } from "../../models/patientEncounterForm/admitModel.js";

const router = express.Router();

// Create a new admission
router.post("/", async (req, res) => {
  try {
    const admit = new Admit(req.body);
    await admit.save();
    res.status(201).json(admit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all admissions
router.get("/", async (req, res) => {
  try {
    const admits = await Admit.find();
    res.json(admits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single admission by ID
router.get("/:id", async (req, res) => {
  try {
    const admit = await Admit.findById(req.params.id);
    if (!admit) {
      return res.status(404).json({ message: "Admission not found" });
    }
    res.json(admit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an admission by ID
router.put("/:id", async (req, res) => {
  try {
    const admit = await Admit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!admit) {
      return res.status(404).json({ message: "Admission not found" });
    }
    res.json(admit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an admission by ID
router.delete("/:id", async (req, res) => {
  try {
    const admit = await Admit.findByIdAndDelete(req.params.id);
    if (!admit) {
      return res.status(404).json({ message: "Admission not found" });
    }
    res.json({ message: "Admission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
