const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//const logger = require('./middleware/logger');

//router files
const routerBootcamps = require('./routes/bootcamps');

dotenv.config({
  path: './config/config.env',
});

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', routerBootcamps);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
