<template>
    <!-- <div>
        gvedbhjnskml,./
    </div> -->
    <PageComponent>
        <div v-for="ast in astdata" :key="ast.astNum" @backClick="
            $router.push({
                path: '/ChapterPage'
            })
            " class="my-1">
            <AssignmentCard :data="ast">
                <router-link class="btn" :to="{ name: 'TempletImgTxt', query: { data: ast.tmplt } }">Continue</router-link>
             
            </AssignmentCard>
        </div>
    </PageComponent>
</template>

<script>
// import PageComponent from './PageComponent.vue';
// import AssignmentCard from './AssignmentCard.vue';
export default {
    name: 'AssignmentPage',
    // components: {
    //     PageComponent,
    //     AssignmentCard,
    // },
    data() {
        return {
            astdata: [],
        }
    },
    mounted(){
        this.astdata = this.$route.query.astdata;
    }
}
</script>

<style scoped></style>