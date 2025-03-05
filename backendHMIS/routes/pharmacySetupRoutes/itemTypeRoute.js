import express from "express";
import { ItemType } from "../../models/pharmacySetup/itemTypeModel.js";

const router = express.Router();

// Create a new Item Type
router.post("/", async (req, res) => {
  try {
    const { itemCategory, itemType } = req.body;
    const newItemType = new ItemType({ itemCategory, itemType });
    await newItemType.save();
    res.status(201).json(newItemType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Item Types
router.get("/", async (req, res) => {
  try {
    const itemTypes = await ItemType.find();
    res.status(200).json(itemTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single Item Type by ID
router.get("/:id", async (req, res) => {
  try {
    const itemType = await ItemType.findById(req.params.id);
    if (!itemType) return res.status(404).json({ message: "Item Type not found" });
    res.status(200).json(itemType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Item Type by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedItemType = await ItemType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedItemType) return res.status(404).json({ message: "Item Type not found" });
    res.status(200).json(updatedItemType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an Item Type by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedItemType = await ItemType.findByIdAndDelete(req.params.id);
    if (!deletedItemType) return res.status(404).json({ message: "Item Type not found" });
    res.status(200).json({ message: "Item Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
