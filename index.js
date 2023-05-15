const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();
const api = require("./api");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).send({
    status: "Success",
    msg: "Api is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).send({ status: "Success", msg: "UP" });
});

app.get("*", function (req, res) {
  res.status(404).send({
    status: "Success",
    msg: "Requested Page does not exist",
  });
});

app.listen(port, () => console.log(`Server started at port ${port}`));
