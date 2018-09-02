<template>

  <div id="write-edit">

    <nav class="edit-menu"></nav>
    <nav class="edit-submenu">

        <div id="sb-personagens">

          <label> P: </label>

          <select name="pers" id="sl-pers" v-model="selectPers">
              <option v-for="personagem in cp_personagens" v-bind:value="personagem.id" v-bind:key="personagem.id"> {{ personagem.nome }} </option>
          </select>

          <a class="button is-success ainput" @click="insertPers">
            <span class="icon is-small"> <i class="fas fa-plus"></i> </span>
          </a>

        </div>

        <div id="sb-cenarios">

          <label> C: </label>

          <select name="pers" id="sl-pers" v-model="selectCena">
              <option v-for="personagem in cp_cenarios" v-bind:value="personagem.id" v-bind:key="personagem.id"> {{ personagem.nome }} </option>
          </select>

          <a class="button is-success ainput" @click="insertCenario">
            <span class="icon is-small"> <i class="fas fa-plus"></i> </span>
          </a>

        </div>

        <div id="sb-genericos">

          <label> G:  </label>

          <select name="pers" id="sl-pers" v-model="selectGene">
              <option v-for="generico in cp_genericos" v-bind:value="generico.id" v-bind:key="generico.id"> {{ generico.nome }} </option>
          </select>

          <a class="button is-success ainput" @click="insertGenericos">
            <span class="icon is-small"> <i class="fas fa-plus"></i> </span>
          </a>

        </div>

    </nav>

    <article class="wt-paragrafo" v-show="paragrafo">
        <div class="main">
          <textarea id="taparagrafo" v-model="taparagrafo" v-on:input="$emit('getText', $event.target.value)"></textarea>
        </div>
    </article>

  </div>
    
</template>

<script>

export default {
  name: 'write-edit',
  data () {
    return {
      taparagrafo: '',
      paragrafo: true,
      selectPers: 1,
      selectCena: 1,
      selectGene: 1
    }
  },

  computed: {

    cp_personagens: function(){

      return this.personas;
    },
    cp_cenarios: function(){

      return this.cenarios;
    },

    cp_genericos: function(){

      return this.genericos;
    }


  },

  methods:{

      insertPers : function(){

          this.taparagrafo = this.taparagrafo + '@p:' + this.selectPers + ' ';
          this.$emit('getText', this.taparagrafo);
          document.getElementById('taparagrafo').focus();
      },
      insertCenario : function(){

          this.taparagrafo = this.taparagrafo + '@c:' + this.selectCena + ' ';
          this.$emit('getText', this.taparagrafo);
          document.getElementById('taparagrafo').focus();
      },
      insertGenericos : function(){

          this.taparagrafo = this.taparagrafo + '@g:' + this.selectGene + ' ';
          this.$emit('getText', this.taparagrafo);
          document.getElementById('taparagrafo').focus();
      }
  },

  props: ['personas', 'cenarios', 'genericos']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #write-edit .edit-menu {

      width: 100%;
      height: 50px;
      background-color: #444;
  }

  #write-edit .edit-submenu {

      width: 100%;
      height: 34px;
      background-color: #ddd;
  }

  #write-edit .wt-paragrafo {

    width: 100%;
    height: calc(100vh - 150px);
    display: block;
  }

.main {
  width: 100%;
  height: 100%;
  display: inline;
}

.main > textarea {
  width: inherit;
  height: 100%;
  padding: 20px;
  outline: none;
}

#write-edit .ainput {

  height: 30px;
  margin-top: 2px;
  margin-bottom: 2px;
}

#sl-pers {

  height: 30px;
  padding: 3px;
  padding-right: 10px;
  outline: none;
  border: none;
  background-color: #eee;
  border-radius: 3px;
  margin-right: 5px;
  margin-top: 2px;
}

#sb-genericos,
#sb-cenarios,
#sb-personagens {

  float: left;
  margin-left: 20px;
}

.edit-submenu {

  max-height: 34px;
  overflow-y: auto;
}

.edit-submenu label {

  margin-right: 5px;
  color: #444;
}

</style>
