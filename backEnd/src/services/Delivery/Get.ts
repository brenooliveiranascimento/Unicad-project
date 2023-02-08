import { Request, Response } from "express";
import DeliveryDestinationModel from "../../database/models/DeliveryDestinationsModel";
import DeliveryModel from "../../database/models/DeliveryModel";
import statusCodes from "../../statusCode";
import CustomError from "../../utils/StatusError";

export default class Get {
  async execute() {
    try {
      const deliverys = await DeliveryModel.findAll({
        include: [{ model: DeliveryDestinationModel, as: 'deliverys_destinations' }],
      });
      return deliverys;
    } catch(e: any) {
      throw new CustomError(e.message, statusCodes.BAD_REQUEST);
    }
  }
}