import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const orderSchema = Joi.object({
  product: Joi.string().required(),
  quantity: Joi.number().required(),
  status: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled'),
});

export function validateOrder(req: Request, res: Response, next: NextFunction) {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}
