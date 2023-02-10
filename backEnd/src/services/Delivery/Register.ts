import Delivery from "../../entities/Delivery/Delivery";
import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import DeliveryModel from "../../database/models/DeliveryModel";
import CustomError from "../../utils/StatusError";
import statusCodes from "../../statusCode";
import DeliveryDestinationModel from "../../database/models/DeliveryDestinationsModel";

export default class Register {
  async execute({
    client,
    deliveryDate, 
    departureCoordenate,
    destinyCoordenate,
    departureName,
    destinyName
  }: DeliveryPropsInterface): Promise<Delivery> {

    try {
      const newDelivery = await DeliveryModel.create({ client, deliveryDate });
      await DeliveryDestinationModel.create({ 
        departureCoordenate,
        destinyCoordenate,
        departureName,
        destinyName,
        deliveryId: newDelivery.id
      });
      
      return new Delivery({
        client,
        deliveryDate,
        departureCoordenate,
        destinyCoordenate,
        departureName,
        destinyName,
        id: newDelivery.id
      });
      
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}