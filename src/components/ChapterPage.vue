<template>
    <PageComponent>
        <div v-for="ch in chdata" :key="ch.name" class="col-6 col-md-6 col-lg-3 mb-3">
            <router-link style="text-decoration: none;" :to="{ name: 'AssignmentPage', query: { astdata: ch.astdata } }">
                <ChapterCard :name="ch.name" :bdg="ch.bdg" />
            </router-link>
        </div>
    </PageComponent>
</template>

<script>
import PageComponent from './PageComponent.vue';
import ChapterCard from './ChapterCard.vue';

export default {
    name: 'ChapterPage',
    components: {
        PageComponent,
        ChapterCard,
    },
    props: [
        'chdata1',
    ],
    data(){
        return{
            chdata:{},
        }
    }, 
    mounted(){
        this.chdata = this.$route.query.chdata;
    },
}
</script>

<style scoped></style>