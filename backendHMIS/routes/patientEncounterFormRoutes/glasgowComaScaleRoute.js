import express from "express";
import { GlasgowComaScale } from "../../models/patientEncounterForm/glasgowComaScaleModel.js";

const router = express.Router();

// Create a new Glasgow Coma Scale record
router.post("/", async (req, res) => {
  try {
    const newRecord = new GlasgowComaScale(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Get all Glasgow Coma Scale records
router.get("/", async (req, res) => {
  try {
    const records = await GlasgowComaScale.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single Glasgow Coma Scale record by ID
router.get("/:id", async (req, res) => {
  try {
    const record = await GlasgowComaScale.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Glasgow Coma Scale record by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedRecord = await GlasgowComaScale.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Glasgow Coma Scale record by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecord = await GlasgowComaScale.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
