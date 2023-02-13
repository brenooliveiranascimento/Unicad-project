import UpdateDeliveryProps from "../../interfaces/UpdateDeliveryProps";
import DeliveryModel from "../../database/models/DeliveryModel";
import DeliveryDestinationModel from "../../database/models/DeliveryDestinationsModel";
import CustomError from "../../utils/StatusError";
import statusCodes from "../../statusCode";
import Delivery from "../../entities/Delivery/Delivery";

export default class Update {
  async execute({
    client, deliveryDate, departureCoordenate, departureName, destinyCoordenate, destinyName, id
  }: UpdateDeliveryProps) {

    try {
      const checkExist = await Delivery.getById(id);

      if(checkExist) {
        await DeliveryModel.update(
          { client, deliveryDate },
          { where: { id } }
        );
        await DeliveryDestinationModel.update(
          { departureCoordenate, departureName, destinyCoordenate, destinyName },
          { where: { id } }
        );
        return new Delivery({
            client, deliveryDate, departureCoordenate, departureName, destinyCoordenate, destinyName, id
        });
      } else {
        return 'Delivery dont exist'
      }
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}