<template>
    <div>
        <header-pages/>
        <hero-page/>
        <projects-page/>
        <counter-page/>
        <news-page/>
        <footer-page/>
    </div>
</template>

<script>
import HeroPage from './HeroPage.vue'
import NewsPage from './NewsPage.vue'
import ProjectsPage from './ProjectsPage.vue'
import CounterPage from './CounterPage.vue'
import HeaderPages from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPage.vue'
export default {
    name: 'HomePage',
     components: {
        HeroPage,
        ProjectsPage,
        CounterPage,
        NewsPage,
          HeaderPages,
          FooterPage
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