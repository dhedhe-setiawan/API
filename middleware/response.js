const response = (req, res, next) => {
  res.success = (message, data = null, prev = null, next = null, max = null) => {
    res.status(200).json({
      message,
      result: data,
      pagination: { prev, next, max },
    });
  };

  next();
};

export default response;
