import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";

export default class Delivery {
  
  constructor(
    private props: DeliveryPropsInterface
  ) {};

  get() {
    return this.props;
  }

  getClient() {
    return this.props.client
  }
}