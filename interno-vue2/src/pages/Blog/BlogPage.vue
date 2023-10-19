<template>
    <div>
        <header-pages/>
        <heading-pages :blogBg="blogBg" :namePage="namePage"/>
        <latest-post/>
        <blog-news/>
        <footer-page/>
    </div>
</template>

<script>
import bgImg from '@/assets/images/blog/bg-head.jpg'
import HeadingPages from '@/components/HeadingPages.vue';
import LatestPost from '@/pages/Blog/LatestPost.vue';
import BlogNews from './BlogNews.vue';
import HeaderPages from '@/components/HeaderPages.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  components: { HeadingPages, LatestPost, BlogNews, HeaderPages, FooterPage },
    name: 'BlogPage',

    data() {
        return {
            blogBg: bgImg,
            namePage: 'Blog'
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>