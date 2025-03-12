import express from "express";
import { OrganizationUnitShift } from "../../models/dutyRoster/organizationUnitShiftModel.js";

const router = express.Router();

// Create a new Organization Unit shift
router.post("/", async (req, res) => {
  try {
    const shift = new OrganizationUnitShift(req.body);
    await shift.save();
    res.status(201).json(shift);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Organization Unit shifts
router.get("/", async (req, res) => {
  try {
    const shifts = await OrganizationUnitShift.find();
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a Organization Unit shift by ID
router.get("/:id", async (req, res) => {
  try {
    const shift = await OrganizationUnitShift.findById(req.params.id);
    if (!shift) {
      return res.status(404).json({ error: "Shift not found" });
    }
    res.status(200).json(shift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Organization Unit shift by ID
router.put("/:id", async (req, res) => {
  try {
    const shift = await OrganizationUnitShift.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!shift) {
      return res.status(404).json({ error: "Shift not found" });
    }
    res.status(200).json(shift);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Organization Unit shift by ID
router.delete("/:id", async (req, res) => {
  try {
    const shift = await OrganizationUnitShift.findByIdAndDelete(req.params.id);
    if (!shift) {
      return res.status(404).json({ error: "Shift not found" });
    }
    res.status(200).json({ message: "Shift deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
