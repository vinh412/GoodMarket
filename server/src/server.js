const express = require('express');
import initRoutes from './routes/index.js'
import connectDatabase from './config/connectDatabase.js'
const cookieParser = require('cookie-parser');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectDatabase();
initRoutes(app);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});