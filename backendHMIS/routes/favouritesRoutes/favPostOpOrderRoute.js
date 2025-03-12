import express from "express";
import { FavoritePostOpOrder } from "../../models/favourites/favPostOpOrderModel.js";

const router = express.Router();

// Create a new favorite post-op order
router.post("/", async (req, res) => {
  try {
    const newPostOpOrder = new FavoritePostOpOrder(req.body);
    await newPostOpOrder.save();
    res.status(201).json(newPostOpOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all favorite post-op orders
router.get("/", async (req, res) => {
  try {
    const postOpOrders = await FavoritePostOpOrder.find();
    res.status(200).json(postOpOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single favorite post-op order by ID
router.get("/:id", async (req, res) => {
  try {
    const postOpOrder = await FavoritePostOpOrder.findById(req.params.id);
    if (!postOpOrder) {
      return res.status(404).json({ message: "Post-op order not found" });
    }
    res.status(200).json(postOpOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a favorite post-op order by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPostOpOrder = await FavoritePostOpOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPostOpOrder) {
      return res.status(404).json({ message: "Post-op order not found" });
    }
    res.status(200).json(updatedPostOpOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a favorite post-op order by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPostOpOrder = await FavoritePostOpOrder.findByIdAndDelete(req.params.id);
    if (!deletedPostOpOrder) {
      return res.status(404).json({ message: "Post-op order not found" });
    }
    res.status(200).json({ message: "Post-op order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
