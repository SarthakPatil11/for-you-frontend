<template>
  <div>
    <heading></heading>
    <div class="main-container">
      <div class="col-2 clkhead">
        <span class="title"> Activities</span>
        <div class="component-wrapper" id="column1">
          <div
            class="image-container"
            v-for="(image, index) in setQuestions"
            :key="image.id"
          >
            <img
              class="image"
              :src="require(`../../assets/Routine/${image.src}`)"
              draggable="true"
              @dragstart="onDragStart($event, index)"
              @dragover.prevent
            />
          </div>
        </div>
      </div>
      <div class="col-8 quehead">
        <span class="title"> Questions</span>
        <div id="column2">
          <div class="btn-container">
            <button @click="refreshPage()">Reset Question</button>
            <button v-if="role === 'teacher'" @click="addQuestion()">
              Add Question
            </button>
          </div>

          <div class="middlecard">
            <div v-for="(image, index) in column2Images" :key="index">
              <div>
                <img
                  class="column2ImagesQuestion"
                  :src="image.src"
                  draggable="false"
                  @dragover.prevent
                  @drop="onDrop($event, index)"
                />
              </div>
              <div
                class="column2ImagesAnswer"
                draggable="false"
                @dragover.prevent
                @drop="onDropAnswer($event, index)"
              >
                <span>{{ image.asrc }}</span>
              </div>
            </div>
          </div>
          <div class="result-btn">

            <button @click="back()">Go back to All Assignments</button>
            <button @click="getResult()">Get Result</button>
          </div>
        </div>
      </div>
      <div class="col-2 tmhead">
        <span class="title"> Times</span>

        <div
          v-for="(answer, index) in setAnswer"
          :key="index"
          class="component-wrapper"
          @click="test(tab)"
        >
          <div
            class="image-container"
            draggable="true"
            @dragstart="onDragStartAnswer($event, index)"
            @dragover.prevent
          >
            <!-- <img
              :src="require(`../../assets/${answer}`)"
              alt="Image"
              class="image"
            /> -->
            {{ answer.src }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageSrc from "../../assets/Routine/bath.jpg";
import heading from "./common/header.vue";
import ApiService from "../service/apiService.js";
export default {
  name: "TempletOne",
  components: {
    heading,
  },
  data() {
    return {
      data: [],
      msg: "Stick, Time showed in picture?",
      trail: {},
      allQuestions: [],
      getQuestions: [],
      src: "",
      setQuestions: [],

      column2Images: [],
      setAnswer: [],
      isHovering: false,
      imageSrc: imageSrc,
      setIndex: "",
      setIndexAnswer: "",
      userId: "",
      user_data: {},
      chapterId: "",
      assignmentId: "",
      role: "",
      correctAnsweredID: [],
      total_count: 0,
      // points: 0,
    };
  },
  mounted() {
    const data = localStorage.getItem("user");
    this.user_data = JSON.parse(data);
    this.userId = this.user_data._id;
    this.chapterId = this.$route.params.chapterId;
    console.log(this.$route.params.id, ">>>", this.chapterId);
    this.assignmentId = this.$route.params.id;
    this.role = this.user_data.role;
    this.getAssignmentbyID(this.assignmentId);
  },
  methods: {
    addQuestion() {
      this.$router.push(
        `/assignment/${this.$route.params.chapterId}/templateOne/${this.$route.params.id}/addquestion`
      );
    },
    onDragStartAnswer(event, index) {
      this.setIndexAnswer = index;
      console.log(event.target, ">>setIndexAnswer");
      event.dataTransfer.setData("text/plain", event.target.src);
    },

    onDragStart(event, index) {
      this.setIndex = index;
      console.log(event.target.src, ">>");
      event.dataTransfer.setData("text/plain", event.target.src);
      console.log(
        event.dataTransfer.setData("text/plain", event.target.src),
        ">>"
      );
    },

    onDrop(event, key) {
      event.preventDefault();

      console.log(this.setQuestions[this.setIndex], ">>this.setIndex");
      const checkDataIsCorrect =
        this.setQuestions[this.setIndex]?.id.includes("questionID");
      console.log(
        checkDataIsCorrect,
        ">>checkDataIsCorrectcheckDataIsCorrectcheckDataIsCorrect"
      );
      if (!checkDataIsCorrect) {
        console.log("bbbb??");
        return;
      }
      // console.log(event.dataTransfer, ">>image");
      const imageSRC = event.dataTransfer.getData("text/plain");
      this.column2Images[key].src = imageSRC;
      this.column2Images[key].id = this.setQuestions[this.setIndex].id;
      // this.setQuestions[this.setIndex]
      this.column2Images[key].questionOriginalID =
        this.setQuestions[this.setIndex].questionOriginalID;
      console.log(
        this.setQuestions[this.setIndex],
        "this.setQuestions[this.setIndex]"
      );
      this.setQuestions.splice(this.setIndex, 1);
      this.setIndex = "";
      // console.log(a, ">>a");
    },

    onDropAnswer(event, key) {
      event.preventDefault();
      console.log(
        this.setAnswer[this.setIndexAnswer],
        ">>this.setAnswer[this.setIndexAnswer]"
      );
      const checkDataIsCorrect =
        this.setAnswer[this.setIndexAnswer]?.id.includes("answerID");
      console.log(checkDataIsCorrect, ">>checkDataIsCorrect");
      if (!checkDataIsCorrect) {
        console.log("aaaaa??");
        return;
      }
      // const checkAnswer = this.setAnswer[this.setIndexAnswer].id.includes('a-')
      // console.log(checkAnswer,"??")
      // const val = event.dataTransfer.getData("text/plain");
      this.column2Images[key].asrc = this.setAnswer[this.setIndexAnswer].src;
      this.column2Images[key].aid = this.setAnswer[this.setIndexAnswer].id;
      // console.log(this.setAnswer[this.setIndexAnswer], ">>this.setIndexAnswer");
      this.setAnswer.splice(this.setIndexAnswer, 1);
      this.setIndexAnswer = "";
      // console.log(a, ">>a");
    },

    // onDropAnswer(event, key) {
    //   event.preventDefault();
    //   const imageSRC = event.dataTransfer.getData("text/plain");
    //   this.column2Images[key].asrc = imageSRC;
    //   console.log(this.column2Images[key].asrc, ">>this.column2Images[0]");
    //   let a = this.setQuestions.splice(this.setIndex, 1);
    //   console.log(a, ">>a");
    // },
    refreshPage() {
      window.location.reload();
    },
    back(){
      this.$router.go(-1);
    },
    getAssignmentbyID(id) {
      ApiService.getAssignmentbyID(id)
        .then((res) => {
          console.log(res, ">>res111111");
          this.correctAnsweredID = res.data.answered_question_id;
          this.getQuestions = res.data.questions;
          this.ifQuestionanswered();
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    ifQuestionanswered() {
      this.total_count = this.getQuestions.length;
      let answeredData = []
      this.getQuestions.forEach((question) => {
        this.correctAnsweredID.forEach((item)=>{
          if(item.userId === this.userId){
            if(item.questionID === question._id){
              console.log(question,"count");
              answeredData.push(question._id)
            }
          }
        })
      });
      this.getQuestions.forEach((ele)=>{
          if(!answeredData.includes(ele._id)){
            console.log("count1");
            this.allQuestions.push(ele);
          }
        })
      this.arranageData();
    },
    arranageData() {
      this.allQuestions.forEach((element) => {
        console.log(element, "elee");
        this.setQuestions.push({
          id: element.queID,
          src: element.question,
          questionOriginalID: element._id,
        });
        this.column2Images.push({
          id: "",
          src: null,
          aid: "",
          asrc: null,
          questionOriginalID: "",
        });
        this.setAnswer.push({ id: element.ansID, src: element.answer });
      });
    },
    test(tab) {
      console.log(tab, ">>>>>tab");
    },
    getResult() {
      // console.log(this.points, ">>result");
      let score = 0;
      this.column2Images.forEach((set) => {
        // let index = 0
        console.log(set, ">>setehvdbjnkvjnk");
        if (set.id && set.aid) {
          let questionID = set.id.replace("questionID", "");
          let answerID = set.aid.replace("answerID", "");

          if (questionID === answerID) {
            score = score + 2;
            // this.column2Images.splice(index,1)
            this.correctAnsweredID.push({
              questionID: set.questionOriginalID,
              userId: this.userId,
            });
          }
        }
        // index = index+1
      });
      // this.allQuestions.forEach((question)=>{
      //   let index = 0
      //   console.log(question,">>question vdkdbsjnkmdbhj sddbjns bdcjnsk")
      //   // if(this.correctAnsweredID.includes(question._id)){
      //   //   console.log("count")
      //   //   this.allQuestions.splice(index,1)
      //   // }
      //   // index = index + 1
      // })

      // console.log(this.correctAnsweredID, ">after this.correctAnsweredID");
      ApiService.getUserById(this.userId)
        .then((res) => {
          console.log(res.data, ">>get totalPoints");
          this.points = score + res.data.totalPoints;
          console.log(this.points, ">when previous points are added");

          this.updatePoints(this.points);
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
      // console.log(this.points, ">>payload");
      // let userId = localStorage.

      // });
      // window.location.reload();
    },
    updatePoints(value) {
      console.log(value, ">>value");
      let payload = {
        totalPoints: value,
      };
      // ApiService
      ApiService.updateUser(payload, this.userId)
        .then((res) => {
          // localStorage.setItem('user', JSON.stringify(res))
          console.log(res, ">>updatedUser");
          this.updatedQuestionCount();

          // this.$toast.success("Operation successful!");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },

    updatedQuestionCount() {
      // console.log(value, ">>value");
      // this.ifQuestionanswered()
      let status = false;
      // let total_count = this.correctAnsweredID.length + this.allQuestions.length
      if (this.correctAnsweredID.length === this.total_count) {
        status = true;
      }

      console.log(status, ">>status");
      let payload = {
        Total_question: this.total_count,
        answered_question_id: this.correctAnsweredID,
        isCompleted: status,
        answered_question:this.correctAnsweredID.length
      };
      // ApiService
      ApiService.updatedAssignment(payload, this.assignmentId)
        .then((res) => {
          // localStorage.setItem('user', JSON.stringify(res))
          console.log(res, ">>updatedAssignment");
          window.location.reload();
          // this.$router.go(-1);
          // this.$router.go(-1);
          // this.$toast.success("Operation successful!");
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.image-container {
  // width: 300px;
  height: 16.66%;
  border: 1px solid #ccc;
  overflow: hidden;
  background: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-container {
  display: flex;
  height: 92vh;
}
.clkhead {
  background-color: rgb(0, 179, 255);
  overflow: scroll;
}
.quehead {
  background-color: rgb(136, 136, 136);
  /* overflow: scroll; */
}
.tmhead {
  background-color: rgb(255, 224, 88);
  overflow: scroll;
}
.component-wrapper {
  padding: 12px;
}
.column {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border: 2px solid #aaa;
  margin: 10px;
}
.btn-container {
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
}
.block {
  width: 100%;
  height: 100px;
  border: 2px dashed #aaa;
  margin-bottom: 10px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid white;
}

.drop-zone {
  width: 20%;
  height: 20%;
  border: 2px dashed #ccc;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.drop-zone.hover {
  background-color: #f7f7f7;
}

.dragged-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.container {
  width: 300px;
  height: 300px;
  border: 2px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
}
.column2ImagesAnswer {
  background: cadetblue;
  border: 2px solid black;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.column2ImagesQuestion {
  margin-bottom: 16px;
  width: 150px;
  height: 150px;
}
.middlecard {
  display: grid;
  grid-template-columns: 28% 28% 28%;
  grid-gap: 6%;
  padding: 24px;
  height: 62vh;
  overflow: scroll;
  margin-top: 12px;
}

.result-btn {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
</style>
