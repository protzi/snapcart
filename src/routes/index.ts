import express from 'express';
import productsRouter from './products';

const router = express.Router();

// Use the products router
router.use('/products', productsRouter);

export default router;
