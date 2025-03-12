import express from "express";
import { FeeStructure } from "../../models/feeStructureModel.js";

const router = express.Router();

// Create a new fee structure
router.post("/", async (req, res) => {
  try {
    const feeStructure = new FeeStructure(req.body);
    await feeStructure.save();
    res.status(201).json(feeStructure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all fee structures
router.get("/", async (req, res) => {
  try {
    const feeStructures = await FeeStructure.find();
    res.status(200).json(feeStructures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single fee structure by ID
router.get("/:id", async (req, res) => {
  try {
    const feeStructure = await FeeStructure.findById(req.params.id);
    if (!feeStructure) return res.status(404).json({ message: "Fee Structure not found" });
    res.status(200).json(feeStructure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a fee structure by ID
router.put("/:id", async (req, res) => {
  try {
    const feeStructure = await FeeStructure.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!feeStructure) return res.status(404).json({ message: "Fee Structure not found" });
    res.status(200).json(feeStructure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a fee structure by ID
router.delete("/:id", async (req, res) => {
  try {
    const feeStructure = await FeeStructure.findByIdAndDelete(req.params.id);
    if (!feeStructure) return res.status(404).json({ message: "Fee Structure not found" });
    res.status(200).json({ message: "Fee Structure deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
