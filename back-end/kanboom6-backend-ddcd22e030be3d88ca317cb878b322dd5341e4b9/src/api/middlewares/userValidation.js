const userSchemas = require("../schemas/userSchemas");

const userValidation = (schema) => {
  return async (req, res, next) => {
    try {
      const validation = await userSchemas[schema].validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      return res.status(400).json({ type: "error", message: error.errors });
    }
  };
};

module.exports = { userValidation };
