import { Dispatch } from "react";
import { toast } from "react-toastify";
import GlobalStateI from "../../../interfaces/globalState/GlobalStateI";
import connection from "../../../services/api.connection";
import { DeliveryTypes } from "../acionTypes";
import { genericAction } from "../genericAction";

export const GetDeliverys = (): any => {
  return async (dispatch: Dispatch<any>, state:() => GlobalStateI) => {
    try {
      if(state().deliverys.deliverys.length) return;
      const { data } = await connection("delivery/get");
      dispatch(genericAction(DeliveryTypes.GET_DELIVERYS, data.message));
    } catch(e: any) {
      toast.error("Erro ao faer a requisição");
    }
  };
};