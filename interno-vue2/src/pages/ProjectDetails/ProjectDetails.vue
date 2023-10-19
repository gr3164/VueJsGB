<script>
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
SwiperCore.use([Navigation, Pagination])
import {mapActions, mapGetters} from "vuex";
import 'swiper/swiper-bundle.css'

import headBg from '@/assets/images/blog-details/hed-bg.jpg'
import slideImg from '@/assets/images/project-details/slide01.png'
import FooterPage from '@/components/FooterPage.vue';
import HeaderPages from '@/components/HeaderPages.vue';

    export default {
        components: {
            Swiper,
            SwiperSlide,
                FooterPage,
                HeaderPages 
        },
        data(){
            return{
                headBg,
                sliders:[
                    {id:1, img: slideImg},
                    {id:2, img: slideImg},
                    {id:3, img: slideImg}
                ]
                
            }
        },
        computed: {
            ...mapGetters(['getDetails','getSliders'])
        },
        methods: {
            ...mapActions(['getDetailsData', 'getSlidersData']),
        },
        created() {
            this.getDetailsData(),
            this.getSlidersData(this.sliders)
        }
    }
</script>

<template>
    <div>
        <header-pages/>
        <section class="project-details">
            <div class="heading">
                <img :src="headBg" alt="img bg">
            </div>
            <div class="project-details__container">
                <div v-for="item in getDetails" :key="item.id" class="project-details__content">
                    <h2 class="project-details__title">{{ item.title }}</h2>
                    <p class="project-details__text">
                     {{ item.textOne }}
                    </p>
                    <p class="project-details__text">
                        {{ item.textTwo }}
                    </p>
                </div>

                <swiper
                    :slides-per-view="1"
                    :space-between="20"
                    :loop="true"
                    :pagination="true"
                    :pagination-visible="true"
                    :pagination-clickable="true"
                    >
                    <swiper-slide
                    v-for="slider in getSliders"
                    :key="slider.id"
                    >
                    <img :src="slider.img" alt="qwe">
                    </swiper-slide>
                </swiper>
                <div class="slider-pd__dots"></div>
            </div>
        </section>
        <footer-page/>
    </div>
</template>


<style lang="scss" scoped>

</style>