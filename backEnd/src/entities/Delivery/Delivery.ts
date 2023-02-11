import DeliveryModel from "../../database/models/DeliveryModel";
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
        throw new CustomError(
          `${currProp} é um valor inválido`, statusCodes.BAD_REQUEST
          );
      }
    })
  }

  async getDelivery() {
    return {...this.props} as DeliveryPropsInterface;
  }

  static async getById(id: number) {
    const delivery = await DeliveryModel.findByPk(id);
    return delivery;
  }
}