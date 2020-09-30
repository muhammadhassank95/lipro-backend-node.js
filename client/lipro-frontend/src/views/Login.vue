<template>
  <div>
    <md-field>
      <label>Login Name</label>
      <md-input v-model="loginname"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input type="password" v-model="password"></md-input>
    </md-field>
    <md-button @click="login" class="md-dense md-raised md-primary">Login</md-button>
  </div>
</template>

<script>
import UserService from "../services/user-service";
import router from "../router";
export default {
  name: "Login",

  data() {
    return {
      password: "",
      loginname: "",
    };
  },
  methods: {
    login() {
      UserService.login(this.loginname, this.password)
        .then((res) => {
          router.push(`/users`);
          router.go();
          localStorage.setItem("userToken", res.token);
          console.log(res);
        })
        .catch((e) => console.log(e));
      // console.log(this.response);
      // console.log(this.response.status);
      // console.log(this.response.body);

      // if (!response.status) {
      //   this.error = "";
      //   this.loginLoading = false;
      //   router.push(`/`);
      // } else {
      //   this.loginLoading = false;
      //   this.error = "Login details incorrect";
      // }
    },
  },
};
</script>