<template>
    <div :id="id" ref="Img" class="dimg" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop">
        <span >{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'ImgContainers',
    props: [
        'id',
        'val',
    ],
    data(){
        return{
            text : this.val,
            // id: this.idI,
        };
    },
    mounted() {
        // setInterval(() => {
            let cnt = this.$refs.Img;
            // console.log(cnt, cnt.childElementCount);
            if(cnt.childElementCount < 2) {
                cnt.getElementsByTagName('span')[0].style.display = 'block';
            }
            else{
                cnt.getElementsByTagName('span')[0].style.display = 'none';
            }
        // }, 0);
    },
    methods: {
        drop: (e) => {
            const img_id = e.dataTransfer.getData('img_id');
            const img = document.getElementById(img_id);
            console.log(img,">>img_id e.dataTransfer")

            // text.style.display = 'block';
            console.log(e.target," img_id >>a")
            // img.style.display = 'block';
            e.target.appendChild(img);
            // console.log(e.target,">>img")

        },
        dragOver : (e) => {
            const target = e.target.parentElement;
            // console.log("dragOver", target);
            target.getElementsByTagName('span')[0].style.display = 'none';
        }, 
        dragLeave : (e) => {
            const target = e.target.parentElement;
            // console.log("dragLeave", target);
            target.getElementsByTagName('span')[0].style.display = 'block';
        },
    }
}
</script>

<style scoped>
.dimg {
    position: relative;
    margin-bottom: 10px;
    min-height: 270px;
    width: 100%;
    background-color: rgb(194, 194, 194);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dimg::after{
    position: absolute;
}

span {
    position: absolute;
    z-index: 0;
    text-align: center;
}
</style>