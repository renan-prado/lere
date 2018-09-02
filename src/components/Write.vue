<template>

  <div id="write">

    
    <menu-superior></menu-superior>

    <article>

      

      <div class="wd50">
        <write-edit :genericos="genericos" :cenarios="cenarios" :personas="personagens" @getText="msg = $event"></write-edit>
      </div>

      <div class="wd50 article-write-right">
        <write-view :genericos="genericos" :cenarios="cenarios" :personas="personagens" :text="msg"></write-view>
      </div>
      

    </article>

  </div>
    

</template>

<script>

import MenuSuperior from './MenuSuperior.vue'
import View from './WriteView.vue'
import Edit from './WriteEdit.vue'

export default {
  name: 'write',
  data () {
    return {
      msg: '',
      personagens: [ { id: 1, nome: "João" }, { id: 2, nome: "Maria" }, { id: 3, nome: "Renata" } ],
      cenarios: [{ id: 1, nome: "Ture" }, { id: 2, nome: "Masagosa" }, { id: 3, nome: "Pinoia" }],
      genericos: [{ id: 1, nome:"Objeto Carregado" , texto: "Bolsa" }, { id: 2, nome: "Bordão do João", texto: "siga-me os bons" }, { id: 3, nome:"Cor da roupa" ,texto: "Azul" }]
    }
  },

  components: {
      'menu-superior' : MenuSuperior,
      'write-view': View,
      'write-edit': Edit
  },

 methods: {
    onChildUpdate (newValue) {
    this.msg = newValue
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#write article {
    width: 100%;
    height: calc( 100vh - 60px );
    position: fixed;
    top: 60px;
    background-color: #eee;
    font-family: 'Signika', sans-serif;
    color: #888;
    font-size: 14px;
    font-weight: 300;
  }

  #write .wd50 {

    width: 50%;
    height: 100%;
    float: left;
  }

   #write .article-write-right {

    width: 50%;
    height: 100%;
    background-color: #eaeaea;
    float: left;
    box-sizing: border-box;
    overflow-y: auto;

  }

</style>
