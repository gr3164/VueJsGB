<template>
    <div>
        <header-pages/>
        <div class="heading">
            <img :src="headBg" alt="img bg">
        </div>
        <div class="blog-details blog-details__container">
                <div class="blog-details__content ">
                    <div class="current-product">
                        <h2 class="current-product__title">Let’s Get Solution for Building
                            Construction Work</h2>
                        <div class="current-product__img">
                            <img :src="detailsImg01" alt="curren product">
                        </div>
                        <div class="current-product__data">
                            <div class="current-product__date">26 December,2022 </div>
                            <ul class="bread-crumbs">
                                <li><a href="#">Interior</a> </li>
                                <li><a href="#">Home</a> </li>
                                <li><a href="#">Decore</a> </li>
                            </ul>
                        </div>
                        <div class="current-product__text">
                            <p>
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                                in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injecthumour, or
                                randomised words which don't look even slightly believable.

                            </p>
                            <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary.</p>
                        </div>
                        <div class="current-product__details">
                            <img :src="iconDetails" alt=",,">
                            <p>The details are not the details.<br>
                                They make the design.</p>
                        </div>
                    </div>
                    <div class="design-great">
                        <h2 class="design-great__title">Design sprints are great</h2>
                        <p class="design-great__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                            Lorem Ipsum available, but the majority have suffered.</p>
                        <ol class="design-great__list">
                            <li class="design-great__item">Contrary to popular belief.There are many variations of
                                passages of Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="design-great__item">Contrary to popular belief.There are many variations of
                                passages of Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="design-great__item">Contrary to popular belief.There are many variations of
                                passages of Lorem Ipsum available, but the majority have suffered.</li>
                        </ol>
                        <div class="design-great__img">
                            <img :src="detailsImg02" alt="02jpg">
                        </div>
                        <p class="design-great__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                            Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                </div>
                <div class="blog-details__tag">
                    <h3 class="blog-details__tag-title">Tags</h3>
                    <div class="blog-details__tag-btns">
                        <button class="btn-tag btn-tag_active">Kitchen</button>
                        <button class="btn-tag">Bedroom</button>
                        <button class="btn-tag">Building</button>
                        <button class="btn-tag">Architecture</button>
                        <button class="btn-tag">Kitchen Planning</button>
                        <button class="btn-tag">Bedroom</button>
                    </div>
                </div>
        </div>
        <footer-page/>
    </div>
    
</template>

<script>
import detailsImg01 from '@/assets/images/blog-details/01.jpg'
import detailsImg02 from '@/assets/images/blog-details/01.jpg'
import iconDetails from '@/assets/images/blog-details/icon.svg'
import headBg from '@/assets/images/blog-details/hed-bg.jpg'
import FooterPage from '@/components/FooterPage.vue'
import HeaderPages from '@/components/HeaderPages.vue'
export default {
  components: { FooterPage, HeaderPages },

    name: 'BlogDetails',
    

    data() {
        return {
            detailsImg01: detailsImg01,
            detailsImg02: detailsImg02,
            iconDetails: iconDetails,
            headBg: headBg
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