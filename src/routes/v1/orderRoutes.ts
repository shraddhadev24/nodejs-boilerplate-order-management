import { Router } from 'express';
import OrderController from '../../controller/orderController';
import { authenticate } from '../../middlewares/authMiddleware';
import { validateOrder } from '../../utils/validator';

const router = Router();

router.post('/', authenticate, validateOrder, OrderController.createOrder);
router.get('/:id', authenticate, OrderController.getOrder);

export default router;
