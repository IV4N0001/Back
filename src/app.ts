import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/product.routes'

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/products', productRoutes)

export default app;