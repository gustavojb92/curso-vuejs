<template>
  <div id="app">
    <!--  <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Dashboard</router-link> | 
      <router-link to="/controle-de-clientes">Clientes</router-link> | 
      <router-link to="/controle-de-produtos">Produtos</router-link>
    </nav> -->
    <MenuComponent v-if="this.$router.currentRoute.name != 'Login'"/>
    <router-view />
  </div>
</template>
<script>
import MenuComponent from "./components/Menu/MenuComponent.vue";
export default {
  components: {
    MenuComponent: MenuComponent,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

:root {
  --cor-primaria: #ff3d00;
  --cor-secundaria: #ff6e40;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
}

.container{
  margin-top: 15px;
}

.titulo{
  font-weight: 600;
  color: #363636;
  font-size: 20pt;
}

hr{
  margin: 0;
}
</style>
