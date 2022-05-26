<template>
  <div class="about">
    <h1>Tela de controle de clientes</h1>
    <h4>{{mensagem}}</h4>
  </div>
</template>
<script>
export default {
  name: "DashboardPage",
  data(){
    return{
      mensagem:"estou na tela clientes"
    }
  }
}
</script>
<style  scoped>
h1 {
  color: rgb(53, 207, 253);
}
</style>

