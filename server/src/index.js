require('express-async-errors');
const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');
const errorHandler = require('../src/middlewares/errorHandler');

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on port ${PORT}, access 'http://localhost:3001/'`));
