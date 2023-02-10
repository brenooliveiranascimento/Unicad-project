import { Request, Response } from "express";
import Delete from "../../services/Delivery/Delete";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class DeleteController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const deleteService = new Delete();

    try {
      const deleteDelivery = deleteService.execute(Number(id));
      if(typeof deleteDelivery === 'string') {
        return res.status(statusCodes.NOT_FOUND).json({ message: deleteDelivery });
      }
      return res.status(statusCodes.OK).json({ message: 'Deleted' });
    } catch (e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}