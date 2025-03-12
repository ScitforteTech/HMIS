import express from "express";
import { FavoriteInvestigation } from "../../models/favourites/favInvestigationModel.js";

const router = express.Router();

// Create a new favorite investigation
router.post("/", async (req, res) => {
  try {
    const favoriteInvestigation = new FavoriteInvestigation(req.body);
    await favoriteInvestigation.save();
    res.status(201).json(favoriteInvestigation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all favorite investigations
router.get("/", async (req, res) => {
  try {
    const favoriteInvestigations = await FavoriteInvestigation.find();
    res.json(favoriteInvestigations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single favorite investigation by ID
router.get("/:id", async (req, res) => {
  try {
    const favoriteInvestigation = await FavoriteInvestigation.findById(req.params.id);
    if (!favoriteInvestigation) {
      return res.status(404).json({ message: "Favorite Investigation not found" });
    }
    res.json(favoriteInvestigation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a favorite investigation by ID
router.put("/:id", async (req, res) => {
  try {
    const favoriteInvestigation = await FavoriteInvestigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!favoriteInvestigation) {
      return res.status(404).json({ message: "Favorite Investigation not found" });
    }
    res.json(favoriteInvestigation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a favorite investigation by ID
router.delete("/:id", async (req, res) => {
  try {
    const favoriteInvestigation = await FavoriteInvestigation.findByIdAndDelete(req.params.id);
    if (!favoriteInvestigation) {
      return res.status(404).json({ message: "Favorite Investigation not found" });
    }
    res.json({ message: "Favorite Investigation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
