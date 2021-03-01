const express = require("express");
const cors = require("cors");
const db = require("./config/dbConnection");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
require("dotenv").config();

const app = express();
db.connect();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.use("/", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running PORT ${PORT}`));
