<template>
    <div class="card">
        <div class="row top">
            <div class="bdg">
                <span v-if="bdg == 'complete'" class="badge rounded-pill bg-success">Completed</span>
                <span v-else class="badge rounded-pill bg-secondary">Not Completed</span>
            </div>
        </div>
        <div class="row mid">
            <p>CHAPTER</p>
            <h1>{{ name }}</h1>
            <h6>View all assignments</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChapterCard',
    props: [
        'name',
        'bdg',
    ]
}
</script>

<style scoped>
.card {
    height: 300px;
    width: 250px;
    background-color: rgb(181, 230, 83);
    border-color: rgb(181, 230, 83);
    border-radius: 10px;
}

.card .top {
    margin: 5px 8px 5px 5px;
    justify-content: right;
}

.card .top .bdg {
    padding-right: 0px;
    width: fit-content;
}

.card .mid {
    margin: 10px;
    height: 90%;
    background-color: yellowgreen;
    border-radius: 10px;
    color: white;
}
.card .mid p{
    text-transform: capitalize;
    font-weight: 800;
    letter-spacing: 2px;
    padding-bottom: 0px;
}
.card .mid h1{
    font-weight: 700;
    letter-spacing: 1px;
    color: rgb(255, 242, 0);
}
</style>