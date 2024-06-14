import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { insertDocument } from './db/mongodb.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password are required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashedPassword };
    const result = await insertDocument('users', user);

    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
