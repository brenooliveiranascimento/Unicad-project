import { Dispatch } from "react";
import { toast } from "react-toastify";
import { NewDeliveryBodyRequest } from "../../../interfaces/globalState/DeliveryI";
import connection from "../../../services/api.connection";
import { DeliveryTypes } from "../acionTypes";
import { genericAction } from "../genericAction";

export const CreateDeliverys = (newDelivery: NewDeliveryBodyRequest): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data: { message } } = await connection
        .post('delivery/create', { ...newDelivery });
      toast.success('Entrega agendada com sucesso!');
      dispatch(genericAction(DeliveryTypes.CREATE_DELIVERY, message));
    } catch(e: any) {
      console.log(e);
      toast.error('Erro ao cadastrar')
    }
  };
};