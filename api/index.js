const router = require("express").Router();

router.use("/user", require("./controller/userController"));

router.use("/health", (req, res) => {
  res.status(200).send({
    status: "Success",
    msg: "API UP",
  });
});

module.exports = router;
