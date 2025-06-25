import express, { Request, Response } from 'express';
import apiRoutes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Store API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
