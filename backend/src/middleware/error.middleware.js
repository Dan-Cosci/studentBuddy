import { config } from '../config/config.js';

export const errorHandler = (err, req, res, next) => {
  if (config.env !== 'production') console.log(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    stack: config.env === 'production' ? null : err.stack,
  }); 

};
