export default class Produto {
    constructor(obj){
        obj = obj || {};
        this.dataCadastro = obj.dataCadastro;
        this.id = obj.id;
        this.nome = obj.nome;
        this.observacao = obj.observacao;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.valor = obj.valor || 0;
    }
}