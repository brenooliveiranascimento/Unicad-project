import { DeliveryTypes } from "../../actions/acionTypes";
import { deliveryInitialActionValue, deliveryInitialState } from "./initialState";

export default function delivery(
  state = deliveryInitialState, action = deliveryInitialActionValue
  ) {
    console.log(action)
    switch(action.type) {
      case DeliveryTypes.GET_DELIVERYS:
        return { ...state, deliverys: [...action.payload] };
      case DeliveryTypes.CREATE_DELIVERY:
        return { ...state, deliverys: [...state.deliverys, action.payload] };
      default:
        return state;
    };
};