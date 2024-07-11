import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import orderRoutes from './routes/v1/orderRoutes';
import { errorHandler } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/api/v1/orders', orderRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

export default app;
