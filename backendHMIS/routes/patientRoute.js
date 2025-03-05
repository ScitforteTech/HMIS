import express from 'express';
import { Patient } from '../models/patientModel.js';

const router = express.Router();

// Route to add a new Patient
router.post('/', async (request, response) => {
  try {
    const requiredFields = [
      "patientId", "fullName", "gender", "maritalStatus", "dob", "age",
      "nationality", "address", "city", "area", "phoneNo", "email",
      "emergencyContactName", "relationship", "emergencyContactNo",
      "alternateEmergencyContactNo", "insurance", "insuranceProvider",
      "insurancePolicyNumber", "insuranceGroupNo", "policyHolderName",
      "policyHolderRelationship", "nationalIdNo", "passportNo",
      "driverLicenseNo", "photoId"
    ];

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(400).send({ message: `Missing field: ${field}` });
      }
    }

    const patient = await Patient.create(request.body);
    return response.status(201).json(patient);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Get All Patients
router.get('/', async (request, response) => {
  try {
    const patients = await Patient.find({});
    return response.status(200).json({
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Get a Single Patient by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const patient = await Patient.findById(id);

    if (!patient) {
      return response.status(404).json({ message: "Patient not found" });
    }

    return response.status(200).json(patient);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Update a Patient
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const updatedPatient = await Patient.findByIdAndUpdate(id, request.body, { new: true });

    if (!updatedPatient) {
      return response.status(404).json({ message: "Patient not found" });
    }

    return response.status(200).json({ message: "Patient updated successfully", data: updatedPatient });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Delete a Patient
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return response.status(404).json({ message: "Patient not found" });
    }

    return response.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
