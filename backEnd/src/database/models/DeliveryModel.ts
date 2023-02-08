import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class DeliveryModel extends Model {
  declare id: number;
  declare client: string;
  declare deliveryDate: Date;
  declare departure: string;
  declare destiny: string;
}

DeliveryModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  client: {
    type: STRING(30),
    allowNull: false,
  },
  deliveryDate: {
    defaultValue: null,
    allowNull: true,
    type: DATE,
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
}, {
  sequelize: db,
  modelName: 'delivery',
  timestamps: false,
  underscored: true
});

export default DeliveryModel;