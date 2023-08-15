<template>
  <div class="chapter-container">
    <heading></heading>
    <div class="card-container">
      <div class="card" v-for="(item, index) in allChapter" :key="index">
        <div class="status">
          <span v-if="item.isCompleted" class="badge rounded-pill bg-success"
            >Completed</span
          >
          <span v-else class="badge rounded-pill bg-danger">Not Completed</span>
        </div>
        <div class="mid">
          <div class="mid_header">
            <h2 class="chapter_name">{{ item.chapter_name }}</h2>
            <span class="description">{{ item.description }}</span>
          </div>

          <div class="mid-bottom" @click="openAssignments(item._id)">
            <button class="View_all">
              View all assignments <img :src="imageUrl" class="imgurl" />
            </button>
            <!-- <span ></span> -->
          </div>
        </div>
      </div>
      <div v-if="!allChapter.length">
        <div class="image">
          <img
            class="image-1"
            :src="require(`../../assets/not-available.jpg`)"
          />
          <p>Chapter Not Available</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card">
    <div class="row top">
      <div class="bdg">
        <span v-if="bdg == 'complete'" class="badge rounded-pill bg-success"
          >Completed</span
        >
        <span v-else class="badge rounded-pill bg-secondary"
          >Not Completed</span
        >
      </div>
    </div>
    <div class="row mid">
      <p>CHAPTER</p> -->
  <!-- <h1>{{ name }}</h1> -->
  <!-- <h6>View all assignments</h6>
    </div> -->
  <!-- </div> -->
</template>

<script>
import ApiService from "../service/apiService.js";
import arrow from "../../assets/arrow.png";
import heading from "../ForYou/common/header.vue";
// import { useRouter } from "vue-router";
export default {
  name: "ChapterCard",
  // setup() {
  //   const router = useRouter()
  //   // const route = useRoute()
  //   function pushWithQuery(query) {
  //     router.push({
  //       name: 'search',
  //       query: {
  //         ...route.query,
  //         ...query,
  //       },
  //     })
  //   }
  // props: ["name", "bdg"],
  components: {
    heading,
  },
  data() {
    return {
      isCompleted: false,
      allChapter: [],
      imageUrl: arrow,
    };
  },
  mounted() {
    this.getAllChapter();
  },
  methods: {
    getAllChapter() {
      ApiService.getChapter()
        .then((res) => {
          this.allChapter = res.data;
          console.log(this.allChapter, ">>allChapter");
          this.isChapterCompleted();
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    isChapterCompleted() {
      this.allChapter.forEach((chapter) => {
        let status = [];
        chapter?.assignment?.forEach((assignment) => {
          console.log(assignment, ">>assignment");
          if (assignment.isCompleted) {
            status.push('true');
          }else{
            status.push('false');
          }
         

        });
        console.log(status, ">>stauts");
        console.log(status.includes("false"),">>status.includes(")
        if (status.includes("false")) {
          chapter.isCompleted = false;
        } else {
          chapter.isCompleted = true;
        }
        // let chapterStatus = status.includes("false")
        // console.log(chapterStatus,">chapterStatus")
        // if(chapterStatus){
        //   chapter.isCompleted = false
        // }else{
        //   chapter.isCompleted = true
        // }
      });
    },
    openAssignments(id) {
      // console.log(">>changes routes");
      // const router = useRouter()
      this.$router.push({
        path: `assignment/${id}`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.chapter-container {
  .card-container {
    display: grid;
    grid-template-columns: 22% 22% 22% 22%;
    grid-gap: 4%;
    padding: 20px;
    background: #e0ddd8;
    height: 93vh;
    overflow: scroll;
    .card {
      height: 300px;
      background-color: rgb(181, 230, 83);
      border-color: rgb(181, 230, 83);
      border-radius: 10px;
      .status {
        display: flex;
        justify-content: end;
        padding: 8px;
      }
      .mid {
        padding: 12px;
        margin: 8px;
        height: 90%;
        background-color: rgb(135, 194, 15);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
.imgurl {
  width: 12px;
  height: 12px;
}
.mid-bottom {
  display: flex;
  align-items: center;
  gap: 4px;
  // background: #00b3ff;
  //   border-radius: 8px;
  //   padding: 2px;
}
.View_all {
  font-size: smaller;
  font-weight: bold;
  border-radius: 8px;
  color: green;
  padding: 4px;
}
.description {
  color: #fff200;
  font-size: x-large;
  font-weight: 600;
}

.chapter_name {
  color: white;
  font-size: xx-large;
  font-weight: bold;
}
// .card .top {
//   margin: 5px 8px 5px 5px;
//   justify-content: right;
// }

// .card .top .bdg {
//   padding-right: 0px;
//   width: fit-content;
// }

// .card .card .mid p {
//   text-transform: capitalize;
//   font-weight: 800;
//   letter-spacing: 2px;
//   padding-bottom: 0px;
// }
// .card .mid h1 {
//   font-weight: 700;
//   letter-spacing: 1px;
//   color: rgb(255, 242, 0);
// }
.image {
  width: 300px;
  margin: 50% 0 0 170%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.image-1 {
  width: 300px;
}
p {
  font-size: xx-large;
}
</style>
