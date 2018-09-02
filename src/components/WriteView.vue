<template>

    <div id="write-view" > 
      
      <label class="view-capitulo"> A noite </label> 
      <label class="view-subtitulo"> Onde tudo começou </label>
      
      <label class="view-paragrafo">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat fringilla bibendum. Nullam sagittis semper consequat. Aenean at nisi ante. Donec venenatis ullamcorper vulputate. Phasellus ornare mauris massa, fringilla sagittis velit sollicitudin sit amet. Phasellus facilisis, purus ac tincidunt blandit, tellus dolor pretium nisl, sit amet placerat ligula dolor at enim. Cras sagittis leo odio, ut mollis diam accumsan a. Morbi vel lectus libero. Vestibulum aliquet dui dolor, vitae egestas est condimentum et. Mauris laoreet odio massa, vel elementum tortor hendrerit in. Donec egestas gravida odio, in tincidunt velit mattis sed. Proin in augue in ipsum fringilla dignissim. Etiam eget nisl sit amet ex cursus efficitur. Ut ac diam dui. Donec dignissim convallis risus, et pharetra neque sagittis ac. Aliquam erat volutpat.  

      </label>

      <label class="view-paragrafo">

          {{ reversedMessage }}

      </label>

      
    </div>

</template>

<script>

export default {
  name: 'write-view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Aps'
    }
  },
  computed: {
    reversedMessage: function () {


      var txt = this.text;
      var pers = this.personas;
      var cenarios = this.cenarios;
      var genericos = this.genericos;

      if ( txt.match(/(@p.)\w+/g) != undefined){

          var cont = 0;

          while( cont < 5){
            
            var person = txt.match(/(@p.)\w+/g);
            
            txt = this.replacePerson( txt, person, pers );
            cont++;
          }
      }

      if ( txt.match(/(@c.)\w+/g) != undefined){

          var cont = 0;

          while( cont < 5){
            
            var cenario = txt.match(/(@c.)\w+/g);
            
            txt = this.replaceCenario( txt, cenario, cenarios );
            cont++;
          }
      }

      if ( txt.match(/(@g.)\w+/g) != undefined){

          var cont = 0;

          while( cont < 5){
            
            var generico = txt.match(/(@g.)\w+/g);
            
            txt = this.replaceGenericos( txt, generico, genericos );
            cont++;
          }
      }

      

      return txt;
    }
  },

  methods: {

    replacePerson: function(txt, person, persons){

      try{

        var idPerson = person[0].replace('@p:','').trim();
        
        var nomePerson = '';
        
        persons.forEach(function(person){
        
            if(person.id == idPerson){
              nomePerson = person.nome;
            }
        });
        
        return txt.split("@p:" + idPerson).join(nomePerson);

      } catch( error ){ return txt }

    },
    replaceCenario: function(txt, cenario, cenarios){

      try{

        var idCenario = cenario[0].replace('@c:','').trim();
        
        var nomeCenario = '';
        
        cenarios.forEach(function(cenario){
  
            if(cenario.id == idCenario){
              nomeCenario = cenario.nome;
            }
        });
        
        return txt.split("@c:" + idCenario).join(nomeCenario);

      } catch( error ){ return txt }

    },
    replaceGenericos: function(txt, generico, genericos){

      

      try{

        var idGenerico = generico[0].replace('@g:','').trim();
        var textoGenerico = '';
        
        genericos.forEach(function(generico){
            if(generico.id == idGenerico){
              textoGenerico = generico.texto;
            }
        });
        
        return txt.split("@g:" + idGenerico).join(textoGenerico);

      } catch( error ){ return txt }

    }


  },

  props : ['text', 'personas', 'cenarios','genericos']


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  #write-view label.view-capitulo {

      font-size: 30px;
      display: block;
      padding-top: 15px;
      color: #444;
      text-transform: uppercase;
      font-weight: 600;
  }

  #write-view label.view-subtitulo {

    display: block;
    margin-bottom: 40px;
  }

  #write-view label.view-paragrafo {

    display: block;
    text-align: left;
    cursor: pointer;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
  }

  #write-view label.view-paragrafo:hover {

    background-color: #eee;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

</style>
