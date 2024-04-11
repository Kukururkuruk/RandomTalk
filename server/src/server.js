const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const AddPointRouter = require('./routes/addPointRouter');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const PointRouter = require('./routes/pointRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/point', PointRouter)
app.use('/api/points', AddPointRouter)

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
