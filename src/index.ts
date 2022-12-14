import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import * as dotenv from 'dotenv';
import { dbSetup } from './models';

dbSetup(); // setup database
dotenv.config(); // setup dotenv
const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
);

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log('🗲 [server]', `Server listening on PORT:${PORT}`)
);
