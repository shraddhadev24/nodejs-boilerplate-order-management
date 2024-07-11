import { Schema, model } from 'mongoose';
import { ORDER_STATUS } from '../config/constants';

const orderSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: Object.values(ORDER_STATUS), default: ORDER_STATUS.PENDING },
}, { timestamps: true });

export const Order = model('Order', orderSchema);

