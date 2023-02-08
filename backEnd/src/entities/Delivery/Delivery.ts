import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";

export default class Delivery {
  
  declare client: string;
  declare deliveryDate: Date;
  declare departure: string;
  declare destiny: string;
  declare id?: number;

  constructor(
    client: string,
    deliveryDate: Date,
    departure: string,
    destiny: string,
    id?: number,
  ) {
    this.client = client,
    this.deliveryDate = deliveryDate,
    this.departure = departure,
    this.destiny = destiny;
    this.id = id
  };
}