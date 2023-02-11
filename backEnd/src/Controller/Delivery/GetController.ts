import { Request, Response } from "express";
import Get from "../../services/Delivery/Get";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class GetController {
  async execute(_req: Request, res: Response) {
    try {
      const deliveryService = new Get();
      const deliverys = await deliveryService.execute();

      return res.status(statusCodes.OK).json({ message: deliverys });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}