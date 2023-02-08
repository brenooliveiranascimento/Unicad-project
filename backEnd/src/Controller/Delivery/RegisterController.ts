import { Request, Response } from "express";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import Register from "../../services/Delivery/Register";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export class RegisterController {

  constructor(private deliveryService = new Register()) {};

  async execute(req: Request, res: Response) {
    const { 
      client, deliveryDate, departure, destiny
    }: DeliveryPropsInterface = req.body;

    try {
      const register = await this.deliveryService
      .execute({ client, deliveryDate, departure, destiny });
      res.status(statusCodes.CREATED).json({ message: register });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }

  }
}