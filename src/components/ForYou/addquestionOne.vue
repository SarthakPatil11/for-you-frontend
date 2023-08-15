<template>
  <div class="panel">
    <div class="chapter-container">
      <heading></heading>
    </div>
    <div class="container">
      <div>
        Select Image as Question
        <div class="sub-container">
          <div
            class="image-container"
            v-for="image in getImage"
            :key="image.id"
          >
            <img
              class="image"
              :src="require(`../../assets/Routine/${image}`)"
              @click="selectedImage(image)"
            />
          </div>
        </div>
      </div>

      <div>
        <form class="form" @submit.prevent="addquestion">
          <div class="top">
            <label for="dropdown">Question :</label>
            <input
              type="text"
              :disabled="true"
              v-model="question"
              placeholder="Select Image"
            />
          </div>
          <div class="top">
            <label for="dropdown">Answer :</label>
            <input type="text" v-model="answer" placeholder="Answer" />
          </div>
          <button class="btn-color" type="submit">Add Question</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../service/apiService.js";
//   import arrow from "../../assets/arrow.png";
import heading from "./common/header.vue";
// import allImages from "../../assets/Routine"
// import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "addQuestion",

  components: {
    heading,
  },
  data() {
    return {
      getImage: [],
      question: "",
      answer: "",
      assignment: "",
    };
  },
  mounted() {
    this.assignment = this.$route.params.id;
    this.getAllImages();
    this.getAssignmentbyID(this.assignment);
    console.log(this.assignment, ">>this.assignment");
  },
  methods: {
    getAssignmentbyID(id) {
      ApiService.getAssignmentbyID(id)
        .then((res) => {
          console.log(res.data, ">this.assignment");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    getAllImages() {
      ApiService.getAllImages()
        .then((res) => {
          // this.getImage = res.data;
          this.setImageData(res.data)

          console.log(res.data, ">>getAllImages");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    setImageData(value){
      console.log(value,"??value")
      value.forEach((element) => {
            // console.log(element,">>ele")
            if (element.path === "Routine") {
              console.log(element.url)
              this.getImage.push(element.url); 
            }
          });
    },
    selectedImage(image) {
      console.log(image, ">>image");
      this.question = image;
    },
    addquestion() {
      if (!this.question || !this.answer) {
        return;
      }
      let uniqueID = uuidv4();
      const payload = {
        question: this.question,
        answer: this.answer,
        queID: `questionID${uniqueID}`,
        ansID: `answerID${uniqueID}`,
        assignmentId: this.assignment,
      };
      // console.log(this.assignment, ">>assignment");
      ApiService.createQuestion(payload)
        .then((res) => {
          //   this.getImage = res.data;
// console.log(this.getImage,">>this.getImage")
 
          console.log(res, ">>createQuestion");
          this.$router.go(-1);
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
      // questions : []
    },
  },
};
</script>

<style lang="less" scoped>
.image-container {
  width: 150px;
  height: 100px;
}
.image {
  width: 100%;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #b9b9b9;
  margin-top: 24px;
  height: 80vh;
}

.sub-container {
  display: grid;
  grid-template-columns: 28% 28% 28%;
  grid-gap: 6%;
  height: 60vh;
  overflow: scroll;
}
.form {
  background: wheat;
  padding: 24px;
  border-radius: 8px;
}
</style>
