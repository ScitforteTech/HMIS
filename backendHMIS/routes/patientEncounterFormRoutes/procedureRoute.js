import express from "express";
import { Procedure } from "../../models/patientEncounterForm/procedureModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const procedure = new Procedure(req.body);
    await procedure.save();
    res.status(201).json(procedure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const procedures = await Procedure.find();
    res.status(200).json(procedures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const procedure = await Procedure.findById(req.params.id);
    if (!procedure) {
      return res.status(404).json({ message: "Procedure not found" });
    }
    res.status(200).json(procedure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const procedure = await Procedure.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!procedure) {
      return res.status(404).json({ message: "Procedure not found" });
    }
    res.status(200).json(procedure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const procedure = await Procedure.findByIdAndDelete(req.params.id);
    if (!procedure) {
      return res.status(404).json({ message: "Procedure not found" });
    }
    res.status(200).json({ message: "Procedure deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
