const express = require("express");
const usersController = require("../api/controllers/usersController");
const { userValidation } = require("../api/middlewares/userValidation");
const bcrypt = require("../api/middlewares/bcrypt");
const router = express.Router();

router.use(express.json());

router.post("/", userValidation("register"), bcrypt.createBcryptHash, usersController.create_user);

module.exports = router;
