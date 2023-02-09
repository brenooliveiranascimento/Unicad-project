export interface DestinationsI {
  id: number;
  departure: string;
  destiny: string
  deliveryId: number;
};

export interface DeliveryI {
  id: number;
  client: string;
  deliveryDate: Date;
  deliverysDestination: DestinationsI;
}

export interface DeliveryIState {
  deliverys: DeliveryI[];
  error: boolean;
  loading: boolean;
}