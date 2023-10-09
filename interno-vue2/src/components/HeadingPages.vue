<template>
    <section class="heading">
        <img :src="blogBg" alt="img bg">
        <div class="heading__text">
            <h2 class="heading__title">Articles & News</h2>
            <ul class="bread-crumbs">
                <li><a href="#">Home</a> </li>
                <li><a href="#">Blog</a> </li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {
    name: 'HeadingPages',
    props:['blogBg'],
    
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