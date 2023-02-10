import { Router } from 'express';
import RegisterController from '../Controller/Delivery/RegisterController';
import GetController from '../Controller/Delivery/GetController';
import UpdateController from '../Controller/Delivery/UpdateController';
import DeleteController from '../Controller/Delivery/DeleteController';

const deliveryRouter = Router();

const registerController = new RegisterController();
const getController = new GetController();
const updateControlelr = new UpdateController();
const deleteController = new DeleteController();

deliveryRouter.post('/create', registerController.execute);
deliveryRouter.get('/get', getController.execute);
deliveryRouter.put('/update/:id', updateControlelr.execute);
deliveryRouter.delete('/delete/:id', deleteController.execute);

export default deliveryRouter;
