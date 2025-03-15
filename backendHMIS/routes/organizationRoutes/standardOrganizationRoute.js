import express from "express";
import { StandardOrganization } from "../../models/organization/standardOrganizationModel.js";

const router = express.Router();

// Get all Standard Organizations
router.get("/", async (req, res) => {
  try {
    const organizations = await StandardOrganization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organizations", error });
  }
});

// Get a single Standard Organization by ID
router.get("/:id", async (req, res) => {
  try {
    const organization = await StandardOrganization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organization", error });
  }
});

// Create a new Standard Organization
router.post("/", async (req, res) => {
  try {
    const { StdOrganization, description } = req.body;
    if (!StdOrganization || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrganization = new StandardOrganization({ StdOrganization, description });
    await newOrganization.save();
    res.status(201).json(newOrganization);
  } catch (error) {
    res.status(500).json({ message: "Error creating organization", error });
  }
});

// Update a Standard Organization
router.put("/:id", async (req, res) => {
  try {
    const { StdOrganization, description } = req.body;
    const updatedOrganization = await StandardOrganization.findByIdAndUpdate(
      req.params.id,
      { StdOrganization, description },
      { new: true, runValidators: true }
    );

    if (!updatedOrganization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    res.status(200).json(updatedOrganization);
  } catch (error) {
    res.status(500).json({ message: "Error updating organization", error });
  }
});

//  Delete a Standard Organization
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrganization = await StandardOrganization.findByIdAndDelete(req.params.id);
    if (!deletedOrganization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    res.status(200).json({ message: "Organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting organization", error });
  }
});

export default router;
