const router = require("express").Router();

router.use("/user", require("./controller/userController"));

router.use("/health", (req, res) => {
  res.status(200).send({
    status: "Success",
    msg: "User UP",
  });
});

module.exports = router;
