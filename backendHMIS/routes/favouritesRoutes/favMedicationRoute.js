import express from "express";
import { FavoriteMedication } from "../../models/favourites/favMedicationModel.js";

const router = express.Router();

// Create a new favorite medication
router.post("/", async (req, res) => {
  try {
    const favoriteMedication = new FavoriteMedication(req.body);
    await favoriteMedication.save();
    res.status(201).json(favoriteMedication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all favorite medications
router.get("/", async (req, res) => {
  try {
    const favoriteMedications = await FavoriteMedication.find();
    res.status(200).json(favoriteMedications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single favorite medication by ID
router.get("/:id", async (req, res) => {
  try {
    const favoriteMedication = await FavoriteMedication.findById(req.params.id);
    if (!favoriteMedication) {
      return res.status(404).json({ message: "Favorite medication not found" });
    }
    res.status(200).json(favoriteMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a favorite medication by ID
router.put("/:id", async (req, res) => {
  try {
    const favoriteMedication = await FavoriteMedication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!favoriteMedication) {
      return res.status(404).json({ message: "Favorite medication not found" });
    }
    res.status(200).json(favoriteMedication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a favorite medication by ID
router.delete("/:id", async (req, res) => {
  try {
    const favoriteMedication = await FavoriteMedication.findByIdAndDelete(req.params.id);
    if (!favoriteMedication) {
      return res.status(404).json({ message: "Favorite medication not found" });
    }
    res.status(200).json({ message: "Favorite medication deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
