<template>
    <nav>
        <ul>
            <li>
               <router-link class="linkRota"  to="/">Dashboard</router-link> 
            </li>
            <li>
                <router-link class="linkRota" to="/controle-de-produtos">Produtos</router-link>
            </li>
            <li>
                <router-link class="linkRota" to="/controle-de-clientes">Clientes</router-link> 
            </li>
            <li>
                <router-link class="linkRota" to="/login">Sair</router-link> 
            </li>
        </ul>
    </nav>
</template>
<style scoped>
ul {   
    list-style-type: none;  
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);
    color: azure;;
}
li{
     display: inline-block; 
     padding: .8rem;
     text-decoration: none;
     font-weight: bolder;
     color: inherit;
}
.linkRota {
     text-decoration: none;
     font-size: 1.2rem;
     color: inherit;
     text-align: center;
 }
li:hover {
    background-color: var(--cor-secundaria);
 }
li:first-child {
    margin-left: 2rem;
 }
 li:last-child{
    float: right; 
    margin-right: 0.8rem;    
}
</style>