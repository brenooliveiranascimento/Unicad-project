import { DeliveryIState } from "../../../interfaces/globalState/DeliveryI";

export const deliveryInitialState: DeliveryIState = {
  deliverys: [],
  error: false,
  loading: true
}

export const deliveryInitialActionValue = {
  type: '',
  payload: [],
};