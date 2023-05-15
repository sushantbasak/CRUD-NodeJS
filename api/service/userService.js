const userQueries = require("../db/userQuery");

const createUser = async (data) => {
  const { result, hasError } = await userQueries.createUser(data);

  if (hasError || result == null) {
    return { status: "ERROR_FOUND" };
  }
  return { result, status: "USER_CREATED" };
};

const findUser = async (id) => {
  const { result, hasError } = await userQueries.findUser(id);

  if (hasError) {
    return { status: "ERROR_FOUND" };
  }

  if (result === null) return { status: "NOT_FOUND" };

  return { result, status: "USER_FOUND" };
};

const deleteUser = async (id) => {
  const { result, hasError } = await userQueries.deleteUser(id);

  if (hasError) {
    return { status: "ERROR_FOUND" };
  }

  if (result === null) return { status: "NOT_FOUND" };

  return { status: "USER_DELETED" };
};

module.exports = {
  createUser,
  findUser,
  deleteUser,
};
