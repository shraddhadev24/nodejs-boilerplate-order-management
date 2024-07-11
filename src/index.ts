import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI).then(() => {
  logger.info('Connected to MongoDB');
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  logger.error(`Error connecting to MongoDB: ${err.message}`);
});
