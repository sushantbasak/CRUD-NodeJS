const { User } = require("./userModel");

const createUser = async (body) => {
  try {
    const data = await User.create(body);

    if (data == null) return { result: null, hasError: false };

    const final = result.toJSON();

    return {
      hasError: false,
      result: final,
    };
  } catch (ex) {
    console.log(ex.message);
    return {
      result: null,
      hasError: true,
    };
  }
};

const findUser = async (id) => {
  try {
    const data = await User.findById(id);

    if (data == null) return { result: null, hasError: false };

    const final = data.toJSON();

    return { result: final, hasError: false };
  } catch (ex) {
    console.log(ex.message);
    return { result: null, hasError: true };
  }
};

const deleteUser = async (id) => {
  try {
    const data = await User.findByIdAndDelete(id);

    if (data == null) return { result: null, hasError: false };

    const final = data.toJSON();

    return { result: final, hasError: false };
  } catch (ex) {
    console.log(ex.message);
    return { result: null, hasError: true };
  }
};

module.exports = {
  createUser,
  findUser,
  deleteUser,
};
