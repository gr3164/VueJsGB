<template>
    <section class="heading">
        <img :src="blogBg" alt="img bg">
        <div class="heading__text">
            <h2 class="heading__title">Articles & News</h2>
            <ul class="bread-crumbs">
                <li><router-link to="/" >Home</router-link> </li>
                <li><router-link :to=namePage.toLowerCase() >{{ namePage }}</router-link> </li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {
    name: 'HeadingPages',
    props:['blogBg','namePage'],
    
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

<style lang="scss" scoped>

</style>