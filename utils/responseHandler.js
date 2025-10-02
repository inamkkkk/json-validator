const successResponse = (res, data) => {
  res.status(200).json(data);
};

const errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ error: message });
};

module.exports = {
  successResponse,
  errorResponse,
};