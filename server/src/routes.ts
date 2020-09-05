import express from 'express';
const routes = express.Router();

import EmailController from './controllers/email/EmailController';
const emailController = new EmailController();

routes.post('/', emailController.create);

export default routes;