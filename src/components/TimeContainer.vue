<template>
    <div :id="idT" ref="Txt" class="dtm"  @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop">
        <span>{{ val }}</span>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TimeContainers',
    props: [
        'idT',
        'val',
    ],
    mounted() {
        // setInterval(() => {
            let cnt = this.$refs.Txt;
            // console.log(cnt, cnt.childElementCount);
            if (cnt.childElementCount < 2) {
                cnt.getElementsByTagName('span')[0].style.display = 'block';
            }
            else {
                cnt.getElementsByTagName('span')[0].style.display = 'none';
            }
        // }, 0);
    },
    methods: {
        drop: e => {
            
            const text_id = e.dataTransfer.getData('text_id');
            const text = document.getElementById(text_id);
            console.log(text,">>e.dataTransfer")

            // text.style.display = 'block';
            console.log(e.target,">>a")
            e.target.appendChild(text);

        },
        dragOver: (e) => {
            const target = e.target;
            // console.log("dragOver", target);
            target.getElementsByTagName('span')[0].style.display = 'none';
        },
        dragLeave: (e) => {
            const target = e.target.parentElement;
            // console.log("dragLeave", target);
            if (target.id == "times") {
                target.getElementsByTagName('span')[0].style.display = 'block';
            }
            else {
                target.parentElement.getElementsByTagName('span')[0].style.display = 'block';
            }
        },
    }
}
</script>

<style scoped>
.dtm {
    position: relative;
    height: 40px;
    width: 100%;
    padding-top: 16px;
    background-color: rgb(194, 194, 194);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

span {
    position: absolute;
    margin-top: -15px;
    z-index: 0;
    text-align: center;
}
</style>