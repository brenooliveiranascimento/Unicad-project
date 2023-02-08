import { Request, Response } from "express";
import UpdateDeliveryProps from "../../interfaces/UpdateDeliveryProps";
import Update from "../../services/Delivery/Update";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class GetController {

  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const {
      client, deliveryDate, departure, destiny
    }: UpdateDeliveryProps = req.body;
    try {
      const deliveryService = new Update();
      await deliveryService.execute({
        client, deliveryDate, departure, destiny, id: Number(id)
      });

      res.status(statusCodes.OK).json({ message: 'Atualizado com sucesso!' });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}