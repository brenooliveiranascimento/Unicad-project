import { Request, Response } from "express";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import Register from "../../services/Delivery/Register";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class RegisterController {

  constructor() {};

  async execute(req: Request, res: Response) {
    const { 
      client, deliveryDate, departure, destiny
    }: DeliveryPropsInterface = req.body;

    try {
      const deliveryService = new Register();
      const register = await deliveryService.execute({ client, deliveryDate, departure, destiny });

      res.status(statusCodes.CREATED).json({ message: register });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}