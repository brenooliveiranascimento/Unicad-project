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
  id?: number
}

export interface IEditingDelivery {
  client: string | undefined;
  deliveryDate: string | undefined;
  departureCoordenate: string | undefined;
  destinyCoordenate: string | undefined;
  departureName: string | undefined;
  destinyName: string | undefined;
  id: number
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
