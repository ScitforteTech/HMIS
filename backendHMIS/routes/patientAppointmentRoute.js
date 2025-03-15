import express from "express";
import { PatientAppointment } from "../models/PatientAppointmentModel.js";

const router = express.Router();

// Create a new appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new PatientAppointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await PatientAppointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single appointment by ID
router.get("/:id", async (req, res) => {
  try {
    const appointment = await PatientAppointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an appointment by ID
router.put("/:id", async (req, res) => {
  try {
    const appointment = await PatientAppointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an appointment by ID
router.delete("/:id", async (req, res) => {
  try {
    const appointment = await PatientAppointment.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
