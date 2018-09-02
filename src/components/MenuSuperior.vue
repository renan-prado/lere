<template>

    
  <nav class="mn-sup-ctn">

    <nav class="mn-sup-logo"> </nav>
    <nav class="mn-sup-search">

      <input type="text" placeholder="Encontrar in-books">
      <i class="fas fa-search"></i>

    </nav>
    <nav class="mn-sup-itens">

      <nav onclick="window.location.href = '/#/'"> 
        <i class="fas fa-home"></i>
        <label> Home </label>
      </nav>
      <nav onclick="window.location.href = '/#/reading'"> 
        <i class="fas fa-book-reader"></i>
        <label> Leituras </label>
      </nav>
      <nav onclick="window.location.href = '/#/create'">
        <i class="fas fa-pencil-alt"></i>
        <label> Escrever </label>
      </nav>
      <nav onclick="window.location.href = '/#/perfil'">
        <i class="fas fa-user"></i>
        <label> Perfil </label>
      </nav>

    </nav>

  </nav>

    
</template>

<script>

export default {
  name: 'menu-superior',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Aps'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .mn-sup-ctn{

    width: 100%;
    height: 60px;
    background-color: tomato;
    position: fixed;
    top: 0px;
    left: 0px;
    box-shadow: 2px 2px 3px #ccc;
  }

  .mn-sup-logo {

    width: 200px;
    height: 100%;
    /* background-color: brown; */
    float: left;
    font-family: QanelasBold;
  }

  .mn-sup-search {

    width: calc( 60% - 200px );
    height: 100%;
    float: left;
  }

  .mn-sup-search i {

    display: inline-block;
    color: rgb(240, 239, 239);
    margin-left: 10px;
    position: relative;
    top: 3px;
    cursor: pointer;
  }

  .mn-sup-search i:hover { color: rgb(153, 54, 29); }



  .mn-sup-itens {

    width: 40%;
    height: 100%;
    /* background-color: brown; */
    float: left;
    display: flex;
  }

  .mn-sup-itens nav {

    flex: 1;
    color: rgb(240, 239, 239);
    cursor: pointer;
  }

  .mn-sup-itens nav:hover i { font-size: 27px; margin-top: 16px; }

  .mn-sup-itens nav i {

    font-size: 22px;
    display: block;
    transition: 0.1s;
    cursor: pointer;
    
    margin-top: 19px;
  }

  .mn-sup-itens nav label { opacity: 0; }

  .mn-sup-itens nav:hover label {

    display: block;
    width: 100%;
    background-color: rgba(255, 99, 71, 0.94);
    margin-top: 16px;
    padding-top: 3px;
    padding-bottom: 3px;
    box-sizing: border-box;
    opacity: 1; 
    transition: 0.2s;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .mn-sup-search input {

    width: 60%;
    height: 30px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;

    margin-top: 14px;

    background-color: rgb(240, 239, 239);
  }


</style>
