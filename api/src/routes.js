import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Routes for ONGs
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

// Route for session
routes.post('/session', SessionController.store);

// Ong profile
routes.get('/profile', ProfileController.index);

// Routes for incidents

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
