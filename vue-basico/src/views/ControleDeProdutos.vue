<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>
    <div class="row sub-container">
      <div class="col-sm-2">
        <BotaoComponent value="Adicionar" :callback="() => adicionar()" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Estoque</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | real }}</td>
              <td>{{ item.dataCadastro | data }}</td>
              <td>
                <i @click="()=>{editar()}" class="fas fa-edit meuIcone"></i>
                |
                <i @click="()=>{remover()}" class="fas fa-trash meuIcone"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import BotaoComponent from "../components/BotaoComponent/BotaoComponent.vue";
import ProdutoService from "../services/produtoService";
import Produto from "../models/ProdutoModel";
import conversorDeDatas from "../utils/conversorData";
import conversorDeMoedas from "../utils/conversorDeMoeda";

export default {
  name: "DashboardPage",
  components: {
    BotaoComponent,
  },
  filters: {
    data(data) {
      return conversorDeDatas.aplicarMascaraEmDataISO(data);
    },
    real(valor) {
      return conversorDeMoedas.aplicarMascaraParaReal(valor);
    },
  },
  data() {
    return {
      produtos: [],
      produtosAux: new Produto(),
    };
  },
  methods: {

    adicionar(){
      this.$router.push({name:"NovoProduto"})
    },
    editar(){
      alert("editar")
    },
    remover(){
      alert("remover")
    },

    obterTodosOsProdutos() {
      ProdutoService.obterTodos()
        .then((response) => {
          console.log(response.data);
          response.data.map((p) => {
            (this.produtosAux.dataCadastro = p.dataCadastro),
              (this.produtosAux.id = p.id),
              (this.produtosAux.nome = p.nome),
              (this.produtosAux.observacao = p.observacao),
              (this.produtosAux.quantidadeEstoque = p.quantidadeEstoque),
              (this.produtosAux.valor = p.valor);
            this.produtos.push(new Produto(this.produtosAux));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    teste() {
      this.produtos.map((p) => {
        console.log(p.id);
        console.log(p.dataCadastro);
        console.log(p.nome);
        console.log(p.observacao);
        console.log(p.valor);
        console.log(p.quantidadeEstoque);
      });
    },
  },
  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>
<style scoped>
.sub-container {
  margin-top: 0.6rem;
}

.meuIcone{
  cursor: pointer;
  margin-left: .3rem;
  margin-right: .3rem;
  color: var(--cor-primaria);
  }
</style>
