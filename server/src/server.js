const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const AddPointRouter = require('./routes/addPointRouter');
const DeletePointRouter = require('./routes/deletePointRouter');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const PointRouter = require('./routes/pointRouter');
const changeStatusRouter = require('./routes/changeStatusRouter');
const apiBanPointRouter = require('./routes/banPointRouter');
const getClientRouter = require('./routes/getClientRouter');
const historyRouter = require('./routes/historyRouter');
const apiRatingPointRouter = require('./routes/ratingRouter');


require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

// Подключаем роутеры
app.use('/api/auth', authRouter);
app.use('/api', historyRouter)
app.use('/api/client', getClientRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/point', PointRouter);
app.use('/api/points', AddPointRouter);
app.use('/api/points/delete', DeletePointRouter);
app.use('/api/points/status', changeStatusRouter)
app.use('/api/point/ban', apiBanPointRouter);
app.use('/api/rating', apiRatingPointRouter)

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log('Received message from client:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
