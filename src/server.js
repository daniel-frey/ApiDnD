'use strict';

const app = express();

app.use(errorMiddleware);
app.use(loggerMiddleware);

const server = module.exports = {};
let internalServer = null;

server.start = () => {
  return mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      return internalServer = app.listen(PORT, () => { // eslint-disable-line
        logger.log(logger.INFO, `Server is up and listening at PORT: ${PORT}`);
      });
    });
};

server.stop = () => {
  return mongoose.disconnect()
    .then(() => {
      return internalServer.close(() => {
        logger.log(logger.INFO, 'Server OFFLINE.');
      });
    });
};
