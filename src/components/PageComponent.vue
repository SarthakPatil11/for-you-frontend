<template>
    <div class="ch-pg px-3">
        <div class="row p-3 pg">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageComponent',
}
</script>

<style scoped>
.ch-pg{
    height: 92vh;
    width: 100vw;
    position: -webkit-sticky;
    background-color: rgb(185, 185, 185);
}
.pg{
    position: relative;
    overflow-y: auto;
    height: 100%;
}
</style>