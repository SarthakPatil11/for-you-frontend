<template>
  <div class="assignment-panel">
    <heading></heading>
    <div class="card-1">
      <div class="heading-section-1">
        <span class="chapterName"
          >CHAPTER : {{ chapterName.toUpperCase() }}</span
        >
        <div v-if="isAbleTocreate">
          <button class="btn-container-1" @click="openPopup()">
            Create your Assignment
          </button>
        </div>
      </div>
      <!-- <span class="chapterName">CHAPTER : {{ chapterName.toUpperCase() }}</span> -->
      <div class="assignment-container">
        <div class="card" v-for="(item, index) in allAssignment" :key="index">
          <span class="card-section-11">Assignment : {{ index + 1 }}</span>
          <!-- <span class="chapterName">{{ chapterName }}</span> -->
          <div class="card-section-10">
            <div class="card-section-1">
              <div class="status">
                <span
                  v-if="item.answered_question === item.Total_question"
                  class="badge rounded-pill bg-success"
                  >Completed</span
                >
                <span v-else class="badge rounded-pill bg-danger"
                  >Not Completed</span
                >
              </div>
            </div>

            <div class="mid">
              <div class="card-section-13">
                <h2 class="chapter_name">{{ item.assignment_name }}</h2>
                <div>
                  <!-- <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
  </div> -->
                  <span class="description"
                    >{{ item.answered_question }}/{{
                      item.Total_question
                    }}</span
                  >
                </div>
              </div>
            </div>

            <div class="btn-container">
              <button
                class="btn-container-1"
                @click="openQuestions(item._id, item.question_type)"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div class="image-0" v-if="!allAssignment.length">
          <div class="image">
            <img
              class="image-1"
              :src="require(`../../assets/not-available.jpg`)"
            />
            <p>Assignment Not Available</p>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-overlay" v-if="showPopup">
      <div class="popup">
        <div class="create-heading">
          <h2>Create Assignment</h2>
          <img
            @click="showPopup = false"
            class="cross-btn"
            src="../../assets/cross-btn.png"
          />
        </div>

        <form class="assignment-form" @submit.prevent="closePopup()">
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Assignment Name :</label> -->
            <input class="popup-field" type="text" v-model="assignment_name" placeholder="Assignment Name" />
          <!-- </div> -->
          <!-- <div class="top">
            <label for="dropdown">Total_question :</label>
            <input type="number" v-model="Total_question" />
          </div> -->
          <!-- <div class="top">
            <label for="dropdown">Question Type :</label>
            <input type="number" v-model="question_type" />
          </div> -->
          <!-- <div class="top"> -->
            <!-- <label for="dropdown">Question Type :</label> -->
            <select class="popup-field" id="dropdown" v-model="question_type">
              <option value="" disabled selected>Select an Role</option>
              <option value="templateOne">Template One</option>
              <option value="templateTwo">Template Two</option>
              <option value="templateThree">Template Three</option>

            </select>
          <!-- </div> -->
          <button class="top" type="submit">Create</button>
        </form>

        <!-- <button @click="closePopup">Close</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ApiService from "../service/apiService.js";
import ApiService from "../service/apiService.js";
// import chapter from "../ForYou/chapter.vue"
import check from "../data.js";
import heading from "./common/header.vue";

export default {
  name: "assignmentPage",
  components: {
    heading,
  },
  data() {
    return {
      allAssignment: [],
      chapterId: "",
      chapterName: "",
      showPopup: false,
      assignment_name: "",
      // Total_question: "",
      question_type: "",
      answered_question: "",
      selectedFile: null,
      userId: "",
      getAllCreatedChapter: [],
      isAbleTocreate: false,
    };
  },
  mounted() {
    console.log(">>");
    const data = localStorage.getItem("user");
    this.user_data = JSON.parse(data);
    // console.log(this.user_data.totalPoints,"user")
    this.userId = this.user_data._id;
    console.log(this.userId,">>this.userId")
    this.chapterId = this.$route.params.id;
    this.getChapterById();
    console.log(check, ">>");
    this.getUserbyId(this.userId);
  },
  methods: {
    getUserbyId(id) {
      console.log(id,"idididdiiddididididididididididi")
      ApiService.getUserById(id)
        .then((res) => {
          console.log(res.data.chapter, ">>chapterResponse");
          this.getAllCreatedChapter = res.data.chapter;
          // this.points = res.data.totalPoints
          console.log( ">>chapterResponse2222");
          this.isChapterCreated();
          console.log(">>chapterResponse3333");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },

    isChapterCreated() {
      this.getAllCreatedChapter.forEach((chapter) => {
        if (chapter._id === this.chapterId) {
          this.isAbleTocreate = true;
        }
      });
    },

    openPopup() {
      this.showPopup = true;
      console.log(">>this.showPopup");
    },
    closePopup() {
      const payload = {
        assignment_name: this.assignment_name,
        Total_question: 0,
        question_type: this.question_type,
        answered_question: 0,
        // questions: [
        //   {
        //     queID: 1,
        //     ansID: 1,
        //   },
        // ],
        isCompleted: false,
        chapterId: this.chapterId,
      };
      ApiService.createAssignment(payload)
        .then((res) => {
          this.resetValue();
          this.showPopup = false;
          this.getChapterById();
          console.log(res, ">>res");
        })
        .catch((err) => {
          console.log(err, ">>createAssignment");
        });
    },
    resetValue() {
      (this.chapterName = ""), (this.desc = "");
      this.assignment_name = "", 
      this.question_type =""
    },
    setProgress(value) {
      this.progress = value;
    },
    getChapterById() {
      ApiService.getChapterById(this.chapterId)
        .then((res) => {
          this.chapterName = res.data.chapter_name;
          this.allAssignment = res.data.assignment;
          this.setAnsweredCount()
          console.log(res.data, ">>this.allAssignment.res.datres.datres.datres.dat");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    setAnsweredCount(){
      this.allAssignment.forEach((assignment)=>{
         console.log(assignment,">>>assignmentassignment")
         let count = 0
         assignment.answered_question_id.forEach((answeredId)=>{
          if(answeredId.userId === this.userId){
            count = count + 1
          }
          console.log(count,">>count")
          assignment.answered_question = count
         })
      })
      let payload = {
        assignment:this.allAssignment
      }
      ApiService.updateChapter(payload,this.chapterId)
        .then((res) => {
          // this.chapterName = res.data.chapter_name;
          // this.allAssignment = res.data.assignment;

          // this.setAnsweredCount()
          console.log(res.data, ">>this.allAssignment.rdat");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    openQuestions(id, type) {
      console.log(type, ">>item");
      switch (type) {
        case "templateOne":
          this.$router.push(`/assignment/${this.chapterId}/templateOne/${id}`);
          break;
        case "templateTwo":
          this.$router.push(`/assignment/${this.chapterId}/templateTwo/${id}`);
          break;
        case "templateThree":
          this.$router.push(`/assignment/${this.chapterId}/templateThree/${id}`);
          break;
      }
      // this.$router.push(`/assignment/${this.chapterId}/templateOne/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.heading-section-1 {
  display: flex;
  justify-content: space-between;
}
// .progress-bar {
//   width: 100%;
//   height: 20px;
//   background-color: #eee;
//   border-radius: 4px;
//   overflow: hidden;
// }

// .progress-bar__fill {
//   height: 100%;
//   background-color: #29d;
//   transition: width 0.3s ease-in-out;
// }
.assignment-container {
  overflow: scroll;
  margin-top: 12px;
  height: 80vh;
}
.card-section-11 {
  width: 20%;
  background: yellowgreen;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: center;
}
.card-section-13 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-1 {
  background: #e0ddd8;
  height: 100vh;
  padding: 20px;
}
.chapterName {
  font-weight: 600;
  font-weight: bold;
  font-size: xx-large;
  display: flex;
  color: #a85339;
  justify-content: center;
}
.cross-btn {
  width: 28px;
  cursor: pointer;
}
.create-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
// .mid_header{
//   dis
// }
.chapter_name {
  margin-left: 12%;
  color: #a85339;
  font-size: 32px;
  font-weight: 500;
}
.card {
  // padding: 20px;
  margin-top: 16px;
  // background: yellowgreen;
  display: flex;
  flex-direction: row;
}
.card-section-1 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // padding: 10px;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}

.btn-container-1 {
  padding: 4px;
  background: rgb(0, 179, 255);
  border-radius: 8px;
}
.top{
  background: #facd32;
  border-radius: 12px;
}
.card-section-10 {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
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

.popup {
  background-color: moccasin;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
}
.popup-field{
  margin: 12px;
}
.image-0 {
  display: flex;
  justify-content: center;
}
.assignment-form{
  display: flex;
    flex-direction: column;
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

.image {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
}
p {
  font-size: x-large;
}
.image-1 {
  width: 100%;
}
</style>
