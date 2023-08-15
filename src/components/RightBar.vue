<template>
    <div id="times" class="section" :class="cls" @dragover.prevent @drop.prevent="drop">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'RightBar',
    props: [
        'cls',
    ],
    methods: {
        drop: e => {
            const target = e.target;
            const text_id = e.dataTransfer.getData('text_id');
            const text = document.getElementById(text_id);

            text.style.display = 'block';
            if (target.id == "times") {
                // console.log("target::",target, target.id, typeof(target));
                target.appendChild(text);
            }
            else {
                // console.log("Element: ",target.parentElement);
                target.parentElement.appendChild(text);
            }
        }
    }
}
</script>

<style scoped>
#times{
    position: relative;
    overflow-y: auto;
    height: 93%;
    padding: 10px;
    background-color: rgb(255, 224, 88);
}
</style>