const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//const logger = require('./middleware/logger');

//router files
const routerBootcamps = require('./routes/bootcamps');

dotenv.config({
    path: './config/config.env',
});

//connect DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/bootcamps', routerBootcamps);

app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`.yellow.bold);
});

//handle unhandled promise
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`.red);
    server.close(() => process.exit(1));
});
