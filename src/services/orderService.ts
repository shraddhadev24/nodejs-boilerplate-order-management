import { Order } from '../models/orderModel';

export default class OrderService {
  static async createOrder(data: any) {
    return Order.create(data);
  }

  static async getOrder(id: string) {
    return Order.findById(id);
  }
}
