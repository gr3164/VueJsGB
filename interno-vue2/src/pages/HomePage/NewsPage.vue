<template>
    <section class="news">
                <div class="news__container">
                    <div class="news__block-text block-text">
                        <h2 class="block-text__title ">Articles & News</h2>
                        <p class="block-text__text">It is a long established fact that a reader will be distracted by
                            the of readable content of a page when lookings at its layouts the points of using..</p>
                    </div>
                    <ul class="news__list">
                        <li v-for="item in listNews" :key="item.id" class="news__item card-news">
                            <div class="card-news__img">
                                <img :src="item.img" :alt="item.alt">
                                <div class="card-news__descr">{{item.descr}}</div>
                            </div>
                            <h3 class="card-news__title"><a href="#">{{item.title}}</a> </h3>
                            <div class="card-news__bottom">
                                <p class="card-news__data">{{item.date}}</p>
                                <a class="card-news__link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                                        fill="none">
                                        <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                        <path d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
</template>

<script>
import img1 from '@/assets/images/news/01.jpg'
import img2 from '@/assets/images/news/02.jpg'
import img3 from '@/assets/images/news/03.jpg'
    export default {
        data(){
            return{
                listNews:[
                    {id: 1, img: img1, alt: 'news-01', descr: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '22 December,2022 '},
                    {id: 2, img: img2, alt: 'news-02', descr: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '11 December,2020 '},
                    {id: 3, img: img3, alt: 'news-03', descr: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '31 December,2019 '},
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>