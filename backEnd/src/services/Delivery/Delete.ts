import DeliveryModel from "../../database/models/DeliveryModel";
import Delivery from "../../entities/Delivery/Delivery";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class Delete extends Delivery{
  async execute(id: number): Promise<string> {
    try {
      const checkExist = await this.getById(id);
      if(checkExist) {
        await DeliveryModel.destroy({ where: { id } });
        return 'Delivery delected with success!';
      } else {
        return 'Delivery dont exist';
      }
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}