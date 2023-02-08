import Delivery from "../../entities/Delivery/Delivery";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import DeliveryModel from "../../database/models/DeliveryModel";
import CustomError from "../../utils/StatusError";
import statusCodes from "../../statusCode";
import DeliveryDestinationModel from "../../database/models/DeliveryDestinationsModel";

export default class Register {
  async execute({
    client, deliveryDate, departure, destiny
  }: DeliveryPropsInterface): Promise<Delivery> {
    console.log(client)
    try {
      const newDelivery = await DeliveryModel.create({ client, deliveryDate });
      await DeliveryDestinationModel.create({ destiny, departure, deliveryId: newDelivery.id });
      
      return new Delivery(client, deliveryDate, departure, destiny, newDelivery.id);
    } catch(e: any) {
      console.log(e)
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}