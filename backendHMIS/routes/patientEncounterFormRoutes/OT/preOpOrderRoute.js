import express from "express";
import { PreOpOrder } from "../../../models/patientEncounterForm/OT/preOpOrderModel.js";

const router = express.Router();

// Create a new Pre-Op Order
router.post("/", async (req, res) => {
  try {
    const newPreOpOrder = new PreOpOrder(req.body);
    const savedPreOpOrder = await newPreOpOrder.save();
    res.status(201).json(savedPreOpOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Pre-Op Orders
router.get("/", async (req, res) => {
  try {
    const preOpOrders = await PreOpOrder.find();
    res.status(200).json(preOpOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single Pre-Op Order by ID
router.get("/:id", async (req, res) => {
  try {
    const preOpOrder = await PreOpOrder.findById(req.params.id);
    if (!preOpOrder) {
      return res.status(404).json({ message: "Pre-Op Order not found" });
    }
    res.status(200).json(preOpOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Pre-Op Order by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPreOpOrder = await PreOpOrder.findByIdAndUpdate(req.params.id, req.body, { 
      new: true, 
      runValidators: true 
    });
    if (!updatedPreOpOrder) {
      return res.status(404).json({ message: "Pre-Op Order not found" });
    }
    res.status(200).json(updatedPreOpOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a Pre-Op Order by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPreOpOrder = await PreOpOrder.findByIdAndDelete(req.params.id);
    if (!deletedPreOpOrder) {
      return res.status(404).json({ message: "Pre-Op Order not found" });
    }
    res.status(200).json({ message: "Pre-Op Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
