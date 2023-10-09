<template>
    <div>
        <heading-pages :blogBg="blogBg"/>
        <latest-post/>
        <blog-news/>
    </div>
</template>

<script>
import bgImg from '@/assets/images/blog/bg-head.jpg'
import HeadingPages from '@/components/HeadingPages.vue';
import LatestPost from '@/pages/Blog/LatestPost.vue';
import BlogNews from './BlogNews.vue';
export default {
  components: { HeadingPages, LatestPost, BlogNews },
    name: 'BlogPage',

    data() {
        return {
            blogBg: bgImg
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