import { Dispatch } from "react";
import UseFetch from "../../../customHooks/UseFetch";
import connection from "../../../services/api.connection";
import { DeliveryTypes } from "../acionTypes";
import { genericAction } from "../genericAction";

export const GetDeliverys = (): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await connection('delivery/get');
      dispatch(genericAction(DeliveryTypes.GET_DELIVERYS, data.message));
    } catch(e: any) {
    }
  };
};