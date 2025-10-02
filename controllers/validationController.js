const Ajv = require('ajv');
const responseHandler = require('../utils/responseHandler');

const validateJson = (req, res) => {
  const { json, schema } = req.body;

  if (!json || !schema) {
    return responseHandler.errorResponse(res, 400, 'JSON and schema are required.');
  }

  try {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(json);

    if (valid) {
      return responseHandler.successResponse(res, { isValid: true });
    } else {
      return responseHandler.successResponse(res, { isValid: false, errors: validate.errors });
    }
  } catch (error) {
    console.error(error);
    return responseHandler.errorResponse(res, 500, 'Internal server error.');
  }
};

module.exports = {
  validateJson,
};