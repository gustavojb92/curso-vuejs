<template>
    <div class="box-login">
        <div class="logo">
        <h1>Login</h1>
        </div>
        <div>
        <InputComponent label="E-mail" placeHolder="exemplo@email.com"/>
        <InputComponent label="Senha" placeHolder="abc123!@#" type="password"/>
        </div>
        <div>
            <BotaoComponent 
            :callback="() => login()"
            value="Entrar"/>
        </div>
    </div>
</template>
<script>
import InputComponent from "../components/Input/InputComponent.vue"
import BotaoComponent from '../components/BotaoComponent/BotaoComponent.vue'
export default {
    name: "LoginPage",
    methods:{
        login(){
            this.$router.push({name:'dashboard'})
        }
    },
    components:{
        InputComponent,
        BotaoComponent,
    },
    data(){
        return{

        }
    }
}
</script>
<style scopped>
.logo {
    text-align: center;
    color: var(--cor-primaria);
    font-size: 1.6rem;
}

.box-login {
    padding: 30px;
    padding-top: 0px;
    width: 300px;
    margin: auto;
    border: 1px solid rgba(221, 221, 221, 0.698);
    margin-top: 90px;
}
</style>