import express from 'express';
import { AppointmentCategory } from '../models/appointmentCategoryModel.js';

const router = express.Router();

// Route to Add a New Appointment Category
router.post('/', async (request, response) => {
  try {
    const { appointmentCategory, description } = request.body;

    if (!appointmentCategory || !description) {
      return response.status(400).json({ message: "Missing required fields" });
    }

    const newCategory = await AppointmentCategory.create({ appointmentCategory, description });

    return response.status(201).json(newCategory);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Get All Appointment Categories
router.get('/', async (request, response) => {
  try {
    const categories = await AppointmentCategory.find({});
    return response.status(200).json({
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Get a Single Appointment Category by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const category = await AppointmentCategory.findById(id);

    if (!category) {
      return response.status(404).json({ message: "Appointment Category not found" });
    }

    return response.status(200).json(category);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Update an Appointment Category
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const updatedCategory = await AppointmentCategory.findByIdAndUpdate(id, request.body, { new: true });

    if (!updatedCategory) {
      return response.status(404).json({ message: "Appointment Category not found" });
    }

    return response.status(200).json({ message: "Appointment Category updated successfully", data: updatedCategory });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route to Delete an Appointment Category
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedCategory = await AppointmentCategory.findByIdAndDelete(id);

    if (!deletedCategory) {
      return response.status(404).json({ message: "Appointment Category not found" });
    }

    return response.status(200).json({ message: "Appointment Category deleted successfully" });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default router;
