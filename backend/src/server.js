const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');
const dbConfig = require('./config/dbConfig');


const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(dbConfig.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((e) => {
  console.log(e);
});



//adiciona funcionalidade em todas as rotas
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  
  return next();
});

app.use(cors({}));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


server.listen(3333);