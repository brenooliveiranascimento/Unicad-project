import DeliveryModel from "../../database/models/DeliveryModel";
import Delivery from "../../entities/Delivery/Delivery";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class Delete {
  async execute(id: number): Promise<string | boolean> {
    try {
      const checkExist = await Delivery.getById(id);
      if(checkExist) {
        await DeliveryModel.destroy({ where: { id } });
        return true;
      } else {
        return 'Delivery dont exist';
      }
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}