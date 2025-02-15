const errorHandler = (err, req, res, next) => {
  console.error(`🚨 ${err.message} (Status: ${err.status || 500})`);

  res.error(err);
};

export default errorHandler;
