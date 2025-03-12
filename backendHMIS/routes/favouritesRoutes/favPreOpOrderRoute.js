import express from "express";
import { FavoritePreOpOrder } from "../../models/favourites/favPreOpOrderModel.js";

const router = express.Router();

// Create a new Favorite Pre-Op Order
router.post("/", async (req, res) => {
  try {
    const favoritePreOpOrder = new FavoritePreOpOrder(req.body);
    await favoritePreOpOrder.save();
    res.status(201).json(favoritePreOpOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Favorite Pre-Op Orders
router.get("/", async (req, res) => {
  try {
    const favoritePreOpOrders = await FavoritePreOpOrder.find();
    res.status(200).json(favoritePreOpOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single Favorite Pre-Op Order by ID
router.get("/:id", async (req, res) => {
  try {
    const favoritePreOpOrder = await FavoritePreOpOrder.findById(req.params.id);
    if (!favoritePreOpOrder) {
      return res.status(404).json({ message: "Favorite Pre-Op Order not found" });
    }
    res.status(200).json(favoritePreOpOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Favorite Pre-Op Order by ID
router.put("/:id", async (req, res) => {
  try {
    const favoritePreOpOrder = await FavoritePreOpOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!favoritePreOpOrder) {
      return res.status(404).json({ message: "Favorite Pre-Op Order not found" });
    }
    res.status(200).json(favoritePreOpOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Favorite Pre-Op Order by ID
router.delete("/:id", async (req, res) => {
  try {
    const favoritePreOpOrder = await FavoritePreOpOrder.findByIdAndDelete(req.params.id);
    if (!favoritePreOpOrder) {
      return res.status(404).json({ message: "Favorite Pre-Op Order not found" });
    }
    res.status(200).json({ message: "Favorite Pre-Op Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
