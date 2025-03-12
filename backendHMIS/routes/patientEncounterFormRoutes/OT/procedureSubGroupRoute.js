import express from "express";
import { ProcedureSubGroup } from "../../models/patientEncounterForm/OT/procedureSubGroupModel.js";

const router = express.Router();

// Create a new Procedure Sub Group
router.post("/", async (req, res) => {
  try {
    const newProcedureSubGroup = new ProcedureSubGroup(req.body);
    const savedProcedureSubGroup = await newProcedureSubGroup.save();
    res.status(201).json(savedProcedureSubGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Procedure Sub Groups
router.get("/", async (req, res) => {
  try {
    const procedureSubGroups = await ProcedureSubGroup.find();
    res.status(200).json(procedureSubGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single Procedure Sub Group by ID
router.get("/:id", async (req, res) => {
  try {
    const procedureSubGroup = await ProcedureSubGroup.findById(req.params.id);
    if (!procedureSubGroup) {
      return res.status(404).json({ message: "Procedure Sub Group not found" });
    }
    res.status(200).json(procedureSubGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Procedure Sub Group by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProcedureSubGroup = await ProcedureSubGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProcedureSubGroup) {
      return res.status(404).json({ message: "Procedure Sub Group not found" });
    }
    res.status(200).json(updatedProcedureSubGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a Procedure Sub Group by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProcedureSubGroup = await ProcedureSubGroup.findByIdAndDelete(req.params.id);
    if (!deletedProcedureSubGroup) {
      return res.status(404).json({ message: "Procedure Sub Group not found" });
    }
    res.status(200).json({ message: "Procedure Sub Group deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
