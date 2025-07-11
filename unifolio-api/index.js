import express from 'express';
import portfolioRoutes from './routes/portfolio.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
