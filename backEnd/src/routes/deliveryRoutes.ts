import { Router } from 'express';
import RegisterController from '../Controller/Delivery/RegisterController';
import GetController from '../Controller/Delivery/GetController';
import UpdateController from '../Controller/Delivery/UpdateController';

const deliveryRouter = Router();

const registerController = new RegisterController();
const getController = new GetController();
const updateControlelr = new UpdateController();

deliveryRouter.post('/create', registerController.execute);
deliveryRouter.get('/get', getController.execute);
deliveryRouter.put('/update/:id', updateControlelr.execute);

export default deliveryRouter;
