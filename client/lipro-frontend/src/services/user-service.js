import doRequest from "./index";
import { baseUrl } from "../common/Constant";

const UserService = {
  // a function to call login api
  login: (loginname, password) => {
    console.log(loginname, password)
    return doRequest(
      "post",
      `${baseUrl}/auth/login/`,
      {
        loginname: loginname,
        password: password
      },
    );
  },

};

export default UserService;
