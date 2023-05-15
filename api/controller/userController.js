const router = require("express").Router();

router.get("/health", (req, res) => {
  res.status(200).send({
    status: "Success",
    msg: "API UP",
  });
});

module.exports = router;
