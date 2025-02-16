import { statusUmum } from '../utils/statusCode.js';

const response = (req, res, next) => {
  res.success = (status = 200, data = null, message, prev = null, next = null, max = null) => {
    res.status(status).json({
      message: message || statusUmum[status],
      result: data,
      pagination: { prev, next, max },
    });
  };

  next();
};

export default response;
