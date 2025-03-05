import express from "express";
import { ShiftType } from "../../models/dutyRoster/ShiftType.js";

const router = express.Router();

// Create a new Shift Type
router.post("/", async (req, res) => {
  try {
    const { shiftT } = req.body;
    const newShiftType = new ShiftType({ shiftT });
    await newShiftType.save();
    res.status(201).json(newShiftType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all Shift Types
router.get("/", async (req, res) => {
  try {
    const shiftTypes = await ShiftType.find();
    res.status(200).json(shiftTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a Shift Type by ID
router.get("/:id", async (req, res) => {
  try {
    const shiftType = await ShiftType.findById(req.params.id);
    if (!shiftType) return res.status(404).json({ message: "Shift Type not found" });
    res.status(200).json(shiftType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Shift Type
router.put("/:id", async (req, res) => {
  try {
    const updatedShiftType = await ShiftType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedShiftType) return res.status(404).json({ message: "Shift Type not found" });
    res.status(200).json(updatedShiftType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Shift Type
router.delete("/:id", async (req, res) => {
  try {
    const deletedShiftType = await ShiftType.findByIdAndDelete(req.params.id);
    if (!deletedShiftType) return res.status(404).json({ message: "Shift Type not found" });
    res.status(200).json({ message: "Shift Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
