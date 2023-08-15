<template>
    <div id="quetions" class="section" :class="cls">
        <div class="row gy-3 mt-2 mb-3">
            <slot></slot>
        </div>
        <slot name="button"></slot>
    </div>
</template>

<script>
export default {
    name: 'MidBar',
    props: [
        'cls',
    ],
}
</script>

<style scoped>
#quetions {
    position: relative;
    overflow-y: auto;
    height: 93%;
    background-color: rgb(136, 136, 136);
}

#quetions .row {
    height: fit-content;
}

.result {
    margin-bottom: 20px;
    border-radius: 30px;
    float: right;
    background-color: rgb(168, 83, 57);
    color: rgb(250, 183, 4);
    font-size: larger;
}

.result:hover {
    background-color: rgb(250, 183, 4);
    color: rgb(168, 83, 57);
}
</style>