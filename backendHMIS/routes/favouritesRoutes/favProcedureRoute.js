import express from "express";
import { FavoriteProcedure } from "../../models/favourites/favProcedureModel.js";

const router = express.Router();

// Create a new favorite procedure
router.post("/", async (req, res) => {
  try {
    const favoriteProcedure = new FavoriteProcedure(req.body);
    await favoriteProcedure.save();
    res.status(201).json(favoriteProcedure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all favorite procedures
router.get("/", async (req, res) => {
  try {
    const favoriteProcedures = await FavoriteProcedure.find();
    res.json(favoriteProcedures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific favorite procedure by ID
router.get("/:id", async (req, res) => {
  try {
    const favoriteProcedure = await FavoriteProcedure.findById(req.params.id);
    if (!favoriteProcedure) {
      return res.status(404).json({ message: "Favorite procedure not found" });
    }
    res.json(favoriteProcedure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a favorite procedure by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProcedure = await FavoriteProcedure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProcedure) {
      return res.status(404).json({ message: "Favorite procedure not found" });
    }
    res.json(updatedProcedure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a favorite procedure by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProcedure = await FavoriteProcedure.findByIdAndDelete(req.params.id);
    if (!deletedProcedure) {
      return res.status(404).json({ message: "Favorite procedure not found" });
    }
    res.json({ message: "Favorite procedure deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
