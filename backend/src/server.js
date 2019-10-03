const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const dbConfig = require('./config/dbConfig');


const app = express();



mongoose.connect(dbConfig.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch( (e) => {
    console.log(e);
});

app.use(cors({ }));
app.use(express.json());
app.use(routes);


app.listen(3333);