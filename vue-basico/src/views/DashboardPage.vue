<template>
  <div class="about">
    <h1>Tela de dashboard</h1>
    <h4>{{mensagem}}</h4>
  </div>
</template>
<script>
export default {
  name: "DashboardPage",
  data(){
    return{
      mensagem:"estou na tela dashboard"
    }
  }
}
</script>
<style  scoped>
h1 {
  color: blue;
}
</style>

