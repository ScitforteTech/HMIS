import express from 'express';
import { PatientVitals } from '../../models/patientEncounterForm/patientVitalsModel.js';

const router = express.Router();

// Add Patient Vitals
router.post('/', async (req, res) => {
    try {
      const {
        patientId,
        pulse,
        bloodPressure,
        respiratoryRate,
        oxygenSaturation,
        temperature,
        painLevel,
        levelOfConsciousness,
        capillaryRefillTime,
        bloodGlucoseLevel
      } = req.body;
  
      const newVitals = new PatientVitals({
        patientId,
        pulse,
        bloodPressure,
        respiratoryRate,
        oxygenSaturation,
        temperature,
        painLevel,
        levelOfConsciousness,
        capillaryRefillTime,
        bloodGlucoseLevel
      });
  
      const savedVitals = await newVitals.save();
      res.status(201).json(savedVitals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
    

// Get All Patient Vitals
router.get('/', async (req, res) => {
  try {
    const vitals = await PatientVitals.find().populate('patientId', 'fullName');
    return res.status(200).json({ count: vitals.length, data: vitals });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// Get Vitals by Patient ID
router.get('/:id', async (req, res) => {
  try {
    const vitals = await PatientVitals.findById(req.params.id).populate('patientId', 'fullName');
    if (!vitals) {
      return res.status(404).json({ message: 'Vitals not found' });
    }
    return res.status(200).json(vitals);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// Update Patient Vitals
router.put('/:id', async (req, res) => {
    try {
      const {
        pulse,
        bloodPressure,
        respiratoryRate,
        oxygenSaturation,
        temperature,
        painLevel,
        levelOfConsciousness,
        capillaryRefillTime,
        bloodGlucoseLevel
      } = req.body;
  
      const updatedVitals = await PatientVitals.findByIdAndUpdate(
        req.params.id,
        {
          pulse,
          bloodPressure,
          respiratoryRate,
          oxygenSaturation,
          temperature,
          painLevel,
          levelOfConsciousness,
          capillaryRefillTime,
          bloodGlucoseLevel
        },
        { new: true }
      );
  
      if (!updatedVitals) {
        return res.status(404).json({ message: 'Vitals not found' });
      }
  
      res.status(200).json(updatedVitals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Delete Patient Vitals
router.delete('/:id', async (req, res) => {
  try {
    const deletedVitals = await PatientVitals.findByIdAndDelete(req.params.id);
    if (!deletedVitals) {
      return res.status(404).json({ message: 'Vitals not found' });
    }
    return res.status(200).json({ message: 'Vitals deleted successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
