import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';
import { Order } from '../src/models/orderModel';

describe('Order API', () => {
  beforeAll(async () => {
    // Connect to the MongoDB test database
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
    await mongoose.connect(MONGO_URI);
  });

  afterAll(async () => {
    // Close the MongoDB connection
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Clean up the database after each test
    await Order.deleteMany({});
  });

  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/v1/orders')
      .send({
        product: 'Test Product',
        quantity: 10,
        status: 'pending',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.product).toBe('Test Product');
    expect(response.body.quantity).toBe(10);
  });

  it('should get an order by ID', async () => {
    const order = await Order.create({
      product: 'Test Product',
      quantity: 10,
      status: 'pending',
    });

    const response = await request(app).get(`/api/v1/orders/${order._id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.product).toBe('Test Product');
    expect(response.body.quantity).toBe(10);
  });
});

