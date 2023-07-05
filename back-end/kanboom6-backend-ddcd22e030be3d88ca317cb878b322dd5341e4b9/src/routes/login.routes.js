const express = require("express");
const loginController = require("../api/controllers/loginController");
const { userValidation } = require("../api/middlewares/userValidation");
const router = express.Router();

router.use(express.json());

router.post("/", userValidation("login"), loginController.login_check);

module.exports = router;
