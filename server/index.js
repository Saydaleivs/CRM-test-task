import express from 'express';
import cors from 'cors';
import { getFieldsAndAddDeal } from './services/addDeal.js';
const app = express();

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { title, dealBody } = req.body;
  res.send(await getFieldsAndAddDeal(title, dealBody));
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
