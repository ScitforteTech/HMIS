import express from "express";
import { ResusRecord } from "../../models/patientEncounterForm/resusRecordModel.js";

const router = express.Router();

// Create a new ResusRecord
router.post("/", async (req, res) => {
  try {
    const resusRecord = new ResusRecord(req.body);
    await resusRecord.save();
    res.status(201).json(resusRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all ResusRecords
router.get("/", async (req, res) => {
  try {
    const records = await ResusRecord.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single ResusRecord by ID
router.get("/:id", async (req, res) => {
  try {
    const record = await ResusRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a ResusRecord by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedRecord = await ResusRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecord)
      return res.status(404).json({ message: "Record not found" });
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a ResusRecord by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecord = await ResusRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord)
      return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
