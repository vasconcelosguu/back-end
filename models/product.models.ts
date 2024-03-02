import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class Product extends Model {
  public id!: number;
  public name!: string;
  public brand!: string;
  public model!: string;
  public price!: number;
  public color!: string;
}

Product.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  model: DataTypes.STRING,
  price: DataTypes.FLOAT,
  color: DataTypes.STRING
}, {
  tableName: 'products',
  sequelize: sequelize,
});
