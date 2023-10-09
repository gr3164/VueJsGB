<template>
    <section class="hero">
        <div class="hero__container">
            <div class="hero__img">
                <img :src="promo" alt="promo">
            </div>
            <div class="hero__content">
                <div class="block-text">
                    <h1 class="block-text__title block-text__title--h1">Let Your Home Be Unique</h1>
                    <p class="block-text__text">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                </div>
                <button class="hero__btn btn" type="button">Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"
                        fill="none">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </section>

</template>

<script>
import promo from "@/assets/images/hero/promo.jpg"
export default {
    name: 'hero-page',

    data() {
        return {
            promo: promo
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