import express from "express";
import { FavoriteAdvice } from "../../models/favourites/favAdviceModel.js";

const router = express.Router();

// Create a new favorite advice
router.post("/", async (req, res) => {
  try {
    const favoriteAdvice = new FavoriteAdvice(req.body);
    await favoriteAdvice.save();
    res.status(201).json(favoriteAdvice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all favorite advice
router.get("/", async (req, res) => {
  try {
    const favoriteAdvices = await FavoriteAdvice.find();
    res.json(favoriteAdvices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single favorite advice by ID
router.get("/:id", async (req, res) => {
  try {
    const favoriteAdvice = await FavoriteAdvice.findById(req.params.id);
    if (!favoriteAdvice) {
      return res.status(404).json({ message: "Favorite Advice not found" });
    }
    res.json(favoriteAdvice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a favorite advice by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedFavoriteAdvice = await FavoriteAdvice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFavoriteAdvice) {
      return res.status(404).json({ message: "Favorite Advice not found" });
    }
    res.json(updatedFavoriteAdvice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a favorite advice by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedFavoriteAdvice = await FavoriteAdvice.findByIdAndDelete(req.params.id);
    if (!deletedFavoriteAdvice) {
      return res.status(404).json({ message: "Favorite Advice not found" });
    }
    res.json({ message: "Favorite Advice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
