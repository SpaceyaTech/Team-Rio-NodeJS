import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './src/routes';
import morgan from 'morgan';

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

try {
	app.listen(PORT, () =>
		console.log('🗲 [server]', `Server listening on PORT:${PORT}`)
	);
} catch (err) {
	console.error('❌ [server]', err);
}
