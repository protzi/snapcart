import express from 'express';
import { z } from 'zod';

const router = express.Router();

// Define a Zod schema for product validation
const productSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  description: z.string().optional(),
});

// Create a new product
router.post('/', (req, res) => {
  try {
    const product = productSchema.parse(req.body);
    // Logic to save the product to the database
    res.status(201).json({ message: 'Product created', product });
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

// Get all products
router.get('/', (req, res) => {
  // Logic to retrieve products from the database
  res.json({ products: [] });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Logic to retrieve a product by ID from the database
  res.json({ product: { id } });
});

// Update a product by ID
router.put('/:id', (req, res) => {
  try {
    const product = productSchema.parse(req.body);
    const { id } = req.params;
    // Logic to update the product in the database
    res.json({ message: 'Product updated', product: { id, ...product } });
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

// Delete a product by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Logic to delete the product from the database
  res.json({ message: 'Product deleted', id });
});

export default router;
