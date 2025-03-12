import express from "express";
import { EmployeeDutyRoster } from "../../models/dutyRoster/employeeDutyRosterModel.js";

const router = express.Router();

// Create a new Employee Duty Roster
router.post("/", async (req, res) => {
  try {
    const newRoster = new EmployeeDutyRoster(req.body);
    await newRoster.save();
    res.status(201).json(newRoster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Employee Duty Rosters
router.get("/", async (req, res) => {
  try {
    const rosters = await EmployeeDutyRoster.find().populate("employees");
    res.status(200).json(rosters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single Employee Duty Roster by ID
router.get("/:id", async (req, res) => {
  try {
    const roster = await EmployeeDutyRoster.findById(req.params.id).populate("employees");
    if (!roster) {
      return res.status(404).json({ message: "Roster not found" });
    }
    res.status(200).json(roster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Employee Duty Roster
router.put("/:id", async (req, res) => {
  try {
    const updatedRoster = await EmployeeDutyRoster.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("employees");

    if (!updatedRoster) {
      return res.status(404).json({ message: "Roster not found" });
    }
    res.status(200).json(updatedRoster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an Employee Duty Roster
router.delete("/:id", async (req, res) => {
  try {
    const deletedRoster = await EmployeeDutyRoster.findByIdAndDelete(req.params.id);
    if (!deletedRoster) {
      return res.status(404).json({ message: "Roster not found" });
    }
    res.status(200).json({ message: "Roster deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
