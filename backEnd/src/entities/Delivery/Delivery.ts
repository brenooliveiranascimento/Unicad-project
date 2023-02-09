import DeliveryPropsInterface from "../../interfaces/DeliveryPropsInterface";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class Delivery {
  props: DeliveryPropsInterface;
  constructor(props: DeliveryPropsInterface) {
    this.props = props;
  };

  validateFields() {
    const delivery = this.props as any
    Object.keys(delivery).forEach((
      currProp: keyof DeliveryPropsInterface | any) => {
      if(!delivery[currProp]) {
        console.log(`${currProp} é um vlor inválido`)
        throw new CustomError(
          `${currProp} é um vlor inválido`, statusCodes.BAD_REQUEST
          );
      }
    })
  }

  async getDelivery() {
    return {...this.props} as DeliveryPropsInterface;
  }
}