import { Dispatch } from "react";
import { toast } from "react-toastify";
import { DeliveryI } from "../../../interfaces/globalState/DeliveryI";
import connection from "../../../services/api.connection";
import { DeliveryTypes } from "../acionTypes";
import { genericAction } from "../genericAction";

export const DeleteDeliverys = (delivery: DeliveryI): any => {
	return async (dispatch: Dispatch<any>) => {
		try {
			await connection
				.delete(`/delivery/delete/${delivery.id}`);
			toast.success("Entrega deletada com sucesso!");
			dispatch(genericAction(DeliveryTypes.DELETE_DELIVERY, delivery));
		} catch(e: any) {
			toast.error("Erro ao deletar");
		}
	};
};