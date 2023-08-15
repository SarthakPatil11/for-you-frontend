

export default {
    ab: {
        Template: 'ImgTxt',
        LeftBar: [
            { Iid: 'wuimg', Isrc: 'Routine/wakeup.jpeg' },
            { Iid: 'btimg', Isrc: 'Routine/bath.jpg' },
            { Iid: 'sclimg', Isrc: 'Routine/school.jpg' },
            { Iid: 'pyimg', Isrc: 'Routine/play.jpg' },
            { Iid: 'drimg', Isrc: 'Routine/dinner.jpg' },
            { Iid: 'slpimg', Isrc: 'Routine/sleep.jpg' },
        ],
        MidBar: [
            { ICid: 'wuimgcnt', ICval: 'Stick waked up picture.', TCid: 'wutmcnt', TCval: 'Stick, When you wake up?' },
            { ICid: 'btimgcnt', ICval: 'Stick taking a bath picture.', TCid: 'bttmcnt', TCval: 'Stick, When you take a bath?' },
            { ICid: 'sclimgcnt', ICval: 'Stick going to school picture.', TCid: 'scltmcnt', TCval: 'Stick, When you goto school?' },
            { ICid: 'pyimgcnt', ICval: 'Stick playing picture.', TCid: 'pytmcnt', TCval: 'Stick, When you play?' },
            { ICid: 'drimgcnt', ICval: 'Stick haveing dinner picture.', TCid: 'drtmcnt', TCval: 'Stick, When you have dinner?' },
            { ICid: 'slpimgcnt', ICval: 'Stick sleeping picture.', TCid: 'slptmcnt', TCval: 'Stick, When you sleep?' },
        ],
        RightBar: [
            { Tid: 'wutm', Ttxt: '7.00 AM' },
            { Tid: 'bttm', Ttxt: '8.00 AM' },
            { Tid: 'scltm', Ttxt: '9.00 AM' },
            { Tid: 'pytm', Ttxt: '5.00 PM' },
            { Tid: 'drtm', Ttxt: '7.00 PM' },
            { Tid: 'slptm', Ttxt: '9.00 PM' },
        ]
    },
    cd: {
        Template: 'Txt',
        MidBar: [
            { Iid: 'oneimg', Isrc: 'clock/one.png', TCid: 'onetmcnt' },
            { Iid: 'twoimg', Isrc: 'clock/two.png', TCid: 'twotmcnt' },
            { Iid: 'threeimg', Isrc: 'clock/three.png', TCid: 'threetmcnt' },
            { Iid: 'fourimg', Isrc: 'clock/four.png', TCid: 'fourtmcnt' },
            { Iid: 'fiveimg', Isrc: 'clock/five.png', TCid: 'fivetmcnt' },
            { Iid: 'siximg', Isrc: 'clock/six.png', TCid: 'sixtmcnt' },
            { Iid: 'sevenimg', Isrc: 'clock/seven.png', TCid: 'seventmcnt' },
            { Iid: 'eightimg', Isrc: 'clock/eight.png', TCid: 'eighttmcnt' },
            { Iid: 'nineimg', Isrc: 'clock/nine.png', TCid: 'ninetmcnt' },
            { Iid: 'tenimg', Isrc: 'clock/ten.png', TCid: 'tentmcnt' },
            { Iid: 'elevenimg', Isrc: 'clock/eleven.png', TCid: 'eleventmcnt' },
            { Iid: 'twelveimg', Isrc: 'clock/twelve.png', TCid: 'twelvetmcnt' },
        ],
        RightBar: [
            { Tid: 'one', Ttxt: "1.00 o'clock" },
            { Tid: 'two', Ttxt: "2.00 o'clock" },
            { Tid: 'three', Ttxt: "3.00 o'clock" },
            { Tid: 'four', Ttxt: "4.00 o'clock" },
            { Tid: 'five', Ttxt: "5.00 o'clock" },
            { Tid: 'six', Ttxt: "6.00 o'clock" },
            { Tid: 'seven', Ttxt: "7.00 o'clock" },
            { Tid: 'eight', Ttxt: "8.00 o'clock" },
            { Tid: 'nine', Ttxt: "9.00 o'clock" },
            { Tid: 'ten', Ttxt: "10.00 o'clock" },
            { Tid: 'eleven', Ttxt: "11.00 o'clock" },
            { Tid: 'twelve', Ttxt: "12.00 o'clock" },
        ]
    },
    ef: {
        Template: 'Img',
        LeftBar: [
            { Iid: 'wuimg', Isrc: 'Routine/wakeup.jpeg' },
            { Iid: 'btimg', Isrc: 'Routine/bath.jpg' },
            { Iid: 'sclimg', Isrc: 'Routine/school.jpg' },
            { Iid: 'pyimg', Isrc: 'Routine/play.jpg' },
            { Iid: 'drimg', Isrc: 'Routine/dinner.jpg' },
            { Iid: 'slpimg', Isrc: 'Routine/sleep.jpg' },
        ],
        MidBar: [
            { ICid: 'wuimgcnt', ICval: 'Stick waked up picture.', Tid: 'wutm', Ttxt: '7.00 AM' },
            { ICid: 'btimgcnt', ICval: 'Stick taking a bath picture.', Tid: 'bttm', Ttxt: '8.00 AM' },
            { ICid: 'sclimgcnt', ICval: 'Stick going to school picture.', Tid: 'scltm', Ttxt: '9.00 AM' },
            { ICid: 'pyimgcnt', ICval: 'Stick playing picture.', Tid: 'pytm', Ttxt: '5.00 PM' },
            { ICid: 'drimgcnt', ICval: 'Stick haveing dinner picture.', Tid: 'drtm', Ttxt: '7.00 PM' },
            { ICid: 'slpimgcnt', ICval: 'Stick sleeping picture.', Tid: 'slptm', Ttxt: '9.00 PM' },
        ],
    },
    gi: {
        Template: 'ImgImg',
        LeftBar: [
            { ILid: 'wuimg', ILsrc: 'Routine/wakeup.jpeg' },
            { ILid: 'btimg', ILsrc: 'Routine/bath.jpg' },
            { ILid: 'sclimg', ILsrc: 'Routine/school.jpg' },
            { ILid: 'pyimg', ILsrc: 'Routine/play.jpg' },
            { ILid: 'drimg', ILsrc: 'Routine/dinner.jpg' },
            { ILid: 'slpimg', ILsrc: 'Routine/sleep.jpg' },
        ],
        MidBar: [
            { ICLid: 'wuimgcnt', ICLval: 'Stick waked up picture.', ICRid: 'oneimgcnt', ICRval: 'Stick waked up Time.', },
            { ICLid: 'btimgcnt', ICLval: 'Stick taking a bath picture.', ICRid: 'twoimgcnt', ICRval: 'Stick waked up Time.', },
            { ICLid: 'sclimgcnt', ICLval: 'Stick going to school picture.', ICRid: 'threeimgcnt', ICRval: 'Stick waked up Time.', },
            { ICLid: 'pyimgcnt', ICLval: 'Stick playing picture.', ICRid: 'fourimgcnt', ICRval: 'Stick waked up Time.', },
            { ICLid: 'drimgcnt', ICLval: 'Stick haveing dinner picture.', ICRid: 'fiveimgcnt', ICRval: 'Stick waked up Time.', },
            { ICLid: 'slpimgcnt', ICLval: 'Stick sleeping picture.', ICRid: 'siximgcnt', ICRval: 'Stick waked up Time.', },
        ],
        RightBar: [
            { IRid: 'oneimg', IRsrc: 'clock/one.png' },
            { IRid: 'twoimg', IRsrc: 'clock/two.png' },
            { IRid: 'threeimg', IRsrc: 'clock/three.png' },
            { IRid: 'fourimg', IRsrc: 'clock/four.png' },
            { IRid: 'fiveimg', IRsrc: 'clock/five.png' },
            { IRid: 'siximg', IRsrc: 'clock/six.png' },
        ]
    },
    hk: {
        Template: 'TxtTxt',
        LeftBar: [
            { TLid: 'wutm', TLtxt: '7.00 AM' },
            { TLid: 'bttm', TLtxt: '8.00 AM' },
            { TLid: 'scltm', TLtxt: '9.00 AM' },
            { TLid: 'pytm', TLtxt: '5.00 PM' },
            { TLid: 'drtm', TLtxt: '7.00 PM' },
            { TLid: 'slptm', TLtxt: '9.00 PM' },
        ],
        MidBar: [
            { TCLid: 'wuimgcnt', TCLval: 'Stick waked up picture.', TCRid: 'wutmcnt', TCRval: 'Stick, When you wake up?' },
            { TCLid: 'btimgcnt', TCLval: 'Stick taking a bath picture.', TCRid: 'bttmcnt', TCRval: 'Stick, When you take a bath?' },
            { TCLid: 'sclimgcnt', TCLval: 'Stick going to school picture.', TCRid: 'scltmcnt', TCRval: 'Stick, When you goto school?' },
            { TCLid: 'pyimgcnt', TCLval: 'Stick playing picture.', TCRid: 'pytmcnt', TCRval: 'Stick, When you play?' },
            { TCLid: 'drimgcnt', TCLval: 'Stick haveing dinner picture.', TCRid: 'drtmcnt', TCRval: 'Stick, When you have dinner?' },
            { TCLid: 'slpimgcnt', TCLval: 'Stick sleeping picture.', TCRid: 'slptmcnt', TCRval: 'Stick, When you sleep?' },
        ],
        RightBar: [
            { TRid: 'one', TRtxt: "1.00 o'clock" },
            { TRid: 'two', TRtxt: "2.00 o'clock" },
            { TRid: 'three', TRtxt: "3.00 o'clock" },
            { TRid: 'four', TRtxt: "4.00 o'clock" },
            { TRid: 'five', TRtxt: "5.00 o'clock" },
            { TRid: 'six', TRtxt: "6.00 o'clock" },
        ]
    }
}



// export default {
//     lotData: [
//         {
//             name: 'Hello hi how are you', bdg: 'complete',
//             astdata: [
//                 {
//                     name: 'Hello hi how are you', bdg: 'complete', astName: 'Django & Flask', astNum: '1', tm: '10', m: '6',
//                     tmplt: {
//                         Template: 'ImgTxt',
//                         LeftBar: [
//                             { Iid: 'wuimg', Isrc: 'Routine/wakeup.jpeg' },
//                             { Iid: 'btimg', Isrc: 'Routine/bath.jpg' },
//                             { Iid: 'sclimg', Isrc: 'Routine/school.jpg' },
//                             { Iid: 'pyimg', Isrc: 'Routine/play.jpg' },
//                             { Iid: 'drimg', Isrc: 'Routine/dinner.jpg' },
//                             { Iid: 'slpimg', Isrc: 'Routine/sleep.jpg' },
//                         ],
//                         MidBar: [
//                             { ICid: 'wuimgcnt', ICval: 'Stick waked up picture.', TCid: 'wutmcnt', TCval: 'Stick, When you wake up?' },
//                             { ICid: 'btimgcnt', ICval: 'Stick taking a bath picture.', TCid: 'bttmcnt', TCval: 'Stick, When you take a bath?' },
//                             { ICid: 'sclimgcnt', ICval: 'Stick going to school picture.', TCid: 'scltmcnt', TCval: 'Stick, When you goto school?' },
//                             { ICid: 'pyimgcnt', ICval: 'Stick playing picture.', TCid: 'pytmcnt', TCval: 'Stick, When you play?' },
//                             { ICid: 'drimgcnt', ICval: 'Stick haveing dinner picture.', TCid: 'drtmcnt', TCval: 'Stick, When you have dinner?' },
//                             { ICid: 'slpimgcnt', ICval: 'Stick sleeping picture.', TCid: 'slptmcnt', TCval: 'Stick, When you sleep?' },
//                         ],
//                         RightBar: [
//                             { Tid: 'wutm', Ttxt: '7.00 AM' },
//                             { Tid: 'bttm', Ttxt: '8.00 AM' },
//                             { Tid: 'scltm', Ttxt: '9.00 AM' },
//                             { Tid: 'pytm', Ttxt: '5.00 PM' },
//                             { Tid: 'drtm', Ttxt: '7.00 PM' },
//                             { Tid: 'slptm', Ttxt: '9.00 PM' },
//                         ]
//                     },
//                 },
//                 {
//                     name: 'Hello hi how are you', bdg: 'complete', astName: 'Django & Flask', astNum: '2', tm: '10', m: '7',
//                     tmplt: {
//                         Template: 'Txt',
//                         MidBar: [
//                             { Iid: 'oneimg', Isrc: 'clock/one.png', TCid: 'onetmcnt' },
//                             { Iid: 'twoimg', Isrc: 'clock/two.png', TCid: 'twotmcnt' },
//                             { Iid: 'threeimg', Isrc: 'clock/three.png', TCid: 'threetmcnt' },
//                             { Iid: 'fourimg', Isrc: 'clock/four.png', TCid: 'fourtmcnt' },
//                             { Iid: 'fiveimg', Isrc: 'clock/five.png', TCid: 'fivetmcnt' },
//                             { Iid: 'siximg', Isrc: 'clock/six.png', TCid: 'sixtmcnt' },
//                             { Iid: 'sevenimg', Isrc: 'clock/seven.png', TCid: 'seventmcnt' },
//                             { Iid: 'eightimg', Isrc: 'clock/eight.png', TCid: 'eighttmcnt' },
//                             { Iid: 'nineimg', Isrc: 'clock/nine.png', TCid: 'ninetmcnt' },
//                             { Iid: 'tenimg', Isrc: 'clock/ten.png', TCid: 'tentmcnt' },
//                             { Iid: 'elevenimg', Isrc: 'clock/eleven.png', TCid: 'eleventmcnt' },
//                             { Iid: 'twelveimg', Isrc: 'clock/twelve.png', TCid: 'twelvetmcnt' },
//                         ],
//                         RightBar: [
//                             { Tid: 'one', Ttxt: "1.00 o'clock" },
//                             { Tid: 'two', Ttxt: "2.00 o'clock" },
//                             { Tid: 'three', Ttxt: "3.00 o'clock" },
//                             { Tid: 'four', Ttxt: "4.00 o'clock" },
//                             { Tid: 'five', Ttxt: "5.00 o'clock" },
//                             { Tid: 'six', Ttxt: "6.00 o'clock" },
//                             { Tid: 'seven', Ttxt: "7.00 o'clock" },
//                             { Tid: 'eight', Ttxt: "8.00 o'clock" },
//                             { Tid: 'nine', Ttxt: "9.00 o'clock" },
//                             { Tid: 'ten', Ttxt: "10.00 o'clock" },
//                             { Tid: 'eleven', Ttxt: "11.00 o'clock" },
//                             { Tid: 'twelve', Ttxt: "12.00 o'clock" },
//                         ]
//                     },
//                 },
//                 {
//                     name: 'Hello hi how are you', bdg: 'not complete', astName: 'Django & Flask', astNum: '3', tm: '10', m: '4',
//                     tmplt: {
//                         Template: 'Img',
//                         LeftBar: [
//                             { Iid: 'wuimg', Isrc: 'Routine/wakeup.jpeg' },
//                             { Iid: 'btimg', Isrc: 'Routine/bath.jpg' },
//                             { Iid: 'sclimg', Isrc: 'Routine/school.jpg' },
//                             { Iid: 'pyimg', Isrc: 'Routine/play.jpg' },
//                             { Iid: 'drimg', Isrc: 'Routine/dinner.jpg' },
//                             { Iid: 'slpimg', Isrc: 'Routine/sleep.jpg' },
//                         ],
//                         MidBar: [
//                             { ICid: 'wuimgcnt', ICval: 'Stick waked up picture.', Tid: 'wutm', Ttxt: '7.00 AM' },
//                             { ICid: 'btimgcnt', ICval: 'Stick taking a bath picture.', Tid: 'bttm', Ttxt: '8.00 AM' },
//                             { ICid: 'sclimgcnt', ICval: 'Stick going to school picture.', Tid: 'scltm', Ttxt: '9.00 AM' },
//                             { ICid: 'pyimgcnt', ICval: 'Stick playing picture.', Tid: 'pytm', Ttxt: '5.00 PM' },
//                             { ICid: 'drimgcnt', ICval: 'Stick haveing dinner picture.', Tid: 'drtm', Ttxt: '7.00 PM' },
//                             { ICid: 'slpimgcnt', ICval: 'Stick sleeping picture.', Tid: 'slptm', Ttxt: '9.00 PM' },
//                         ],
//                     },
//                 },
//                 {
//                     name: 'Hello hi how are you', bdg: 'complete', astName: 'Django & Flask', astNum: '4', tm: '10', m: '1',
//                     tmplt: {
//                         Template: 'ImgImg',
//                         LeftBar: [
//                             { ILid: 'wuimg', ILsrc: 'Routine/wakeup.jpeg' },
//                             { ILid: 'btimg', ILsrc: 'Routine/bath.jpg' },
//                             { ILid: 'sclimg', ILsrc: 'Routine/school.jpg' },
//                             { ILid: 'pyimg', ILsrc: 'Routine/play.jpg' },
//                             { ILid: 'drimg', ILsrc: 'Routine/dinner.jpg' },
//                             { ILid: 'slpimg', ILsrc: 'Routine/sleep.jpg' },
//                         ],
//                         MidBar: [
//                             { ICLid: 'wuimgcnt', ICLval: 'Stick waked up picture.', ICRid: 'oneimgcnt', ICRval: 'Stick waked up Time.', },
//                             { ICLid: 'btimgcnt', ICLval: 'Stick taking a bath picture.', ICRid: 'twoimgcnt', ICRval: 'Stick waked up Time.', },
//                             { ICLid: 'sclimgcnt', ICLval: 'Stick going to school picture.', ICRid: 'threeimgcnt', ICRval: 'Stick waked up Time.', },
//                             { ICLid: 'pyimgcnt', ICLval: 'Stick playing picture.', ICRid: 'fourimgcnt', ICRval: 'Stick waked up Time.', },
//                             { ICLid: 'drimgcnt', ICLval: 'Stick haveing dinner picture.', ICRid: 'fiveimgcnt', ICRval: 'Stick waked up Time.', },
//                             { ICLid: 'slpimgcnt', ICLval: 'Stick sleeping picture.', ICRid: 'siximgcnt', ICRval: 'Stick waked up Time.', },
//                         ],
//                         RightBar: [
//                             { IRid: 'oneimg', IRsrc: 'clock/one.png' },
//                             { IRid: 'twoimg', IRsrc: 'clock/two.png' },
//                             { IRid: 'threeimg', IRsrc: 'clock/three.png' },
//                             { IRid: 'fourimg', IRsrc: 'clock/four.png' },
//                             { IRid: 'fiveimg', IRsrc: 'clock/five.png' },
//                             { IRid: 'siximg', IRsrc: 'clock/six.png' },
//                         ]
//                     },
//                 },
//                 {
//                     name: 'Hello hi how are you', bdg: 'not complete', astName: 'Django & Flask', astNum: '5', tm: '10', m: '9',
//                     tmplt: {
//                         Template: 'TxtTxt',
//                         LeftBar: [
//                             { TLid: 'wutm', TLtxt: '7.00 AM' },
//                             { TLid: 'bttm', TLtxt: '8.00 AM' },
//                             { TLid: 'scltm', TLtxt: '9.00 AM' },
//                             { TLid: 'pytm', TLtxt: '5.00 PM' },
//                             { TLid: 'drtm', TLtxt: '7.00 PM' },
//                             { TLid: 'slptm', TLtxt: '9.00 PM' },
//                         ],
//                         MidBar: [
//                             { TCLid: 'wuimgcnt', TCLval: 'Stick waked up picture.', TCRid: 'wutmcnt', TCRval: 'Stick, When you wake up?' },
//                             { TCLid: 'btimgcnt', TCLval: 'Stick taking a bath picture.', TCRid: 'bttmcnt', TCRval: 'Stick, When you take a bath?' },
//                             { TCLid: 'sclimgcnt', TCLval: 'Stick going to school picture.', TCRid: 'scltmcnt', TCRval: 'Stick, When you goto school?' },
//                             { TCLid: 'pyimgcnt', TCLval: 'Stick playing picture.', TCRid: 'pytmcnt', TCRval: 'Stick, When you play?' },
//                             { TCLid: 'drimgcnt', TCLval: 'Stick haveing dinner picture.', TCRid: 'drtmcnt', TCRval: 'Stick, When you have dinner?' },
//                             { TCLid: 'slpimgcnt', TCLval: 'Stick sleeping picture.', TCRid: 'slptmcnt', TCRval: 'Stick, When you sleep?' },
//                         ],
//                         RightBar: [
//                             { TRid: 'one', TRtxt: "1.00 o'clock" },
//                             { TRid: 'two', TRtxt: "2.00 o'clock" },
//                             { TRid: 'three', TRtxt: "3.00 o'clock" },
//                             { TRid: 'four', TRtxt: "4.00 o'clock" },
//                             { TRid: 'five', TRtxt: "5.00 o'clock" },
//                             { TRid: 'six', TRtxt: "6.00 o'clock" },
//                         ]
//                     }
//                 },
//             ]
//         },
//     ]
// }