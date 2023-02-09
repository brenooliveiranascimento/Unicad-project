import { DeliveryTypes } from "../../acionTypes";

export const deliveryInitialState = {
  deliverys: [],
}

export const deliveryInitialActionValue = {
  type: '',
  payload: [],
}

export default function deliveryReducer(
  state = deliveryInitialActionValue, action = deliveryInitialActionValue
  ) {
    switch(action.type) {
      case DeliveryTypes.GET_DELIVERYS:
        return { ...state, deliverys: [...action.payload] }
      default:
        return state;
    }
}