const express = require("express");

const { register } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", register); // http://localhost:5000/users

module.exports = userRouter;
