const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routers/routes/user");
const loginRouter = require("./routers/routes/login");
const blogRouter = require("./routers/routes/blog");

require("dotenv").config();
require("./db/db");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
app.use(loginRouter);
app.use("/blog", blogRouter);

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

module.exports = app;
