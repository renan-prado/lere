<template>

  <div>

    
    <menu-superior></menu-superior>


  </div>
    

</template>

<script>

import MenuSuperior from './MenuSuperior.vue'

export default {
  name: 'create',
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
