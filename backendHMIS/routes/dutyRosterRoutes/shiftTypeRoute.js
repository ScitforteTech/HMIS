import express from "express";
import mongoose from "mongoose";
import { ShiftType } from "../../models/dutyRoster/ShiftTypeModel.js";

const router = express.Router();

// Middleware to validate MongoDB ObjectId
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    next();
};

// Create a new Shift Type
router.post("/", async (req, res) => {
    try {
        const { shiftT } = req.body;

        // Validate shiftT (must be "Morning" or "Evening")
        if (!["Morning", "Evening"].includes(shiftT)) {
            return res.status(400).json({ error: "shiftT must be 'Morning' or 'Evening'" });
        }

        const newShiftType = new ShiftType({ shiftT });
        await newShiftType.save();
        res.status(201).json(newShiftType);
    } catch (error) {
        console.error("Error creating Shift Type:", error);
        res.status(500).json({ error: error.message });
    }
});

// Get all Shift Types
router.get("/", async (req, res) => {
    try {
        const shiftTypes = await ShiftType.find();
        res.status(200).json(shiftTypes);
    } catch (error) {
        console.error("Error fetching Shift Types:", error);
        res.status(500).json({ error: error.message });
    }
});

// Get a Shift Type by ID (with validation)
router.get("/:id", validateObjectId, async (req, res) => {
    try {
        const shiftType = await ShiftType.findById(req.params.id);
        if (!shiftType) {
            return res.status(404).json({ error: "Shift Type not found" });
        }
        res.status(200).json(shiftType);
    } catch (error) {
        console.error("Error fetching Shift Type by ID:", error);
        res.status(500).json({ error: error.message });
    }
});

// Update a Shift Type (with validation)
router.put("/:id", validateObjectId, async (req, res) => {
    try {
        const { shiftT } = req.body;

        // Validate shiftT (must be "Morning" or "Evening")
        if (shiftT && !["Morning", "Evening"].includes(shiftT)) {
            return res.status(400).json({ error: "shiftT must be 'Morning' or 'Evening'" });
        }

        const updatedShiftType = await ShiftType.findByIdAndUpdate(
            req.params.id,
            { shiftT },
            { new: true, runValidators: true }
        );

        if (!updatedShiftType) {
            return res.status(404).json({ error: "Shift Type not found" });
        }
        res.status(200).json(updatedShiftType);
    } catch (error) {
        console.error("Error updating Shift Type:", error);
        res.status(500).json({ error: error.message });
    }
});

// Delete a Shift Type (with validation)
router.delete("/:id", validateObjectId, async (req, res) => {
    try {
        const deletedShiftType = await ShiftType.findByIdAndDelete(req.params.id);
        if (!deletedShiftType) {
            return res.status(404).json({ error: "Shift Type not found" });
        }
        res.status(200).json({ message: "Shift Type deleted successfully" });
    } catch (error) {
        console.error("Error deleting Shift Type:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
