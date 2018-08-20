<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import homePage from './components/homePage.vue'


export default {
  name: 'App',
  components: {
    homePage,
   'app-header': Header,
   'app-footer' : Footer
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CMerriweather:300,300i,400,400i,700,700i');

    #app {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }
</style>
