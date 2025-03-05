import express from "express";
import { Unit } from "../../models/pharmacySetup/unitModel.js"; // Ensure correct path

const router = express.Router();

// ➤ Create a new Unit
router.post("/", async (req, res) => {
  try {
    const unit = new Unit(req.body);
    await unit.save();
    res.status(201).json(unit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ➤ Get all Units
router.get("/", async (req, res) => {
  try {
    const units = await Unit.find();
    res.status(200).json(units);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ➤ Get a single Unit by ID
router.get("/:id", async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);
    if (!unit) return res.status(404).json({ message: "Unit not found" });
    res.status(200).json(unit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ➤ Update a Unit by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUnit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUnit) return res.status(404).json({ message: "Unit not found" });
    res.status(200).json(updatedUnit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ➤ Delete a Unit by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUnit = await Unit.findByIdAndDelete(req.params.id);
    if (!deletedUnit) return res.status(404).json({ message: "Unit not found" });
    res.status(200).json({ message: "Unit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
