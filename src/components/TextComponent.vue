<template>
    <p
        :id="id"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.prevent
    >{{ text }}</p>
</template>

<script>
export default {
    name: 'TextComponent',
    props: [
        'id',
        'draggable',
        'text',
    ],
    methods : {
        dragStart: e => {
            const target = e.target;
            console.log("card component: ",target);
            e.dataTransfer.setData('text_id', target.id);
        }
    }
}
</script>

<style scoped>
p {
    background-color: rgb(245, 190, 0);
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 10;
}
</style>