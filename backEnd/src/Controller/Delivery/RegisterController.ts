import { Request, Response } from "express";
import Delivery from "../../entities/Delivery/Delivery";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import Register from "../../services/Delivery/Register";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class RegisterController {

  async execute(req: Request, res: Response) {
    const { 
      client, deliveryDate, departure, destiny
    }: DeliveryPropsInterface = req.body;

    console.log('a')

    const validateFields = new Delivery({client, deliveryDate, departure, destiny});
    await validateFields.validateFields();

    try {
      const deliveryService = new Register();
      const register = await deliveryService.execute({ client, deliveryDate, departure, destiny });

      res.status(statusCodes.CREATED).json({ message: register.props });
    } catch(e: any) {
      console.log(e)
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}