import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  static async createOrder(req: Request, res: Response) {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json(order);
  }

  static async getOrder(req: Request, res: Response) {
    const order = await OrderService.getOrder(req.params.id);
    res.status(200).json(order);
  }
}
