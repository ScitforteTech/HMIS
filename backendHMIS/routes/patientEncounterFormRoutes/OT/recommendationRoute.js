import express from "express";
import { Recommendation } from "../../../models/patientEncounterForm/OT/recommendationModel.js";

const router = express.Router();

// Create a new Recommendation
router.post("/", async (req, res) => {
  try {
    const newRecommendation = new Recommendation(req.body);
    const savedRecommendation = await newRecommendation.save();
    res.status(201).json(savedRecommendation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Recommendations
router.get("/", async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single Recommendation by ID
router.get("/:id", async (req, res) => {
  try {
    const recommendation = await Recommendation.findById(req.params.id);
    if (!recommendation) {
      return res.status(404).json({ message: "Recommendation not found" });
    }
    res.status(200).json(recommendation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Recommendation by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedRecommendation = await Recommendation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecommendation) {
      return res.status(404).json({ message: "Recommendation not found" });
    }
    res.status(200).json(updatedRecommendation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a Recommendation by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecommendation = await Recommendation.findByIdAndDelete(req.params.id);
    if (!deletedRecommendation) {
      return res.status(404).json({ message: "Recommendation not found" });
    }
    res.status(200).json({ message: "Recommendation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
