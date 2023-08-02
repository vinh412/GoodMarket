const express = require('express');
const fileUpload = require('express-fileupload');
import initRoutes from './routes/index.js';
import connectDatabase from './config/connectDatabase.js';
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/auth.js');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(function(req, res, next) {
  console.log(req.path, req.method);
  next();
})
app.use(express.static(__dirname + '/public'));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectDatabase();
initRoutes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});