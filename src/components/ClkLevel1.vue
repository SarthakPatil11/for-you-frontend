<template>
    <div>
        <TitleBar>
            <div class="col-10 quehead">
                Quetions
            </div>
            <div class="col-2 tmhead">
                Times
            </div>
        </TitleBar>
        <MainSheet>
            <MidBar cls="col-10" fun="result2">
                <div class="col-lg-4 col-md-6">
                    <img id="oneimg" src="../assets/clock/one.png" alt="one o'clock">
                    <TimeContainer id="onetmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="twoimg" src="../assets/clock/two.png" alt="two o'clock">
                    <TimeContainer id="twotmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="threeimg" src="../assets/clock/three.png" alt="three o'clock">
                    <TimeContainer id="threetmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="fourimg" src="../assets/clock/four.png" alt="four o'clock">
                    <TimeContainer id="fourtmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="fiveimg" src="../assets/clock/five.png" alt="five o'clock">
                    <TimeContainer id="fivetmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="siximg" src="../assets/clock/six.png" alt="six o'clock">
                    <TimeContainer id="sixtmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="sevenimg" src="../assets/clock/seven.png" alt="seven o'clock">
                    <TimeContainer id="seventmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="eightimg" src="../assets/clock/eight.png" alt="eight o'clock">
                    <TimeContainer id="eighttmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="nineimg" src="../assets/clock/nine.png" alt="nine o'clock">
                    <TimeContainer id="ninetmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="tenimg" src="../assets/clock/ten.png" alt="ten o'clock">
                    <TimeContainer id="tentmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="elevenimg" src="../assets/clock/eleven.png" alt="eleven o'clock">
                    <TimeContainer id="eleventmcnt" :val="msg" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <img id="twelveimg" src="../assets/clock/twelve.png" alt="twelve o'clock">
                    <TimeContainer id="twelvetmcnt" :val="msg" />
                </div>
                <template v-slot:button>
                    <a href="#" class="btn mb-3 px-4 py-2 result" @click="resultL1()">Grab</a>
                </template>
            </MidBar>
            <RightBar class="col-2">
                <TextComponent id="one" draggable="true" text="1.00 o'clock" />
                <TextComponent id="two" draggable="true" text="2.00 o'clock" />
                <TextComponent id="three" draggable="true" text="3.00 o'clock" />
                <TextComponent id="four" draggable="true" text="4.00 o'clock" />
                <TextComponent id="five" draggable="true" text="5.00 o'clock" />
                <TextComponent id="six" draggable="true" text="6.00 o'clock" />
                <TextComponent id="seven" draggable="true" text="7.00 o'clock" />
                <TextComponent id="eight" draggable="true" text="8.00 o'clock" />
                <TextComponent id="nine" draggable="true" text="9.00 o'clock" />
                <TextComponent id="ten" draggable="true" text="10.00 o'clock" />
                <TextComponent id="eleven" draggable="true" text="11.00 o'clock" />
                <TextComponent id="twelve" draggable="true" text="12.00 o'clock" />
            </RightBar>
        </MainSheet>
    </div>
</template>

<script>
import TitleBar from "./TitleBar.vue"
import MainSheet from "./MainSheet.vue"
import MidBar from "./MidBar.vue"
import RightBar from "./RightBar.vue"
import TextComponent from './TextComponent.vue';

import TimeContainer from './TimeContainer.vue';
export default {
    name: 'ClkLevel1',
    components: {
        TitleBar,
        MainSheet,
        MidBar,
        RightBar,
        TextComponent,
        TimeContainer,
    },
    data() {
        return {
            ct: 0,
            msg: "Stick, Time showed in picture?",
        }
    },
    methods: {
        show_result(result, total_marks) {
            if (result == total_marks) {
                document.getElementById('super').style.display = "block";
                setTimeout(() => {
                    document.getElementById('super').style.opacity = .5;
                }, 1000);
                setTimeout(() => {
                    document.getElementById('super').style.display = "none";
                }, 1100);
                setTimeout(() => {
                    document.getElementById('super').style.opacity = 1;
                }, 1110);
            }
            else if (result > 0) {
                document.getElementById('choco').style.display = "block";
                setTimeout(() => {
                    document.getElementById('choco').style.opacity = .5;
                }, 1000);
                setTimeout(() => {
                    document.getElementById('choco').style.display = "none";
                }, 1100);
                setTimeout(() => {
                    document.getElementById('choco').style.opacity = 1;
                }, 1110);
            }
            else if (result == 0) {
                document.getElementById('oops').style.display = "block";
                setTimeout(() => {
                    document.getElementById('oops').style.opacity = .5;
                }, 1000);
                setTimeout(() => {
                    document.getElementById('oops').style.display = "none";
                }, 1100);
                setTimeout(() => {
                    document.getElementById('oops').style.opacity = 1;
                }, 1110);
            }

            let chocolate = document.getElementById('chocolatect');
            let chocolatect = parseInt(chocolate.innerText);
            chocolatect += result;
            chocolate.innerText = chocolatect.toString();
            chocolate.style.animation = "shake 1s";
            // console.log("Animetion: ",chocolate.style.animation);

            setTimeout(() => {
                chocolate.style.animation = "none";
            }, 1000);
        },
        remove_wrongEl(elements, elsid, section, answers) {
            for (const element of elements) {
                if (element.id) {
                    if (answers[elsid] == element.id) {
                        this.ct++;
                    }
                    else {
                        setTimeout(() => {
                            section.append(element);
                        }, 10);
                    }
                }
            }

            return this.ct;
        },
        check(itEl, section, answers) {
            this.ct = 0;

            for (const i of itEl) {
                let elements = i.children;
                let elsid = i.id;
                this.ct = this.remove_wrongEl(elements, elsid, section, answers);
            }

            return this.ct;
        },
        resultL1() {
            const answers = {
                "onetmcnt": "one",
                "twotmcnt": "two",
                "threetmcnt": "three",
                "fourtmcnt": "four",
                "fivetmcnt": "five",
                "sixtmcnt": "six",
                "seventmcnt": "seven",
                "eighttmcnt": "eight",
                "ninetmcnt": "nine",
                "tentmcnt": "ten",
                "eleventmcnt": "eleven",
                "twelvetmcnt": "twelve"
            }

            let times = document.getElementById('times');
            let dtm = document.querySelectorAll(".dtm");
            // console.log(dtm);

            let result = this.check(dtm, times, answers);

            let total_marks = dtm.length;
            this.show_result(result, total_marks);
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    height: auto;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>
