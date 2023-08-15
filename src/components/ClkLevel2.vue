<template>
    <div>
        <TitleBar>
            <div class="col-2 clkhead">
                Activities
            </div>
            <div class="col-8 quehead">
                Quetions
            </div>
            <div class="col-2 tmhead">
                Times
            </div>
        </TitleBar>
        <MainSheet>
            <LeftBar class="col-2">
                <ImgComponent id="wuimg" draggable="true" src="Routine/wakeup.jpeg" alt="wakeup" />
                <ImgComponent id="btimg" draggable="true" src="Routine/bath.jpg" alt="bath" />
                <ImgComponent id="sclimg" draggable="true" src="Routine/school.jpg" alt="school" />
                <ImgComponent id="pyimg" draggable="true" src="Routine/play.jpg" alt="play" />
                <ImgComponent id="drimg" draggable="true" src="Routine/dinner.jpg" alt="dinner" />
                <ImgComponent id="slpimg" draggable="true" src="Routine/sleep.jpg" alt="sleep" />
            </LeftBar>
            <MidBar class="col-8">
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="wuimgcnt" val="Stick waked up picture." />
                    <TimeContainer id="wutmcnt" val="Stick, When you wake up?" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="btimgcnt" val="Stick taking a bath picture." />
                    <TimeContainer id="bttmcnt" val="Stick, When you take a bath?" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="sclimgcnt" val="Stick going to school picture." />
                    <TimeContainer id="scltmcnt" val="Stick, When you goto school?" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="pyimgcnt" val="Stick playing picture." />
                    <TimeContainer id="pytmcnt" val="Stick, When you play?" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="drimgcnt" val="Stick haveing dinner picture." />
                    <TimeContainer id="drtmcnt" val="Stick, When you have dinner?" />
                </div>
                <div class="col-lg-4 col-md-6">
                    <ImgContainer id="slpimgcnt" val="Stick sleeping picture." />
                    <TimeContainer id="slptmcnt" val="Stick, When you sleep?" />
                </div>
                <template v-slot:button>
                    <a href="#" class="btn mb-3 px-4 py-2 result" @click="resultL2()">Grab</a>
                </template>
            </MidBar>
            <RightBar class="col-2">
                <TextComponent id="wutm" draggable="true" text="7.00 AM" />
                <TextComponent id="bttm" draggable="true" text="8.00 AM" />
                <TextComponent id="scltm" draggable="true" text="9.00 AM" />
                <TextComponent id="pytm" draggable="true" text="5.00 PM" />
                <TextComponent id="drtm" draggable="true" text="7.00 PM" />
                <TextComponent id="slptm" draggable="true" text="9.00 PM" />
            </RightBar>
        </MainSheet>
    </div>
</template>

<script>
import TitleBar from "./TitleBar.vue"
import MainSheet from "./MainSheet.vue"
import LeftBar from "./LeftBar.vue"
import MidBar from "./MidBar.vue"
import RightBar from "./RightBar.vue"
import TextComponent from './TextComponent.vue';
import ImgComponent from './ImgComponent.vue';

import ImgContainer from './ImgContainer.vue';
import TimeContainer from './TimeContainer.vue';
export default {
    name: 'ClkLevel2',
    components: {
        TitleBar,
        MainSheet,
        LeftBar,
        MidBar,
        RightBar,
        TextComponent,
        ImgComponent,
        ImgContainer,
        TimeContainer,
    },
    data() {
        return {
            ct: 0,
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
        resultL2() {
            const answers = {
                "wuimgcnt": "wuimg",
                "wutmcnt": "wutm",
                "btimgcnt": "btimg",
                "bttmcnt": "bttm",
                "sclimgcnt": "sclimg",
                "scltmcnt": "scltm",
                "pyimgcnt": "pyimg",
                "pytmcnt": "pytm",
                "drimgcnt": "drimg",
                "drtmcnt": "drtm",
                "slpimgcnt": "slpimg",
                "slptmcnt": "slptm"
            };

            let clocks = document.getElementById('clocks');
            let dimg = document.querySelectorAll(".dimg");
            let cclk = this.check(dimg, clocks, answers);

            let times = document.getElementById('times');
            let dtm = document.querySelectorAll(".dtm");
            let ctm = this.check(dtm, times, answers);

            let result = cclk + ctm;

            let total_marks = dimg.length + dtm.length;
            this.show_result(result, total_marks);
        }
    }
}
</script>

<style scoped></style>
