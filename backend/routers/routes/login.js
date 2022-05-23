const express = require("express");

const { login } = require("../controllers/login");

const loginRouter = express.Router();

loginRouter.post("/login", login); // http://localhost:5000/login

module.exports = loginRouter;
