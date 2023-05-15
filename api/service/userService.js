const userQueries = require("../db/userQuery");

const createUser = async (body) => {
  const data = await findUser(body);

  if (data.status === "USER_FOUND") {
    return { status: "USER_EXISTS" };
  }

  const { result, hasError } = await userQueries.createUser(body);

  if (hasError || result == null) {
    return { status: "ERROR_FOUND" };
  }
  return { result, status: "USER_CREATED" };
};

const findUser = async (body) => {
  const { result, hasError } = await userQueries.findUser(body);

  if (hasError) {
    return { status: "ERROR_FOUND" };
  }

  if (result === null) return { status: "NOT_FOUND" };

  return { result, status: "USER_FOUND" };
};

const findUserById = async (id) => {
  const { result, hasError } = await userQueries.findUserById(id);

  if (hasError) {
    return { status: "ERROR_FOUND" };
  }

  if (result === null) return { status: "NOT_FOUND" };

  return { result, status: "USER_FOUND" };
};

const deleteUserById = async (id) => {
  const { result, hasError } = await userQueries.deleteUserById(id);

  if (hasError) {
    return { status: "ERROR_FOUND" };
  }

  if (result === null) return { status: "NOT_FOUND" };

  return { status: "USER_DELETED" };
};

module.exports = {
  createUser,
  findUser,
  findUserById,
  deleteUserById,
};
