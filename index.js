import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './src/routes/index.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
	if (err) console.error('Error:', err);
	console.log('Info:', `Server listening on PORT:${PORT}`);
});
