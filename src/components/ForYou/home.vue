<template>
  <div class="home-panel">
    <div>
      <heading></heading>
    </div>
    <div class="image-container">
      <h1 class="overlay">
        “Online education is like a rising tide, it's going to lift all boats.”
      </h1>
      <div class="about-us">
      <h2> About us </h2>
      <p> Online learning platform Online learning platform Online learning platform Online learning platform Online learning platform Online learning platform Online learning platform  Online learning platform Online learning platform Online learning platform Online learning platform Online learning platform Online learning platform </p>
      <div  v-if="role === 'teacher'" class="overlay-text">
        <!-- <h2> Create your Chapters </h2>  -->
        <!-- <img :src="require(`../../assets/forYou-logo.png`)" class="imgurl" /> -->
        <button @click="openPopup">Create your Chapters</button>
      </div>
    </div>


    </div>


    <div class="popup-overlay" v-if="showPopup">
      <div class="popup">
        <div class="create-heading">
          <h2>Create Chapter</h2>
          <img
            @click="showPopup = false"
            class="cross-btn"
            src="../../assets/cross-btn.png"
          />
        </div>

        <form class="chapter-form" @submit.prevent="closePopup()">
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Chapter Name :</label> -->
            <input class="popup-field" type="text" v-model="chapterName" placeholder="Chapter Name" :maxlength="16"/>
          <!-- </div> -->
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Description :</label> -->
            <input class="popup-field" type="text" v-model="desc" placeholder="Description" :maxlength="20"/>
          <!-- </div> -->
          <button class="top" type="submit">Create</button>
        </form>
        <!-- <snackbar-component></snackbar-component> -->
        <!-- <button @click="closePopup">Close</button> -->
      </div>
    </div>
    
  </div>
</template>

<script>
// import ApiService from "../service/apiService.js";
// import chapter from "../ForYou/chapter.vue"
// import SnackbarComponent from './common/snackbar.vue';
import heading from "./common/header.vue";
import ApiService from "../service/apiService.js";
// import chocolate from '../../assets/ch.vue'
export default {
  name: "homePage",
  components: {
    heading,
    // SnackbarComponent
  },
  data() {
    return {
      // imageUrl:chocolate
      showPopup: false,
      chapterName: "",
      desc: "",
      userId: "",
      user_data: {},
      role: "",
    };
  },
  mounted() {
    
    const data = localStorage.getItem("user");
    this.user_data = JSON.parse(data);
    this.userId = this.user_data._id;
    this.role = this.user_data.role;
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      const payload = {
        chapter_name: this.chapterName,
        description: this.desc,
        isCompleted: false,
        userId: this.userId,
      };
      ApiService.createChapter(payload)
        .then((res) => {
          //   this.allChapter = res.data;
          this.resetValue();
          this.showPopup = false;
          // this.$refs.snackbarComponent.showSnackbar('Snackbar Message');
          console.log(res, ">>res");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    resetValue() {
      (this.chapterName = ""), (this.desc = "");
    },
  },
};
</script>

<style scoped>
.image-container {
  background-image: url("../../assets/home_background_logo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.overlay {
  padding: 24px;
}
.create-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.overlay-text {
  padding: 24px;
  margin: 10%;
  /* display: flex; */
}
button {
  border-radius: 18px;
  padding: 18px;
  font-weight: bolder;
  /* background: #facd32; */
}
.top{
  background: #facd32;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-field{
  margin: 12px;
}
.popup {
  background-color: moccasin;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
}

.popup h2 {
  margin-top: 0;
}

.popup p {
  margin-bottom: 10px;
}

.popup button {
  padding: 8px 16px;
}
/* .image-container {
  position: relative;
  display: inline-block;
}

.image {
  display: block;
  max-width: 100%;
}

.text-overlay {
  position: absolute;
  top: 8%;
  left: 34%;
  transform: translate(-50%, -50%);
  padding: 20px;
  color: black;
}


.overlay-text {
  padding: 24px;
} */
.cross-btn {
  width: 28px;
  cursor: pointer;
}
.about-us{
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 10%;
}
.chapter-form{
  display: flex;
    flex-direction: column;
}
</style>
