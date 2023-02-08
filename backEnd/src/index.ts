const cors = require('cors');
import 'express-async-errors';
import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import deliveryRouter from './routes/deliveryRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors())

    this.config();


    this.app.get('/', async (req, res) => res.status(200).json({ message: "AmoPromo" }));
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/delivery', deliveryRouter)
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;

