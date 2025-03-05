import express from "express";
import { ItemCategory } from "../../models/pharmacySetup/itemCategoryModel.js"; // Adjust the path if needed

const router = express.Router();

// Add Item Category
router.post("/", async (req, res) => {
  try {
    const { itemCategory, abbreviation, alternative } = req.body;

    const newItemCategory = new ItemCategory({
      itemCategory,
      abbreviation,
      alternative,
    });

    const savedCategory = await newItemCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Item Categories
router.get("/", async (req, res) => {
  try {
    const categories = await ItemCategory.find();
    return res.status(200).json({ count: categories.length, data: categories });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// Get Item Category by ID
router.get("/:id", async (req, res) => {
  try {
    const category = await ItemCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Item Category not found" });
    }
    return res.status(200).json(category);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// Update Item Category
router.put("/:id", async (req, res) => {
  try {
    const { itemCategory, abbreviation, alternative } = req.body;

    const updatedCategory = await ItemCategory.findByIdAndUpdate(
      req.params.id,
      { itemCategory, abbreviation, alternative },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Item Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Item Category
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await ItemCategory.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Item Category not found" });
    }
    return res.status(200).json({ message: "Item Category deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
