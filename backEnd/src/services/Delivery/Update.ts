import UpdateDeliveryProps from "../../interfaces/UpdateDeliveryProps";
import DeliveryModel from "../../database/models/DeliveryModel";
import DeliveryDestinationModel from "../../database/models/DeliveryDestinationsModel";
import CustomError from "../../utils/StatusError";
import statusCodes from "../../statusCode";

export default class Update {
  async execute({
    client, deliveryDate, departure, destiny, id
  }: UpdateDeliveryProps) {
    try {
      await DeliveryModel.update(
        { client, deliveryDate },
        { where: { id } }
      );

      await DeliveryDestinationModel.update(
        { destiny, departure },
        { where: { id } }
      );
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}