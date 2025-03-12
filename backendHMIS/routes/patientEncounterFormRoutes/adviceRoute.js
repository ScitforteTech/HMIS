import express from "express";
import { Advice } from "../../models/patientEncounterForm/adviceModel.js";

const router = express.Router();

// Create a new advice entry
router.post("/", async (req, res) => {
  try {
    const advice = new Advice(req.body);
    await advice.save();
    res.status(201).json(advice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all advice entries
router.get("/", async (req, res) => {
  try {
    const advices = await Advice.find();
    res.status(200).json(advices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single advice entry by ID
router.get("/:id", async (req, res) => {
  try {
    const advice = await Advice.findById(req.params.id);
    if (!advice) {
      return res.status(404).json({ message: "Advice not found" });
    }
    res.status(200).json(advice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an advice entry by ID
router.put("/:id", async (req, res) => {
  try {
    const advice = await Advice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!advice) {
      return res.status(404).json({ message: "Advice not found" });
    }
    res.status(200).json(advice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an advice entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const advice = await Advice.findByIdAndDelete(req.params.id);
    if (!advice) {
      return res.status(404).json({ message: "Advice not found" });
    }
    res.status(200).json({ message: "Advice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
