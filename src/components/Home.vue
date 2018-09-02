<template>

  <div>

    
    <menu-superior></menu-superior>

    <br>
    <br>
    <br>
    <br>
    index

  </div>
    

</template>

<script>

import MenuSuperior from './MenuSuperior.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Aps'
    }
  },

  components: {
      MenuSuperior
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
