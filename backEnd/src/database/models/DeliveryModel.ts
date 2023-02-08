import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class DeliveryModel extends Model {
  declare id: number;
  declare client: string;
  declare deliveryDate: Date;
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
}, {
  sequelize: db,
  modelName: 'deliverys',
  timestamps: false,
  underscored: true
});

export default DeliveryModel;