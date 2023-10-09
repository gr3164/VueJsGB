<template>
  <div id="app" class="wrapper">
      <header-pages/>
      <main class="main">
      <home-page/>
      <!-- <blog-page/> -->
      <!-- <blog-details/> -->
      </main> 
      <footer-page/>
  </div>
</template>

<script>

import FooterPage from './components/FooterPage.vue'
import HeaderPages from './components/HeaderPages.vue'
// import BlogDetails from './pages/BlogDetails/BlogDetails.vue'
// import BlogPage from './pages/Blog/BlogPage.vue'
import HomePage from './pages/HomePage/HomePage.vue'



export default {
  name: 'App',
  components: {
    HeaderPages,
    FooterPage,
    HomePage,
    // BlogPage,
    // BlogDetails,
  }
}
</script>

<style lang="scss">
</style>
