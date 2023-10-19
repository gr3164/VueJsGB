<template>
    <div class="not-found__header">
        <header-pages/>
        <div class="not-found__container">
        <div class="not-found__content">
            <p class="not-found__number">404</p>
            <p class="not-found__text">We are sorry, but the page
you requested was not found</p>
<button class="hero__btn btn" type="button">Back To Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"
                        fill="none">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
        </div>

    </div>
    </div>
   
</template>

<script>
import HeaderPages from '@/components/HeaderPages.vue'
    export default {
  components: { HeaderPages },
        name: 'NotFound',
        created(){
            return this.$router.push('/404')
        }
    }
</script>

<style lang="scss" scoped>

</style>