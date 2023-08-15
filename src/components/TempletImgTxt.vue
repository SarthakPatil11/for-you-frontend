<template>
  <div>
    <heading></heading>
    <div class="top">
        <TitleBar>
          <div class="col-2 clkhead">Activities</div>
          <div class="col-8 quehead">Questions</div>
          <div class="col-2 tmhead">Times</div>
        </TitleBar>
        <div>
            <LeftBar class="col-2">
            <ImgComponent
              v-for="img in data.LeftBar"
              :key="img.Iid"
              :id="img.Iid"
              draggable="true"
              :src="img.Isrc"
              alt="wakeup"
            />
          </LeftBar>
        </div>
      <!-- <div v-if="data.Template == 'ImgTxt'">
        <TitleBar>
          <div class="col-2 clkhead">Activities</div>
          <div class="col-8 quehead">Questions</div>
          <div class="col-2 tmhead">Times</div>
        </TitleBar>
        <MainSheet>
          <LeftBar class="col-2">
            <ImgComponent
              v-for="img in data.LeftBar"
              :key="img.Iid"
              :id="img.Iid"
              draggable="true"
              :src="img.Isrc"
              alt="wakeup"
            />
          </LeftBar>
          
          <MidBar class="col-8">
            <div
              v-for="ct in data.MidBar"
              :key="ct.ICid"
              class="col-lg-4 col-md-6"
            >
              <ImgContainer :id="ct.ICid" :val="ct.ICval" />
              <TimeContainer :id="ct.TCid" :val="ct.TCval" />
            </div>
            <template v-slot:button>
              <a href="#" class="btn mb-3 px-4 py-2 result" @click="result()"
                >Grab</a
              >
            </template>
          </MidBar>
          <RightBar class="col-2">
            <TextComponent
              v-for="txt in data.RightBar"
              :key="txt.Tid"
              :id="txt.Tid"
              draggable="true"
              :text="txt.Ttxt"
            />
          </RightBar>
        </MainSheet>
      </div>
      <div v-else-if="data.Template == 'Txt'">
        <TitleBar>
          <div class="col-10 quehead">Quetions</div>
          <div class="col-2 tmhead">Times</div>
        </TitleBar>
        <MainSheet>
          <MidBar class="col-10">
            <div
              v-for="ct in data.MidBar"
              :key="ct.ICid"
              class="col-lg-4 col-md-6"
            >
              <img
                :id="ct.Iid"
                :src="require(`../assets/${ct.Isrc}`)"
                alt="one o'clock"
              />
              <TimeContainer :id="ct.TCid" :val="msg" />
            </div>
            <template v-slot:button>
              <a href="#" class="btn mb-3 px-4 py-2 result" @click="result()"
                >Grab</a
              >
            </template>
          </MidBar>
          <RightBar class="col-2">
            <TextComponent
              v-for="txt in data.RightBar"
              :key="txt.Tid"
              :id="txt.Tid"
              draggable="true"
              :text="txt.Ttxt"
            />
          </RightBar>
        </MainSheet>
      </div>
      <div v-else-if="data.Template == 'Img'">
        <TitleBar>
          <div class="col-2 clkhead">Activities</div>
          <div class="col-10 quehead">Quetions</div>
        </TitleBar>
        <MainSheet>
          <LeftBar class="col-2">
            <ImgComponent
              v-for="img in data.LeftBar"
              :key="img.Iid"
              :id="img.Iid"
              draggable="true"
              :src="img.Isrc"
              alt="wakeup"
            />
          </LeftBar>
          <MidBar class="col-10">
            <div
              v-for="ct in data.MidBar"
              :key="ct.ICid"
              class="col-lg-4 col-md-6"
            >
              <TextComponent :id="ct.Tid" draggable="true" :text="ct.Ttxt" />
              <ImgContainer :id="ct.ICid" :val="ct.ICval" />
            </div>
            <template v-slot:button>
              <a href="#" class="btn mb-3 px-4 py-2 result" @click="result()"
                >Grab</a
              >
            </template>
          </MidBar>
        </MainSheet>
      </div>
      <div v-else-if="data.Template == 'ImgImg'">
        <TitleBar>
          <div class="col-2 clkhead">Activities</div>
          <div class="col-8 quehead">Quetions</div>
          <div class="col-2 clkhead">Activities</div>
        </TitleBar>
        <MainSheet>
          <LeftBar class="col-2">
            <ImgComponent
              v-for="img in data.LeftBar"
              :key="img.ILid"
              :id="img.ILid"
              draggable="true"
              :src="img.ILsrc"
              alt="wakeup"
            />
          </LeftBar>
          <MidBar class="col-8">
            <div
              v-for="ct in data.MidBar"
              :key="ct.ICLid"
              class="row match-pair"
            >
              <div class="col-6 col-lg-4">
                <ImgContainer :id="ct.ICLid" :val="ct.ICLval" />
              </div>
              <div class="col-6 col-lg-4">
                <ImgContainer :id="ct.ICRid" :val="ct.ICRval" />
              </div>
            </div>
            <template v-slot:button>
              <a href="#" class="btn mb-3 px-4 py-2 result" @click="result()"
                >Grab</a
              >
            </template>
          </MidBar>
          <LeftBar class="col-2">
            <ImgComponent
              v-for="img in data.RightBar"
              :key="img.IRid"
              :id="img.IRid"
              draggable="true"
              :src="img.IRsrc"
              alt="wakeup"
            />
          </LeftBar>
        </MainSheet>
      </div>
      <div v-else-if="data.Template == 'TxtTxt'">
        <TitleBar>
          <div class="col-2 tmhead">Times</div>
          <div class="col-8 quehead">Quetions</div>
          <div class="col-2 tmhead">Times</div>
        </TitleBar>
        <MainSheet>
          <RightBar class="col-2">
            <TextComponent
              v-for="txt in data.LeftBar"
              :key="txt.TLid"
              :id="txt.TLid"
              draggable="true"
              :text="txt.TLtxt"
            />
          </RightBar>
          <MidBar class="col-8">
            <div
              v-for="ct in data.MidBar"
              :key="ct.TCLid"
              class="row match-pair my-2"
            >
              <div class="col-6 col-lg-4">
                <TimeContainer :id="ct.TCLid" :val="ct.TCLval" />
              </div>
              <div class="col-6 col-lg-4">
                <TimeContainer :id="ct.TCRid" :val="ct.TCRval" />
              </div>
            </div>
            <template v-slot:button>
              <a href="#" class="btn mb-3 px-4 py-2 result" @click="result()"
                >Grab</a
              >
            </template>
          </MidBar>
          <RightBar class="col-2">
            <TextComponent
              v-for="txt in data.RightBar"
              :key="txt.TRid"
              :id="txt.TRid"
              draggable="true"
              :text="txt.TRtxt"
            />
          </RightBar>
        </MainSheet>
      </div> -->
    </div>
  </div>
</template>

<script>
import support from "./resultFunctions";
import TitleBar from "./TitleBar.vue";
// import MainSheet from "./MainSheet.vue";
// import LeftBar from "./LeftBar.vue";
// import MidBar from "./MidBar.vue";
// import RightBar from "./RightBar.vue";
// import TextComponent from "./TextComponent.vue";
// import ImgComponent from "./ImgComponent.vue";

// import ImgContainer from "./ImgContainer.vue";
// import TimeContainer from "./TimeContainer.vue";

import heading from "./ForYou/common/header.vue";
import ApiService from "./service/apiService.js";
// import check from "./data.js";
export default {
  name: "TempletImgTxt",
  components: {
    heading,
    TitleBar,
    // MainSheet,
    // LeftBar,
    // MidBar,
    // RightBar,
    // // TextComponent,
    // // ImgComponent,
    // ImgContainer,
    // TimeContainer,
  },
  data() {
    return {
      data: [],
      msg: "Stick, Time showed in picture?",
      trail: {},
      allQuestions : []
    };
  },
  mounted() {
    // this.data = check
    // this.id = this.$route.params.id;
    console.log(this.$route.params.id, ">>Template");
    // this.switchTab(this.id);
    // this.data = this.trail.lotData[0].astData;getAssignmentbyID
    this.getAssignmentbyID(this.$route.params.id)
    // console.log(this.data, ">>Template");.
  },
  methods: {
    getAssignmentbyID(id){
        ApiService.getAssignmentbyID(id)
        .then((res) => {
          console.log(res.data[0].questions, ">>res");
          this.allQuestions = res.data[0].questions
          this.arranageData()
        })
        .catch((err) => {
          console.log(err, ">>err");
        });
    },
    arranageData(){
        let setQuestions = []
        let setAnswer = []
        let setResult = []
        this.allQuestions.forEach(element => {
             let question = { Iid: element.queID, Isrc: element.question }
             let answer = { Tid: element.ansID, Ttxt: element.answer }
            let  MidBar = { ICid: element.queID, ICval: 'Stick waked up picture.', TCid: element.ansID, TCval: 'Stick, When you wake up?' }

                setQuestions.push(question)
                setResult.push(MidBar)
                setAnswer.push(answer)
        });

        this.data = {
            Template : 'ImgTxt',
            LeftBar : setQuestions,
            MidBar : setResult,
            RightBar : setAnswer
        }
        // this.data.push("Template : 'ImgTxt'")

        console.log(this.allQuestions,">>this.allQuestions>>")
        console.log(this.data,">>data>>")

    },
    // switchTab(value) {
    //   switch (value) {
    //     case "ab":
    //       this.data = check.ab;
    //       break;
    //     case "cd":
    //       this.data = check.cd;
    //       break;
    //     case "ef":
    //       this.data = check.ef;
    //       break;
    //     case "gi":
    //       this.data = check.gi;
    //       break;
    //     case "hk":
    //       this.data = check.hk;
    //       break;
    //   }
    // },
    result() {
    //   console.log(this.data,">>img");
      if (this.data.Template == "ImgTxt") {
        support.methods.resultImgTxt(this.data);
        // console.log(a, ">>a");
      } else if (this.data.Template == "Txt") {
        support.methods.resultTxt(this.data);
      } else if (this.data.Template == "Img") {
        support.methods.resultImg(this.data);
      } else if (this.data.Template == "ImgImg") {
        support.methods.resultImgImg(this.data);
      } else if (this.data.Template == "TxtTxt") {
        support.methods.resultTxtTxt(this.data);
      }
    },
  },
};
</script>

<style scoped>
img {
  height: auto;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.match-pair {
  justify-content: space-between;
  background-image: url("../assets/match_connect.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
}
.top {
  margin-top: 2px;
}
</style>
