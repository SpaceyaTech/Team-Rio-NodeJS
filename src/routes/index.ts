import { Request, Response, Router } from 'express';
import { StatusCodes as sc } from 'http-status-codes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(sc.OK).json({ message: 'Hello World!' });
});

export default router;
