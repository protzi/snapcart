import express from 'express';
import sequelize from './database';
import User from './models/User';
import Product from './models/Product';
import Cart from './models/Cart';
import CartItem from './models/CartItem';

const app = express();
app.use(express.json());

// Sync Database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.error('Error syncing database:', error));

// API Endpoints
app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.post('/cart/items', async (req, res) => {
  const { product_id, quantity } = req.body;
  const cart = await Cart.findOne({ where: { user_id: 1 } }); // Assuming user_id is 1 for now
  const cartItem = await CartItem.create({ cart_id: cart.id, product_id, quantity });
  res.status(201).json(cartItem);
});

app.get('/cart', async (req, res) => {
  const cart = await Cart.findOne({ where: { user_id: 1 }, include: [CartItem] });
  res.json(cart);
});

app.patch('/cart/items/:id', async (req, res) => {
  const { quantity } = req.body;
  const cartItem = await CartItem.findByPk(req.params.id);
  if (cartItem) {
    cartItem.quantity = quantity;
    await cartItem.save();
    res.json(cartItem);
  } else {
    res.status(404).json({ error: 'CartItem not found' });
  }
});

app.delete('/cart/items/:id', async (req, res) => {
  const cartItem = await CartItem.findByPk(req.params.id);
  if (cartItem) {
    await cartItem.destroy();
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'CartItem not found' });
  }
});

app.post('/cart/checkout', async (req, res) => {
  // Checkout logic here
  res.json({ message: 'Checkout successful' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
