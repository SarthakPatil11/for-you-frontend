<template>
  <div class="login">
    <div class="right-container">
      <!-- <img :src="imageUrl" class="imgurl" /> -->
      <p>For You Learn And Fun</p>
    </div>
    <div class="left-container">
      <div class="login-card">
        <h2 class="login-heading">Login</h2>
        <form class="login-form" @submit.prevent="login">
          <!-- <div class="top"> -->
          <!-- <label for="dropdown">Email :</label> -->
          <input type="text" v-model="email" placeholder="Email" />
          <!-- </div> -->
          <!-- <div class="top"> -->
          <!-- <label for="dropdown">Password :</label> -->
          <input type="password" v-model="password" placeholder="Password" />
          <!-- </div> -->
          <button class="btn-color" type="submit">Login</button>
        </form>
        <div class="card-3" @click="redirectToSignup()">
          <span className="signup-footer"> Dont have an account?</span>
          <span class="signUp"> SignUp</span>
        </div>
      </div>
    </div>

    <!-- <div v-if="showchapter"><chapter></chapter></div> -->
  </div>
</template>

<script>
import ApiService from "../service/apiService.js";
// import chapter from "../ForYou/chapter.vue"
//   import heading from './common/header.vue'
import forYouLogo from "../../assets/forYou-logo.png";
export default {
  name: "login-Page",
  // components:{
  //   heading
  // },
  data() {
    return {
      selectedOption: "",
      email: "",
      password: "",
      imageUrl: forYouLogo,
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      ApiService.login(payload)
        .then((res) => {
          console.log(res, ">>res");
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push({
            path: `home`,
          });
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    redirectToSignup() {
      this.$router.push({
        path: `signup`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  // height: 100vh;
  .right-container {
    width: 50%;
    font-size: xxx-large;
    padding: 24px;
    font-weight: bolder;
  }
  .left-container {
    width: 50%;
    // background-color: rgb(0, 179, 255);
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-card {
      // background: yellowgreen;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 350px;
      border-radius: 4px;

      .login-form {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
}
h2 {
  background: #fab704;
  padding: 12px;
  border-radius: 12px;
}
label {
  margin-right: 8px;
}
input {
  margin: 12px;
}
.imgurl {
  width: 60%;
}
.card-3 {
  margin-top: 30px;
  cursor: pointer;
  // color: #00b3ff;
  font-size: x-large;
  font-weight: bold;
  display: flex;
  gap: 4px;
  border-bottom: 2px solid;
}
.top {
  margin-top: 24px;

}

.login-heading {
  font-weight: bolder;
}
.btn-color {
  padding: 4px;
  background: #fab704;
  border-radius: 8px;
  margin-top: 30px;
  // border-radius: 8px
}
.signUp{
  color: #a85339;
}
</style>
