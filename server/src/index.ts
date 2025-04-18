import express from 'express';
import cors from 'cors';
import { Application } from 'express';
import healthRouter from './routes/health';

const app: Application = express();
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use('/api', healthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}🚀🚀`);
});
