import { Request, Response } from "express";
import Delivery from "../../entities/Delivery/Delivery";
import UpdateDeliveryProps from "../../interfaces/UpdateDeliveryProps";
import Update from "../../services/Delivery/Update";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class UpdateController {

  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const deliveryData: UpdateDeliveryProps = req.body;

    const validateFields = new Delivery(deliveryData);
    await validateFields.validateFields();

    try {
      const deliveryService = new Update();
      const updated = await deliveryService.execute({ ...deliveryData, id: Number(id) });
      if(typeof updated == 'string') {
        return res.status(statusCodes.OK).json({ message: updated });
      }
      return res.status(statusCodes.OK).json({ message: 'Atualizado com sucesso!' });
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}