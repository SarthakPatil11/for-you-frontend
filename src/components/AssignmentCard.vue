<template>
    <div class="card">
        <div class="col-4 left">
            <div class="row top">
                <div class="bdg">
                    <span v-if="data.bdg == 'complete'" class="badge rounded-pill bg-success">Completed</span>
                    <span v-else class="badge rounded-pill bg-secondary">Not Completed</span>
                </div>
            </div>
            <div class="row mid">
                <p>CHAPTER</p>
                <h1>{{ data.name }}</h1>
                <h6>View assignment </h6>
            </div>
        </div>
        <div class="col-8 right">
            <div class="progress-container">
                <div class="progress"></div>
                <span class="progress-text">{{ data.m }}/{{ data.tm }} Chocolates</span>
            </div>
            <h6>Assignment {{ data.astNum }}</h6>
            <h2>{{ data.astName }}</h2>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssignmentCard',
    props: [
        'data',
    ],
    data(){
        return{
            pst: '',
        }
    },
    mounted(){
        this.pst = `${(this.data.m / this.data.tm) * 100}%`;
    },
}
</script>

<style scoped>
.card{
    height: 250px;
    background-color: white;
    border: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
}

.card .left{
    background-color: rgb(181, 230, 83);
    border-color: rgb(181, 230, 83);
    border-radius: 10px 0px 0px 10px;
}
.card .left .top {
    margin: 5px 8px 5px 5px;
    justify-content: right;
}

.card .left .top .bdg {
    padding-right: 0px;
    width: fit-content;
}

.card .left .mid {
    margin: 10px;
    height: 80%;
    background-color: yellowgreen;
    border-radius: 10px;
    color: white;
}
.card .left .mid p{
    text-transform: capitalize;
    font-weight: 800;
    letter-spacing: 2px;
    padding-bottom: 0px;
}
.card .left .mid h1{
    font-weight: 700;
    letter-spacing: 1px;
    color: rgb(255, 242, 0);
}

.card .right{
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    padding: 30px;
    position: relative;
}
.card .right .progress-container{
    position: absolute;
    top: 30px;
    right: 30px;
    text-align: right;
    width: 150px;
}
.card .right .progress{
    background-color: #ddd;
    border-radius: 3px;
    height: 5px;
    width: 100%;
}
.card .right .progress::after{
    border-radius: 3px;
    background-color: rgb(168,83,57);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: v-bind('pst');
}
.card .right .progress-text{
    font-size: 10px;
    opacity: 0.6;
    letter-spacing: 1px;
}
.card .right .btn{
    background-color: yellowgreen;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    padding: 12px 25px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    letter-spacing: 1px;
}
.card .right h6{
    color: yellowgreen;
    font-weight: 800;
    letter-spacing: 2px;
}
.card .right h2{
    font-weight: 700;
    letter-spacing: 1px;
    color: rgb(168,83,57);
    /* color: rgb(255, 242, 0); */
}
</style>