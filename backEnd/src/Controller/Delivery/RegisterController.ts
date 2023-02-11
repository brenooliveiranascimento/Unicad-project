import { Request, Response } from "express";
import Delivery from "../../entities/Delivery/Delivery";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import Register from "../../services/Delivery/Register";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class RegisterController {

  async execute(req: Request, res: Response) {
    const deliveryDate: DeliveryPropsInterface = req.body;

    const validateFields = new Delivery(deliveryDate);
    await validateFields.validateFields();

    try {
      const deliveryService = new Register();
      const register = await deliveryService.execute(deliveryDate);

      res.status(statusCodes.CREATED).json({ message: register.props });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}