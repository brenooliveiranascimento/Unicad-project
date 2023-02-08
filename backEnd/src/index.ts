import cors from 'cors'
import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
const app = express();

app.use(cors())

app.get('/', (req, res) => res.json({ messagem: 'Unicad api on' }));

export default app;
