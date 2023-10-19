<template>
    <div>
      <header-pages/>
        <heading-pages :blogBg="bgImg" :namePage="namePage"/>
        <our-project-page/>
        <footer-page/>
    </div>
</template>

<script>
import HeadingPages from '@/components/HeadingPages.vue'
import bgImg from '@/assets/images/our-project/bg.jpg'
import OurProjectPage from './OurProjectPage.vue'
import HeaderPages from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPage.vue'
    export default {
  components: { HeadingPages, OurProjectPage, HeaderPages, FooterPage },
  data(){
    return{
        bgImg: bgImg,
        namePage:'Project'
    }
  }
        
    }
</script>

<style lang="scss">

</style>