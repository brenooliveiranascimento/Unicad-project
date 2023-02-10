import { DeliveryI } from "../interfaces/globalState/DeliveryI"

export const formatCoordenate = (index: number, currDelivery: DeliveryI) => {
  return Number(currDelivery?.deliverysDestination.departureCoordenate.split(' ')[index])
}
