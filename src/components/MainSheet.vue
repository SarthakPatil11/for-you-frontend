<template>
    <div class="row MainSheet">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainSheet',
}
</script>

<style scoped>
.MainSheet {
    margin: 0;
    height: 92vh;
    width: 100%;
    position: -webkit-sticky;
}
</style>