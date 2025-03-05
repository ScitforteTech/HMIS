import express from 'express';
import { Client } from '../models/clientModel.js';

const router = express.Router();

// Route for add a new Client
router.post('/', async (request, response) => {
  try {
    const { name, theme, adminUser, adminPassword, DBUser, DBPassword, logo } = request.body;

    if (!name || !theme || !adminUser || !adminPassword || !DBUser || !DBPassword || !logo) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }

    const newClient = new Client({
      name,
      theme,
      adminUser,
      adminPassword,
      DBUser,
      DBPassword,
      logo,
    });

    await newClient.save();
    return response.status(201).json(newClient);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Clients from database
router.get('/', async (request, response) => {
  try {
    const clients = await Client.find({});

    return response.status(200).json({
      count: clients.length,
      data: clients,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Client from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    
    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: "Invalid client ID" });
    }

    const client = await Client.findById(id);
    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }

    return response.status(200).json(client);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Client
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: "Invalid client ID" });
    }

    const { name, theme, adminUser, adminPassword, DBUser, DBPassword, logo } = request.body;

    if (!name || !theme || !adminUser || !adminPassword || !DBUser || !DBPassword || !logo) {
      return response.status(400).send({ message: 'Send all required fields' });
    }

    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { name, theme, adminUser, adminPassword, DBUser, DBPassword, logo },
      { new: true } // Return updated document
    );

    if (!updatedClient) {
      return response.status(404).json({ message: 'Client not found' });
    }

    return response.status(200).json(updatedClient);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Client
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: "Invalid client ID" });
    }

    const deletedClient = await Client.findByIdAndDelete(id);

    if (!deletedClient) {
      return response.status(404).json({ message: 'Client not found' });
    }

    return response.status(200).json({ message: 'Client deleted successfully', deletedClient });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
