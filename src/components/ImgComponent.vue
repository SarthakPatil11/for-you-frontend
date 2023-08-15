<template>
    <img 
        :id="id"
        class="col-12 rounded-3 mb-2"
        :src="require(`../assets/${src}`)"
        :alt="alt"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.prevent
    >
</template>

<script>
export default {
    name: 'ImgComponent',
    props: [
        'id',
        'draggable',
        'src',
        'alt'
    ],
    data(){
        return{
            tgImg : null,
        }
    },
    methods: {
        dragStart: e => {
            const target = e.target;
            e.dataTransfer.setData('img_id', target.id);
        },
    }
}
</script>

<style scoped>
img {
    z-index: 1;
}
</style>