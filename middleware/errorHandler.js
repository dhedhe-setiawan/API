const errorHandler = (err, req, res, next) => {
  console.error(`🚨 ${err.message} (Status: ${err.status || 500})`);

  res.status(err.status || 500).json({
    status: err.status || 500,
    message: `${err.message} (Status: ${err.status || 500})` || 'Internal Server Error',
  });
};

export default errorHandler;
