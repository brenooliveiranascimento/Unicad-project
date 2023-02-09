import { DeliveryI } from "../../../interfaces/globalState/DeliveryI";
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
      case DeliveryTypes.DELETE_DELIVERY:
        return { ...state, deliverys: state.deliverys
            .filter((delivery: DeliveryI) => delivery.id !== action.payload.id) };
      case DeliveryTypes.UPDATE_DELIVERY:
        return { ...state, deliverys: state.deliverys.map((delivery: DeliveryI) => {
              if(delivery.id === action.payload.id) return action.payload.id;
              return delivery })};
      default:
        return state;
    };
};