import express from "express";
import { FavoriteDiagnosis } from "../../models/favourites/favDiagnosisModel.js";

const router = express.Router();

// Create a new favorite diagnosis
router.post("/", async (req, res) => {
  try {
    const newFavorite = new FavoriteDiagnosis(req.body);
    const savedFavorite = await newFavorite.save();
    res.status(201).json(savedFavorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all favorite diagnoses
router.get("/", async (req, res) => {
  try {
    const favorites = await FavoriteDiagnosis.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single favorite diagnosis by ID
router.get("/:id", async (req, res) => {
  try {
    const favorite = await FavoriteDiagnosis.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a favorite diagnosis by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedFavorite = await FavoriteDiagnosis.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFavorite) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(updatedFavorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a favorite diagnosis by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedFavorite = await FavoriteDiagnosis.findByIdAndDelete(req.params.id);
    if (!deletedFavorite) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
