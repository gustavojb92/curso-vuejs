import LoginPage from '../views/LoginPage.vue'
import ControleDeProdutos from '../views/ControleDeProdutos.vue'
import NovoProduto from '../views/NovoProduto.vue'
import ControleDeClientes from '../views/ControleDeClientes.vue'
import Dashboard from '../views/DashboardPage.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        title: "Login",
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: "Controle de Clientes",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: "Controle de Produtos",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-produtos/novo-produto',
        name: 'NovoProduto',
        component: NovoProduto,
        title: "Adicionar produto",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: {
            requiredAuth: true
        }
    }
  ]

export default routes;