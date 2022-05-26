<template>
    <div>
        <button @click="callback">{{value}}</button>
    </div>
</template>
<script>
export default {
    name:'BotaoComponent',
    props:{
        value:{type: String, require},
        callback:{type: Function, default: ()=>{}}
    }
    
}
</script>
<style scoped>
button{
    width: 100%;
    background-color: var(--cor-primaria);
    color: white;
    padding: .5rem;
    margin: 8px 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover{
    background-color: var(--cor-secundaria);
}
</style>