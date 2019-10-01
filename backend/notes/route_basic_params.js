const express = require('express');


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: "Hello World!"});
});

// Query params
app.get('/users', (req, res) => {
    return res.json({idade: req.query.idade});
});

// Route Params
app.put('/users/:id', (req, res) => {
    return res.json({id: req.params.id});
});

// Body
app.post('/users', (req, res) => {
    return res.json(req.body);
});


app.listen(3333);