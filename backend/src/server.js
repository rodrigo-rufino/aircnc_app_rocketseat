const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const dbConfig = require('./config/dbConfig');


const app = express();

app.use(express.json());

mongoose.connect(dbConfig.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(routes);


app.listen(3333);