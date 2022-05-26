<template>
    <div>
        <label for="novoInput">{{ label }}</label><br/>
        <input name="novoInput" :placeholder="placeHolder" :type="type">
    </div>
</template>
<script>
export default {
    name: "InputComponent",
    props: {
       label: {type: String, require},
       placeHolder:{type: String, default: ''},
       type:{type: String, default: 'text'}
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
input{
    width: 100%;
    padding: 12px;
    margin: 12px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>