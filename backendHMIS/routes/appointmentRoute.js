import express from 'express';
import { Appointment } from '../models/appointmentModel.js';

const router = express.Router();

// Route to Add a New Appointment
router.post('/', async (request, response) => {
  try {
    const { appointment, description } = request.body;

    if (!appointment || !description) {
      return response.status(400).json({ message: "Missing required fields" });
    }

    const newAppointment = await Appointment.create({ appointment, description });

    return response.status(201).json(newAppointment);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Get All Appointments
router.get('/', async (request, response) => {
  try {
    const appointments = await Appointment.find({});
    return response.status(200).json({
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Get a Single Appointment by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return response.status(404).json({ message: "Appointment not found" });
    }

    return response.status(200).json(appointment);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Update an Appointment
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, request.body, { new: true });

    if (!updatedAppointment) {
      return response.status(404).json({ message: "Appointment not found" });
    }

    return response.status(200).json({ message: "Appointment updated successfully", data: updatedAppointment });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Delete an Appointment
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return response.status(404).json({ message: "Appointment not found" });
    }

    return response.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default router;
