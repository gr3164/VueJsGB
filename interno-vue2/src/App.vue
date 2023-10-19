<template>
  <div id="app" class="wrapper">
      <main class="main">
        <router-view />
      </main> 
  </div>
</template>

<script>

export default {
  name: 'App',
  notFound: '',
  components: {

  },
  created() {
    // this.$router.push({name: 'home'})
    this.$router.push({path: this.notFound})
    
  }
}
</script>

<style lang="scss">
</style>
