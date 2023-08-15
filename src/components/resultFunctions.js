export default {
    data(){
        return{
            ct: 0
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
        createArray(what, from){
            let array = [];
            for (let f in from) {
                array.push(from[f][what]);
            }
            return array;
        },
        createObject(keys, vals){
            let answers = {};
            for (let i in keys) {
                console.log(vals[i],">>vals[i]")
                console.log(keys[i],">>answers[keys[i]]")

                answers[keys[i]] = vals[i];
            }
            // console.log(vals[i],">>asnwer")
            return answers;
        },
        getAnswersImgTxt(data) {
            
            let answers = {};
            let keys = [], vals = [];

            // for loop for keys
            keys = this.createArray('ICid', data.MidBar);
            keys = keys.concat(this.createArray('TCid', data.MidBar));

            // for loop for vals
            vals = this.createArray('Iid', data.LeftBar);
            vals = vals.concat(this.createArray('Tid', data.RightBar));

            console.log(keys,"checking data",vals)

            // for loop for creating ans obj
            answers = this.createObject(keys, vals);

            console.log(keys, vals, answers);
            return answers;
        },
        resultImgTxt(data) {
            console.log(data,">>resu");
            const answers = this.getAnswersImgTxt(data);
            console.log(">>>>answer resultImgTxt")

            let clocks = document.getElementById('clocks');
            let dimg = document.querySelectorAll(".dimg");
            let cclk = this.check(dimg, clocks, answers);

            let times = document.getElementById('times');
            let dtm = document.querySelectorAll(".dtm");
            let ctm = this.check(dtm, times, answers);

            let result = cclk + ctm;

            let total_marks = dimg.length + dtm.length;
            this.show_result(result, total_marks);
        },
        getAnswersTxt(data) {
            let answers = {};
            let keys = [], vals = []
            // console.log(data,">>>>>>>>dat");

            // for loop for keys
            keys = this.createArray('TCid', data.MidBar);
            console.log(keys,">>>keys")

            // for loop for vals
            vals = this.createArray('Tid', data.RightBar);
            console.log(vals,">>>vals")

            // for loop for creating ans obj
            answers = this.createObject(keys, vals);

            // console.log(keys, vals, answers);
            return answers;
        },
        resultTxt(data) {
            // console.log(data);
            const answers = this.getAnswersTxt(data);

            let times = document.getElementById('times');
            let dtm = document.querySelectorAll(".dtm");
            let result = this.check(dtm, times, answers);

            let total_marks = dtm.length;
            this.show_result(result, total_marks);
        },
        getAnswersImg(data){
            let answers = {};
            let keys = [], vals = [];

            keys = this.createArray('ICid', data.MidBar);

            vals = this.createArray('Iid', data.LeftBar);

            answers = this.createObject(keys, vals);

            console.log(keys, vals, answers);
            return answers;
        },
        resultImg(data){
            console.log(data);
            const answers = this.getAnswersImg(data);

            let clocks = document.getElementById('clocks');
            let dimg = document.querySelectorAll(".dimg");
            let result = this.check(dimg, clocks, answers);

            let total_marks = dimg.length;
            this.show_result(result, total_marks);
        },
        getAnswersImgImg(data){
            let answers = {};
            let keys = [], vals = [];

            keys = this.createArray('ICLid', data.MidBar);
            keys = keys.concat(this.createArray('ICRid', data.MidBar));

            vals = this.createArray('ILid', data.LeftBar);
            vals = vals.concat(this.createArray('IRid', data.RightBar));

            answers = this.createObject(keys, vals);

            console.log(keys, vals, answers,"checl");
            return answers;
        },
        resultImgImg(data){
            console.log(data);
            const answers = this.getAnswersImgImg(data);
            console.log(answers,">>>>>>>>>>answer");

            let clocks = document.getElementById('clocks');
            let dimg = document.querySelectorAll(".dimg");
            let result = this.check(dimg, clocks, answers);

            let total_marks = dimg.length;
            this.show_result(result, total_marks);
        },
        getAnswersTxtTxt(data){
            let answers = {};
            let keys = [], vals = [];

            keys = this.createArray('TCLid', data.MidBar);
            keys = keys.concat(this.createArray('TCRid', data.MidBar));

            vals = this.createArray('TLid', data.LeftBar);
            vals = vals.concat(this.createArray('TRid', data.RightBar));

            answers = this.createObject(keys, vals);

            console.log(keys, vals, answers);
            return answers;
        },
        resultTxtTxt(data){
            console.log(data);
            const answers = this.getAnswersTxtTxt(data);
            console.log(answers);

            let times = document.getElementById('times');
            let dtm = document.querySelectorAll(".dtm");
            let result = this.check(dtm, times, answers);

            let total_marks = dtm.length;
            this.show_result(result, total_marks);
        }
    }
}