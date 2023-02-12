import { DeliveryI } from "../interfaces/globalState/DeliveryI";

export const deliveryDefaultValur: DeliveryI = {
  id: 0,
  client: "",
  deliveryDate: new Date(),
  deliverysDestination: {
    departureCoordenate: "",
    departureName: "",
    destinyCoordenate: "",
    destinyName: "",
    deliveryId: 0
  }
};