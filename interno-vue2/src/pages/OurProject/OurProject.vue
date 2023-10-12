<template>
    <div>
        <heading-pages :blogBg="bgImg" :namePage="namePage"/>
        <our-project-page/>
    </div>
</template>

<script>
import HeadingPages from '@/components/HeadingPages.vue'
import bgImg from '@/assets/images/our-project/bg.jpg'
import OurProjectPage from './OurProjectPage.vue'
    export default {
  components: { HeadingPages, OurProjectPage },
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