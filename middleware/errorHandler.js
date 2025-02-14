const errorHandler = (req, res, next) => {
  req.error = (status, message) => {
    const error = new Error(message);
    error.status = status;
    throw error;
  };

  next();
};

const catchError = (err, req, res, next) => {
  console.error(`🚨 ${err.message} (Status: ${err.status || 500})`);

  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
};

export { errorHandler, catchError };
