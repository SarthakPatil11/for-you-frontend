<template>
  <div class="header-panel">
    <div class="header">
      <div class="header-card-1">
        <div class="navbar-brand">ForYOU</div>
        <div class="sub-heading-font" @click="openHome('home')">Home</div>
        <div class="sub-heading-font" @click="openChapter('chapter')">
          Chapter
        </div>
      </div>
      <div class="right-card">
        <div class="points-section">
          <img class="chocolateImg" src="../../../assets/chocolate.png" />
          <span class="points">{{ points }}</span>
        </div>
<div class="logout-section">
    <div class="login" @click="()=>showlogout = !showlogout" >
        <img class="chocolateImg" src="../../../assets/person-icon.jpeg" />
        <div class="sub-heading-font">{{user_name}}</div>
    </div>
    

    <div v-if="showlogout" @click="logout()" class="logout-btn">
        <img class="logout-icon" src="../../../assets/logout-btn.png" />
        <div >logout</div>
    </div>
  
</div>


      </div>
    </div>

    <!-- <div v-if="showchapter"><chapter></chapter></div> -->
  </div>
</template>

<script>
import ApiService from "../../service/apiService.js";
// import chapter from "../ForYou/chapter.vue"
export default {
  name: "foryou-header",
  data() {
    return {
      showHome: false,
      showchapter: false,
      user_data: {},
      points: "",
      user_name:'',
      showlogout:false,
      userId:''
    };
  },
  mounted() {
    const data = localStorage.getItem("user");
    this.user_data = JSON.parse(data);
    // console.log(this.user_data.totalPoints,"user")
    this.userId = this.user_data._id
    this.user_name = this.user_data.name
    // this.points = this.user_data.totalPoints;
    this.getUserbyId(this.userId)
  },
  methods: {
    openHome() {
      this.$router.replace(`/home`);
      // this.$router.go(`home`)
    },
    openChapter() {
      this.$router.replace(`/chapter`);
      // this.$router.go(`chapter`)
    },
    logout() {
      localStorage.clear();
      window.location.reload();
    },
    getUserbyId(id){
      ApiService.getUserById(id)
        .then((res) => {
          console.log(res,">>header")
          this.points = res.data.totalPoints
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e7e7e7;
  padding: 12px;
}
.right-card {
  display: flex;
  gap: 32px;
  align-items: center;
}
.chocolateImg {
  width: 30px;
  height: 30px;
}
.header-card-1 {
  display: flex;
  align-items: center;
  gap: 24px;
}
.points-section {
  display: flex;
  gap: 10px;
  background: #fab704;
  padding: 8px;
  border-radius: 24px;
  align-items: center;
}
.logout-icon{
    width: 18px;
}
.navbar-brand {
  color: rgb(255, 211, 54);
  font-weight: 900;
  font-size: x-large;
  border-radius: 6px;
  padding: 6px;
  background: rgb(0, 179, 255);
}
.sub-heading-font {
  font-weight: 700;
  cursor: pointer;
  color: #6d767d;
}
.login {
  color: #a85339;
  padding: 8px;
  background: #fab704;
  border-radius: 6px;
  display: flex;
    gap: 4px;
    align-items: center;
}
.points {
  font-weight: 900;
}
.logout-btn{
    position: absolute;
    background: white;
    padding: 8px;
    border-radius: 8px;
    margin-top: 8px;
    gap: 2px;
    display: flex;
    cursor: pointer;
}
</style>
