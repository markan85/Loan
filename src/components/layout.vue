<template>
 <div>
    <app-header></app-header>
     <!-- <slajder></slajder>  -->
     <router-view />
    <app-footer></app-footer>
</div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
// import slajder from './slajder.vue'

export default {

  name: 'layout',
  components : {
      'app-header': Header,
   'app-footer' : Footer
  //  ,slajder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
