<template>
    <section class="latest-post">
    <div class="latest-post__container">
        <div class="latest-post__block-text block-text">
            <h2 class="block-text__title ">Latest Post</h2>

        </div>
        <div class="latest-post__card card-news card-news_horizontal">
            <div class="card-news__img card-news__img_horizontal">
                <img :src="new01" alt="news-01">
            </div>
            <div class="card-news__content">
                <h3 class="card-news__title"><a href="#">Low Cost Latest Invented Interior Designing
                        Ideas</a>
                </h3>
                <p class="card-news__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpis
                    dignissim maximus.posuere in.Contrary to popular belief.</p>
                <p class="card-news__text">Lorem Ipsum is not simply random text. It has roots in a
                    piece of
                    classica.</p>
                <div class="card-news__bottom">
                    <p class="card-news__data">26 December,2022 </p>
                    <router-link to="/blog-details" class="card-news__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                            viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815" stroke="#292F36"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></router-link>
                </div>
            </div>

        </div>
    </div>

    </section>
</template>

<script>
import new01 from '@/assets/images/news/01.jpg'
export default {
    name: 'InternoVue2LatestPost',

    data() {
        return {
            new01: new01
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