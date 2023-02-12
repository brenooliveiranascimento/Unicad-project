import { DeliveryIState } from "../interfaces/globalState/DeliveryI";

export const deliveryInitialState: DeliveryIState = {
  deliverys: [],
  error: false,
  loading: true,
  currDelivery: {
    client: "",
    deliveryDate: "",
    deliverysDestination: {
      departureCoordenate: "",
      departureName: "",
      destinyCoordenate: "",
      destinyName: "",
    }
  },
};

export const deliveryInitialActionValue: any = {
  type: "",
  payload: [],
};