import express from 'express';
import { StatusCodes as sc } from 'http-status-codes';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(sc.OK).json({ message: 'Hello World!' });
});

export default router;
