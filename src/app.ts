import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFoundErrorHandler from './app/utils/notFoundErrorHndler';
import globalErrorHandler from './app/utils/globalErrorHandler';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

// Global Error handler
app.use(globalErrorHandler);
// Not found error handler
app.use(notFoundErrorHandler);

export default app;
