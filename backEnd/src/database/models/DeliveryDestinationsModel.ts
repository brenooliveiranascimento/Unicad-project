import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class DeliveryModel extends Model {
  declare id: number;
  declare departure: string;
  declare destiny: string;
  declare deliveryId: number
}

DeliveryModel.init({
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
  modelName: 'deliverys',
  timestamps: false,
  underscored: true
});

export default DeliveryModel;