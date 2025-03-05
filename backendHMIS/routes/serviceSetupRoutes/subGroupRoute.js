import express from "express";
import { SubGroup } from "../../models/serviceSetup/subGroupModel.js";
import { Group } from "../../models/serviceSetup/groupModel.js"; // Ensure correct path

const router = express.Router();

// Create a new SubGroup
router.post("/", async (req, res) => {
  try {
    const { subGroupName, groupId } = req.body;

    // Check if group exists
    const groupExists = await Group.findById(groupId);
    if (!groupExists) {
      return res.status(404).json({ message: "Group not found" });
    }

    const subGroup = new SubGroup({ subGroupName, groupId });
    await subGroup.save();
    res.status(201).json(subGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all SubGroups
router.get("/", async (req, res) => {
  try {
    const subGroups = await SubGroup.find().populate("groupId", "groupName"); // Populate group info
    res.status(200).json(subGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single SubGroup by ID
router.get("/:id", async (req, res) => {
  try {
    const subGroup = await SubGroup.findById(req.params.id).populate("groupId", "groupName");
    if (!subGroup) return res.status(404).json({ message: "SubGroup not found" });
    res.status(200).json(subGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a SubGroup by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedSubGroup = await SubGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubGroup) return res.status(404).json({ message: "SubGroup not found" });
    res.status(200).json(updatedSubGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a SubGroup by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedSubGroup = await SubGroup.findByIdAndDelete(req.params.id);
    if (!deletedSubGroup) return res.status(404).json({ message: "SubGroup not found" });
    res.status(200).json({ message: "SubGroup deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
