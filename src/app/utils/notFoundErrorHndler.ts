import { RequestHandler } from 'express';

const notFoundErrorHandler: RequestHandler = (req, res) => {
  res.status(200).json({
    success: false,
    message: 'Api Not Found',
    error: '',
  });
};

export default notFoundErrorHandler;
