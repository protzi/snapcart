import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Cart from './Cart';
import Product from './Product';

class CartItem extends Model {}

CartItem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'CartItem',
});

export default CartItem;
