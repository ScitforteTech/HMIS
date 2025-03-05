import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import clientsRoute from './routes/clientsRoute.js';
import employeesRoute from './routes/employeeRoute.js';
import patientsRoute from './routes/patientRoute.js';
import appointmentsRoute from './routes/appointmentRoute.js';
import appointmentsCategoryRoute from './routes/appointmentCategoryRoute.js';
import patientVitalsRoute from './routes/patientEncounterFormRoutes/patientVitalsRoute.js';
import diagnosisRoute from './routes/patientEncounterFormRoutes/patientDiagnosisRoute.js';
import genericRoute from './routes/pharmacySetupRoutes/genericRoute.js';
import itemCategoryRoute from './routes/pharmacySetupRoutes/itemCategoryRoute.js';
import itemTypeRoute from './routes/pharmacySetupRoutes/itemTypeRoute.js';
import itemsRoute from './routes/pharmacySetupRoutes/itemRoute.js';
import unitsRoute from './routes/pharmacySetupRoutes/unitRoute.js';
import servicesRoute from './routes/serviceSetupRoutes/serviceRoute.js';
import groupsRoute from './routes/serviceSetupRoutes/groupRoute.js';
import subGroupsRoute from './routes/serviceSetupRoutes/subGroupRoute.js';
//import shiftTypeRoutes from './routes/dutyRosterRoutes/shiftTypeRoute.js';

import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome');
});

app.use('/clients', clientsRoute);
app.use('/employees', employeesRoute);
app.use('/patients', patientsRoute);

// appointments routes
app.use('/appointments', appointmentsRoute);
app.use('/appointmentsCategory', appointmentsCategoryRoute);

//organizations routes

//patient Encounter Form routes
app.use('/patientVitals', patientVitalsRoute);
app.use('/diagnosis', diagnosisRoute);

//pharmacy routes
app.use('/generic', genericRoute);
app.use('/itemCategory', itemCategoryRoute);
app.use('/itemType', itemTypeRoute);
app.use('/items', itemsRoute);
app.use('/units', unitsRoute);

//services setup routes
app.use('/groups', groupsRoute);
app.use('/subGroups', subGroupsRoute);
app.use('/services', servicesRoute);

//Duty Roster routes
//app.use("/shiftTypes", shiftTypeRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
