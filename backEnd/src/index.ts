import cors from 'cors'
import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
import errorMiddleware from './middlewares/errorMiddleware';
const app = express();

app.use(cors())

app.get('/', (_req, res) => res.json({ messagem: 'Unicad api on' }));
app.use(errorMiddleware)

export default app;
