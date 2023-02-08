import { Request, Response } from "express";
import Get from "../../services/Delivery/Get";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class GetController {

  async execute(req: Request, res: Response) {
    try {
      const deliveryService = new Get();
      const deliverys = await deliveryService.execute();

      res.status(statusCodes.CREATED).json({ message: deliverys });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}