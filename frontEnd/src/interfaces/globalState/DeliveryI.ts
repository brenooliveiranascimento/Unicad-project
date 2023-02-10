export interface DestinationsI {
  id?: number;
  departureCoordenate: string;
  destinyCoordenate: string;
  departureName: string;
  destinyName: string;
  deliveryId?: number;
};

export interface NewDeliveryBodyRequest {
  client: string;
  deliveryDate: string;
  departureCoordenate: string;
  destinyCoordenate: string;
  departureName: string;
  destinyName: string;
}

export interface DeliveryI {
  id?: number;
  client: string;
  deliveryDate: Date | string;
  deliverysDestination: DestinationsI;
}

export interface DeliveryIState {
  deliverys: DeliveryI[];
  error: boolean;
  loading: boolean;
  currDelivery: DeliveryI;
}
