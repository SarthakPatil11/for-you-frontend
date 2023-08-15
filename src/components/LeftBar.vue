<template>
    <div id="clocks" class="section" :class="cls"  @dragover.prevent @drop.prevent="drop">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LeftBar',
    props: [
        'cls',
    ],
    methods: {
        drop: (e) => {
            const target = e.target;
            // console.log(target);
            const img_id = e.dataTransfer.getData('img_id');
            const img = document.getElementById(img_id);

            img.style.display = 'block';
            if (target.id == "clocks") {
                // console.log("target::",target);
                target.appendChild(img);
            }
            else {
                // console.log("Element: ",target.parentElement);
                target.parentElement.appendChild(img);
            }
        },
    }
}
</script>

<style scoped>
#clocks {
    position: relative;
    overflow-y: auto;
    height: 93%;
    padding: 10px;
    background-color: rgb(0, 179, 255);
}
</style>