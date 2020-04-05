import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Routes for ONGs
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

// Route for session
routes.post('/session', SessionController.store);

// Ong profile
routes.get('/profile', authMiddleware, ProfileController.index);

// Routes for incidents
routes.post('/incidents', authMiddleware, IncidentController.store);
routes.delete('/incidents/', authMiddleware, IncidentController.delete);

routes.get('/incidents', IncidentController.index);

export default routes;
