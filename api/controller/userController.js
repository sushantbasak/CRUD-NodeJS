const router = require("express").Router();

const userService = require("../service/userService");

const createUser = async (req, res) => {
  try {
    const data = await userService.createUser(req.body);

    if (data.status === "ERROR_FOUND") {
      throw new Error("Unable to create User");
    }

    res.status(201).send({
      status: "Success",
      msg: "User Created Successfully",
      data: data.result,
    });
  } catch (ex) {
    res.status(400).send({
      success: "Error",
      msg: ex.message,
    });
  }
};

const findUser = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await userService.findUser(id);

    if (data.status === "ERROR_FOUND") {
      throw new Error("Something Wrong Happened");
    }

    if (data.status === "NOT_FOUND") {
      throw new Error("User Not found");
    }

    res.status(200).send({
      status: "Success",
      msg: "User found",
      data: data.result,
    });
  } catch (ex) {
    res.status(404).send({
      status: "Error",
      msg: ex.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await userService.findUser(id);

    if (data.status === "ERROR_FOUND") {
      throw new Error("Unable to delete User");
    }

    if (data.status === "NOT_FOUND") {
      throw new Error("Requested User Not exist");
    }

    res.status(200).send({
      status: "Success",
      msg: "User deleted",
    });
  } catch (ex) {
    res.status(404).send({
      status: "Error",
      msg: ex.message,
    });
  }
};

router.get("/health", (req, res) => {
  res.status(200).send({
    status: "Success",
    msg: "User UP",
  });
});

router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

module.exports = router;
