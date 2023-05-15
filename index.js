const express = require("express");
const mongoose = require("mongoose");
const api = require("./api");
require("dotenv").config();

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    const app = express();

    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const jsonParser = express.json();
    app.use(jsonParser);

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

    return app;
  } catch (ex) {
    throw new Error(ex);
  }
};

init()
  .then((app) => app.listen(port))
  .then(() => {
    console.log("Server started on port:", port);
  })
  .catch((err) => {
    console.error(err);
  });
