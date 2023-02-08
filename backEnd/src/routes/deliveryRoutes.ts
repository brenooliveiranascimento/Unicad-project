import { Router } from 'express';
import { RegisterController } from '../Controller/Delivery/RegisterController';

const deliveryRouter = Router();

const registerController = new RegisterController();

deliveryRouter.post('/create', registerController.execute);

export default deliveryRouter;
