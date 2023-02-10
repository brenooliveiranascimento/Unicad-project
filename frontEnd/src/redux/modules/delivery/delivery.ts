import { DeliveryI } from "../../../interfaces/globalState/DeliveryI";
import { DeliveryTypes } from "../../actions/acionTypes";
import { deliveryInitialActionValue, deliveryInitialState } from "./initialState";

export default function delivery(
  state = deliveryInitialState, action = deliveryInitialActionValue
  ) {
    console.log(action)
    switch(action.type) {
      case DeliveryTypes.SELECT_A_DELIVERY:
        return { ...state, currDelivery: action.payload };
      case DeliveryTypes.GET_DELIVERYS:
        return { ...state, deliverys: [...action.payload], loading: false };
      case DeliveryTypes.CREATE_DELIVERY:
        return { ...state, deliverys: [...state.deliverys, action.payload], loading: false };
      case DeliveryTypes.DELETE_DELIVERY:
        return { ...state, deliverys: state.deliverys
            .filter((delivery: DeliveryI) => delivery.id !== action.payload.id), loading: false };
      case DeliveryTypes.UPDATE_DELIVERY:
        return { ...state, deliverys: state.deliverys.map((delivery: DeliveryI) => {
              if(delivery.id === action.payload.id) return action.payload.id;
              return delivery }), loading: false};
      default:
        return state;
    };
};