import axios from "axios";

const userApi = process.env.REACT_APP_ROOT_API + "/user";
const loginUserApi = userApi + "/login";

const transactionApi = process.env.REACT_APP_ROOT_API + "/transaction";

//register user
export const postUser = async (userObj) => {
  try {
    console.log(userObj);
    const { data } = await axios.post(userApi, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userObj) => {
  try {
    console.log(userObj);
    const { data } = await axios.post(loginUserApi, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//return user Id
const getUserId = () => {
  const userStr = sessionStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;
  //   console.log(userObj);
  return userObj?._id || null;
};

//post Transaction
export const postTransactions = async (transObj) => {
  try {
    const userId = getUserId();
    // console.log(userId);
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.post(transactionApi, transObj, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//get Transaction
export const getTransactions = async () => {
  try {
    const userId = getUserId();
    // console.log(userId);
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.get(transactionApi, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
