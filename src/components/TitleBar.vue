<template>
    <div class="TitleBar">
        <img id="super" class="super" src="../assets/super_snake.png">
        <img id="choco" class="choco" src="../assets/choco.png">
        <img id="oops" class="oops" src="../assets/oops.png">
        <div class="row main-head">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
}
</script>

<style scoped>
.choco, .super, .oops{
    display: none;
    position: absolute;
    z-index: 30;
    height: 70px;
    width: auto;
}
.super{
    top: 41%;
    left: 41%;
    animation-name: zoom_super;
    animation-duration: 2s;
}
@keyframes zoom_super {
    50%{
        transform: scale(2.25, 2.25);
    }
    100%{
        transform: scale(1, 1);
    }
}

.choco{
    top: 43.5%;
    left: 43.5%;
    animation-name: zoom_choco;
    animation-duration: 2s;
}
@keyframes zoom_choco {
    50%{
        transform: scale(2.25, 2.25);
    }
    100%{
        transform: scale(1, 1);
    }
}

.oops{
    top: 47%;
    left: 47%;
    background-image: url(../assets/msg_cloud.png);
    background-size: contain;
    background-repeat: no-repeat;
    animation-name: zoom_oops;
    animation-duration: 2s;
}
@keyframes zoom_oops {
    50%{
        transform: scale(3, 3);
    }
    100%{
        transform: scale(1, 1);
    }
}

.main-head{
    margin: 0;
    height: 50px;
    border-bottom: 2px solid white;
}
.main-head div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: x-large;
    font-weight: 700;
}
.main-head .clkhead{
    background-color: rgb(0, 179, 255);
}
.main-head .quehead{
    background-color: rgb(136, 136, 136);
}
.main-head .tmhead{
    background-color: rgb(255, 224, 88);
}
</style>