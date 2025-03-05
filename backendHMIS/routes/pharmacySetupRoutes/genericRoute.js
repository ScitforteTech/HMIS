import express from "express";
import { Generic } from "../../models/pharmacySetup/genericModel.js";
const router = express.Router();

// ✅ Add Generic
router.post("/", async (req, res) => {
  try {
    const { generic } = req.body;

    if (!generic) {
      return res.status(400).json({ message: "Generic name is required" });
    }

    const newGeneric = new Generic({ generic });

    const savedGeneric = await newGeneric.save();
    res.status(201).json(savedGeneric);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get All Generics
router.get("/", async (req, res) => {
  try {
    const generics = await Generic.find();
    res.status(200).json({ count: generics.length, data: generics });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get Generic by ID
router.get("/:id", async (req, res) => {
  try {
    const generic = await Generic.findById(req.params.id);
    if (!generic) {
      return res.status(404).json({ message: "Generic not found" });
    }
    res.status(200).json(generic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Update Generic
router.put("/:id", async (req, res) => {
  try {
    const { generic } = req.body;

    const updatedGeneric = await Generic.findByIdAndUpdate(
      req.params.id,
      { generic },
      { new: true }
    );

    if (!updatedGeneric) {
      return res.status(404).json({ message: "Generic not found" });
    }

    res.status(200).json(updatedGeneric);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Delete Generic
router.delete("/:id", async (req, res) => {
  try {
    const deletedGeneric = await Generic.findByIdAndDelete(req.params.id);
    if (!deletedGeneric) {
      return res.status(404).json({ message: "Generic not found" });
    }
    res.status(200).json({ message: "Generic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
