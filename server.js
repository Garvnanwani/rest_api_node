const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database connected'));

app.use(express.json());

const subscribursRouter = require('./routes/subscriburs');
app.use('/subscribers', subscribursRouter);

app.listen(3000, () => {
    console.log('Server started on PORT: 3000');
})
