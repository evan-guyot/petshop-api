import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import petsRoute from './routes/petsRoute';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/pets', petsRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
