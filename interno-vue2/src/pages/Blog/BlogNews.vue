<template>
    <section class="blog-news">
        <div class="blog-news__container">
            <div class="blog-news__block-text block-text">
                <h2 class="block-text__title ">Articles & News</h2>
            </div>
            <ul class="blog-news__list">
                <li v-for="(card, idx) in cards" :key="idx" class="blog-news__item card-news">
                    <div class="card-news__img">
                        <img :src="card.src" alt="news-01">
                        <div class="card-news__descr">{{card.descr}}</div>
                    </div>
                    <h3 class="card-news__title"><router-link to="/blog-details">{{card.title}}</router-link> </h3>
                    <div class="card-news__bottom">
                        <p class="card-news__data">{{card.date}} </p>
                        <router-link to="/blog-details" class="card-news__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                                viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815" stroke="#292F36"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></router-link>
                    </div>
                </li>
            </ul>
            <div class="blog-news__dots">
                <ul>
                    <li><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16"
                        viewBox="0 0 9 16" fill="none">
                        <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import newImg01 from '@/assets/images/news/01.jpg'
import newImg02 from '@/assets/images/news/02.jpg'
import newImg03 from '@/assets/images/news/03.jpg'
import newImg04 from '@/assets/images/news/04.jpg'
import newImg05 from '@/assets/images/news/05.jpg'
import newImg06 from '@/assets/images/news/06.jpg'
export default {
    name: 'InternoVue2BlogNews',

    data() {
        return {
               cards: [
                    { src: newImg01, descr: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '22 December,2022' },
                    { src: newImg02, descr: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2023' },
                    {
                        src: newImg03, descr: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '3 December, 2022'
                    },
                    { src: newImg04, descr: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '12 December,2021' },
                    { src: newImg05, descr: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '25 December,2014' },
                    {
                        src: newImg06, descr: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '22 December, 2022'
                    },
                ]
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