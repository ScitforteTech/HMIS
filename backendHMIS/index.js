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
import shiftTypeRoutes from './routes/dutyRosterRoutes/shiftTypeRoute.js';
import organizationsRoute from './routes/organizationRoutes/organizationRoute.js';
import standardOrganizationRoute from './routes/organizationRoutes/standardOrganizationRoute.js';
import organizationUnitShiftRoute from './routes/dutyRosterRoutes/organizationUnitShiftRoute.js';
import employeeDutyRosterRoute from './routes/dutyRosterRoutes/employeeDutyRosterRoute.js';
import admitRoute from './routes/patientEncounterFormRoutes/admitRoute.js';
import glasgowComaScaleRoute from './routes/patientEncounterFormRoutes/glasgowComaScaleRoute.js';
import investigationRoute from './routes/patientEncounterFormRoutes/investigationRoute.js';
import leaveRoute from './routes/patientEncounterFormRoutes/leaveRoute.js';
import medicationRoute from './routes/patientEncounterFormRoutes/medicationRoute.js';
import nextVisitRoute from './routes/patientEncounterFormRoutes/nextVisitRoute.js';
import procedureRoute from './routes/patientEncounterFormRoutes/procedureRoute.js';
import preOpOrderRoute from './routes/patientEncounterFormRoutes/OT/preOpOrderRoute.js';
import procedureSubGroupRoute from './routes/patientEncounterFormRoutes/OT/procedureSubGroupRoute.js';
import recommendationRoute from './routes/patientEncounterFormRoutes/OT/recommendationRoute.js';
import resusRecordRoute from './routes/patientEncounterFormRoutes/resusRecordRoute.js';
import adviceRoute from './routes/patientEncounterFormRoutes/adviceRoute.js';
import favAdviceRoute from './routes/favouritesRoutes/favAdviceRoute.js';
import favDiagnosisRoute from './routes/favouritesRoutes/favDiagnosisRoute.js';
import favInvestigationRoute from './routes/favouritesRoutes/favInvestigationRoute.js';
import favMedicationRoute from './routes/favouritesRoutes/favMedicationRoute.js';
import favPostOpOrderRoute from './routes/favouritesRoutes/favPostOpOrderRoute.js';
import favPreOpOrderRoute from './routes/favouritesRoutes/favPreOpOrderRoute.js';
import favProcedureRoute from './routes/favouritesRoutes/favProcedureRoute.js';
import emergencyCaseRoute from './routes/emergencyCaseRoutes/emergencyCaseRoute.js';
import dischargeSummaryRoute from './routes/dischargeSummaryRoute.js';
import feeStructureRoute from './routes/feeStructureRoute.js';
import patientAppointmentRoute from './routes/patientAppointmentRoute.js';
import receivePatientRoute from './routes/receivePatientRoute.js';

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
app.use('/appointments', appointmentsRoute);
app.use('/appointmentsCategory', appointmentsCategoryRoute);

app.use('/dischargeSummary', dischargeSummaryRoute);
app.use('/feeStructure', feeStructureRoute);
app.use('/patientAppointment', patientAppointmentRoute);
app.use('/receivePatient', receivePatientRoute);

//organizations routes
app.use('/organizations', organizationsRoute);
app.use('/standardOrganization', standardOrganizationRoute);

//Favourites routes
app.use('/favAdvice', favAdviceRoute);
app.use('/favDiagnosis', favDiagnosisRoute);
app.use('/favInvestigation', favInvestigationRoute);
app.use('/favMedication', favMedicationRoute);
app.use('/favPostOpOrder', favPostOpOrderRoute);
app.use('/favPreOpOrder', favPreOpOrderRoute);
app.use('/favProcedure', favProcedureRoute);

//emergency case routes
app.use('/emergencyCase', emergencyCaseRoute);

//patient Encounter Form routes
app.use('/patientVitals', patientVitalsRoute);
app.use('/diagnosis', diagnosisRoute);
app.use('/admit', admitRoute);
app.use('/advice', adviceRoute);
app.use('/glasgowComaScale', glasgowComaScaleRoute);
app.use('/investigation', investigationRoute);
app.use('/leave', leaveRoute);
app.use('/medication', medicationRoute);
app.use('/nextVisit', nextVisitRoute);
app.use('/procedure', procedureRoute);
app.use('/resusRecord', resusRecordRoute);
//OT
app.use('/preOpOrder', preOpOrderRoute);
app.use('/procedureSubGroup', procedureSubGroupRoute);
app.use('/recommendation', recommendationRoute);

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
app.use("/shiftTypes", shiftTypeRoutes);
app.use("/organizationUnitShift", organizationUnitShiftRoute);
app.use("/employeeDutyRoster", employeeDutyRosterRoute);

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
