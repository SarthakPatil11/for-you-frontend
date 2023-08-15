<template>
  <div class="signup">
    <div class="right-container"><p>For You Learn And Fun</p></div>
    <div class="left-container">
      <div class="signup-card">
        <h2 class="create-head">Create Account</h2>
        <form class="signup-form" @submit.prevent="signup">
          <!-- <div> -->
            <!-- <label for="dropdown">Name :</label> -->
            <input type="text" v-model="name" placeholder="Name" />
          <!-- </div> -->
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Email :</label> -->
            <input type="text" v-model="email" placeholder="Email" />
          <!-- </div> -->
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Password :</label> -->
            <input type="password" v-model="password" placeholder="Password" />
          <!-- </div> -->
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Select Role :</label> -->
            <select id="dropdown" v-model="selectedOption">
              <option value="" disabled selected>Select an Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          <!-- </div> -->
          <button class="top" type="submit">Sign Up</button>
        </form>
        <span class="card-3" @click="openLogin">Already have an account?</span>
      </div>
    </div>

    <!-- <div v-if="showchapter"><chapter></chapter></div> -->
  </div>
</template>

<script>
import ApiService from "../service/apiService.js";
// import chapter from "../ForYou/chapter.vue"
//   import heading from './common/header.vue'
import forYouLogo from '../../assets/forYou-logo.png'
export default {
  name: "signup-Page",
  // components:{
  //   heading
  // },
  data() {
    return {
      selectedOption: "",
      name: "",
      email: "",
      password: "",
      imageUrl:forYouLogo
    };
  },
  methods: {
    signup() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        totalPoints:0,
        role: this.selectedOption,
      };
      console.log(payload,">>pa")
      ApiService.create(payload)
        .then((res) => {
            this.$router.push({
          path: `login`,
        });
          console.log(res, ">>res");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    openLogin(){
        this.$router.push({
          path: `login`,
        });
    }
  },
};
</script>

<style lang="less" scoped>
.signup {
  width: 100%;
  display: flex;
  height: 100vh;
  background-image: url("../../assets/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .right-container {
    width: 50%;
    font-size: xxx-large;
    padding: 24px;
    font-weight: bolder;
  }
  .card-3 {
    margin-top: 30px;
    cursor: pointer;
    font-size: x-large;
    font-weight: bold;
    display: flex;
    gap: 4px;
}
  .imgurl{
    width: 60%;
}
  .left-container {
    width: 50%;
    // background-color: rgb(0, 179, 255);
    padding: 7%;
    display: flex;
    align-items: center;
    .signup-card {
      background: rgba(255, 255, 255, 0.518);
      border-radius: 30px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .signup-form {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        width: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}
input {
  margin: 12px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px rgb(159, 159, 159);
  width: 95%;
}
select#dropdown {
    margin: 12px;
    width: 95%;
    border-radius: 10px;
    border: solid 1px rgb(159, 159, 159);
    padding: 10px;
}
label {
  margin-right: 8px;
}
.top {
  margin-top: 20px;
  width: 60%;
  // background: #fab704;
  color: #fab704;
  background-color: rgb(49,119,115);
  padding: 10px;
  border-radius: 10px;
  border: solid 1px black;
  font-size: large;
  font-weight: 800;
}
.card-3{
    cursor: pointer;
    margin-top: 12px;
    border-bottom: 2px solid;
}
.create-head{
  text-transform: uppercase;
  font-weight: bolder;
  // background: #fab704;
  // color: rgb(49,119,115);
  color: #fab704;
  background-color: rgb(49,119,115);
  padding: 12px;
  border-radius: 15px;
  width: 100%;
  text-align: center;
}
// h2 {
//   background: #fab704;
//   padding: 12px;
//   border-radius: 12px;
// }
</style>
