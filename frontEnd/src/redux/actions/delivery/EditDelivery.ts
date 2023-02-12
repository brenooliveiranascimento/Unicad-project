import { Dispatch } from "react";
import { toast } from "react-toastify";
import { IEditingDelivery } from "../../../interfaces/globalState/DeliveryI";
import connection from "../../../services/api.connection";
import { DeliveryTypes } from "../acionTypes";
import { genericAction } from "../genericAction";

export const EditDelivery = (delivery: IEditingDelivery): any => {
  return async (dispatch: Dispatch<any>) => {
    const { client, deliveryDate, departureCoordenate, departureName, destinyCoordenate, destinyName, id } = delivery;
    try {
      await connection
        .put(`delivery/update/${delivery.id}`, delivery);
      toast.success("Entrega agendada com sucesso!");
      dispatch(genericAction(DeliveryTypes.UPDATE_DELIVERY,
        { client, deliveryDate, deliverysDestination: { departureName, destinyCoordenate, destinyName, departureCoordenate }, id }
      ));
    } catch(e: any) {
      toast.error("Erro ao cadastrar");
    }
  };
};