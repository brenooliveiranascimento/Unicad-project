import { Router } from 'express';
import RegisterController from '../Controller/Delivery/RegisterController';
import GetController from '../Controller/Delivery/GetController';

const deliveryRouter = Router();

const registerController = new RegisterController();
const getController = new GetController();

deliveryRouter.post('/create', registerController.execute);
deliveryRouter.get('/get', getController.execute);

export default deliveryRouter;
