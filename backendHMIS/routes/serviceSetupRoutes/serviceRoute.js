import express from "express";
const router = express.Router();
import { Service } from "../../models/serviceSetup/serviceModel.js";
// Create a new service
router.post("/add", async (req, res) => {
  try {
    const { groupId, subGroupId, serviceName, type } = req.body;
    
    const newService = new Service({
      groupId,
      subGroupId,
      serviceName,
      type,
    });

    await newService.save();
    res.status(201).json({ message: "Service created successfully", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
});

// Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().populate("groupId subGroupId");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
});

// Get a single service by ID
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("groupId subGroupId");
    if (!service) return res.status(404).json({ message: "Service not found" });

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service", error: error.message });
  }
});

// Update a service by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedService) return res.status(404).json({ message: "Service not found" });

    res.status(200).json({ message: "Service updated successfully", service: updatedService });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
});

// Delete a service by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ message: "Service not found" });

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
});

export default router;
