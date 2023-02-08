import { Model, INTEGER, STRING, DATE } from 'sequelize';
import DeliveryModel from './DeliveryModel';
import db from '.';

class DeliveryDestinationModel extends Model {
  declare id: number;
  declare departure: string;
  declare destiny: string;
  declare deliveryId: number
}

DeliveryDestinationModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  departure: {
    defaultValue: null,
    allowNull: true,
    type: STRING(300),
  },  
  destiny: {
    defaultValue: null,
    allowNull: true,
    type: STRING(300),
  },
  deliveryId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'deliverysDestination',
  timestamps: false,
  underscored: true
});

DeliveryModel.hasOne(DeliveryDestinationModel);
DeliveryDestinationModel.belongsTo(DeliveryModel);

export default DeliveryDestinationModel;