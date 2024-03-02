import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Product extends Model {
  public id!: number;
  public name!: string;
  public brand!: string;
  public model!: string;
  public price!: number;
  public color!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  brand: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  model: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: 'products',
  sequelize: sequelize,
});

export { Product };