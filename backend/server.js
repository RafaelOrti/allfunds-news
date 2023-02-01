const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const router = require('./src/router/newsRouter');
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use('/news', router);


/////TO DO /////
// Decouple components in server db and socket
//change to ec6 with imports adding   'type': 'module', to package json or btter using babel to adapt to navigators

//Start server
const httpServer = require('http').createServer(app);
httpServer.listen(4000, (error) => {
  //if something goes wrong we show the error and stop the server
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`Server on port ${process.env.APP_PORT}`);
});

//start socket
const io = require('socket.io')(httpServer, {
  cors: true,
  origins: ['*'],
});
io.of('/socket').on('connection', (socket) => {
  console.log('socket.io: User connected: ', socket.id);
  socket.on('disconnect', () => {
    console.log('socket.io: User disconnected: ', socket.id);
  });
});

//start mongodb
require('dotenv/config');
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const OPTIONS = {useNewUrlParser: true,useUnifiedTopology: true};
mongoose.connect(URI, OPTIONS, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected');
  const thoughtChangeStream = connection.collection('news').watch();
  //If an insert operation is done, the websocket is sent to the frontend to update the page
  thoughtChangeStream.on('change', (change) => {
    if(change.operationType==='insert') {
        io.of('/socket').emit('newThought');
    }
  });
});
connection.on('error', (error) => console.log('Error: ' + error));

module.exports = app;