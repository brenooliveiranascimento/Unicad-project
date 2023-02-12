import { DeliveryI } from "../interfaces/globalState/DeliveryI";

export const formatCoordenateDeparture = (index: number, currDelivery: DeliveryI) => {
	return Number(currDelivery?.deliverysDestination.departureCoordenate.split(" ")[index]);
};

export const formatCoordenateDestination = (index: number, currDelivery: DeliveryI) => {
	return Number(currDelivery?.deliverysDestination.destinyCoordenate.split(" ")[index]);
};
