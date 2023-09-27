<template>
    <div>
        <hero-page/>
        <projects-page/>
        <counter-page/>
        <news-page/>
    </div>
</template>

<script>
import HeroPage from './HeroPage.vue'
import NewsPage from './NewsPage.vue'
import ProjectsPage from './ProjectsPage.vue'
import CounterPage from './CounterPage.vue'
export default {
    name: 'HomePage',
     components: {
        HeroPage,
        ProjectsPage,
        CounterPage,
        NewsPage
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss">

</style>