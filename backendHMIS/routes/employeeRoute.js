import express from 'express';
import mongoose from 'mongoose';
import { Employee } from '../models/employeeModel.js';

const router = express.Router();

// Route for adding a new Employee
router.post('/', async (request, response) => {
  try {
    const {
      firstName, lastName, fatherName, email, phoneNumber, gender, dateOfBirth,
      cnic, currentAddress, currentCity, currentDistrict, currentProvince, currentCountry,
      permanentAddress, permanentCity, permanentDistrict, permanentProvince, permanentCountry,
      emergencyContact, designation, department, dateOfJoining, profilePicture
    } = request.body;

    // Check if all required fields are present
    if (!firstName || !lastName || !fatherName || !email || !phoneNumber || !gender || !dateOfBirth ||
      !cnic || !currentAddress || !currentCity || !currentDistrict || !currentProvince || !currentCountry ||
      !permanentAddress || !permanentCity || !permanentDistrict || !permanentProvince || !permanentCountry ||
      !emergencyContact || !designation || !department || !dateOfJoining) {
      return response.status(400).json({ message: 'Send all required fields' });
    }

    const newEmployee = new Employee({
      firstName, lastName, fatherName, email, phoneNumber, gender, dateOfBirth,
      cnic, currentAddress, currentCity, currentDistrict, currentProvince, currentCountry,
      permanentAddress, permanentCity, permanentDistrict, permanentProvince, permanentCountry,
      emergencyContact, designation, department, dateOfJoining, profilePicture
    });

    const employee = await newEmployee.save();
    return response.status(201).json(employee);

  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route for getting all Employees
router.get('/', async (request, response) => {
  try {
    const employees = await Employee.find({});

    return response.status(200).json({
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route for getting a single Employee by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Employee ID' });
    }

    const employee = await Employee.findById(id);

    if (!employee) {
      return response.status(404).json({ message: 'Employee not found' });
    }

    return response.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route for updating an Employee by ID
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Employee ID' });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, request.body, { new: true });

    if (!updatedEmployee) {
      return response.status(404).json({ message: 'Employee not found' });
    }

    return response.status(200).json(updatedEmployee);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route for deleting an Employee by ID
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Employee ID' });
    }

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return response.status(404).json({ message: 'Employee not found' });
    }

    return response.status(200).json({ message: 'Employee deleted successfully', deletedEmployee });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

export default router;
