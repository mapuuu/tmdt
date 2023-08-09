import express from 'express';
import { createOrder, getMyOrder } from '../Controller/OrderController.js';
import { protect } from '../Middleware/Auth.js';

const router = express.Router();

router.post('/createOrder', protect, createOrder);
router.get('/getMyOrder', protect, getMyOrder);

export default router;
