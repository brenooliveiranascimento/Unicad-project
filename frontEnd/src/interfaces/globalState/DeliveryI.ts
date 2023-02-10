export interface DestinationsI {
  id?: number;
  departure: string;
  destiny: string
  deliveryId?: number;
};

export interface NewDeliveryBodyRequest {
  client: string;
  deliveryDate: string;
  destiny: string;
  departure: string;
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
}
