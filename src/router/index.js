import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CadastroAluno from '../views/CadastroAluno'
import EscolhaModalidade from '../views/EscolhaModalidade.vue'
import EscolhaInstrutor from '../views/EscolhaInstrutor.vue'
import CadastroProfessor from '../views/CadastroProfessor'
import CadastroProfessor1 from '../views/CadastroProfessor1'
import CadastroProfessor2 from '../views/CadastroProfessor2'
import CadastroProfessor3 from '../views/CadastroProfessor3'
import CadastroAluno1 from '../views/CadastroAluno1'
import CadastroAluno2 from '../views/CadastroAluno2'
import CadastroAluno3 from '../views/CadastroAluno3'
import EscolhaFuncao from '../views/EscolhaFuncao'
import RedefinirSenha from '../views/RedefinirSenha'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // meta: { showToolbar: true }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroaluno',
    name: 'CadastroAluno',
    component: CadastroAluno,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroaluno1',
    name: 'CadastroAluno1',
    component: CadastroAluno1,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroaluno2',
    name: 'CadastroAluno2',
    component: CadastroAluno2,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroaluno3',
    name: 'CadastroAluno3',
    component: CadastroAluno3,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor',
    name: 'CadastroProfessor',
    component: CadastroProfessor,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor1',
    name: 'CadastroProfessor1',
    component: CadastroProfessor1,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor2',
    name: 'CadastroProfessor2',
    component: CadastroProfessor2,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor3',
    name: 'CadastroProfessor3',
    component: CadastroProfessor3,
    meta: { showToolbar: false }
  },
  {
    path: '/escolhamodalidade',
    name: 'EscolhaModalidade',
    component: EscolhaModalidade,
    meta: { showToolbar: false }
  },
  {
    path: '/escolhainstrutor/:modalidade',
    name: 'EscolhaInstrutor',
    component: EscolhaInstrutor,
    meta: { showToolbar: false }
  },
  
  {
    path: '/escolhaFuncao',
    name: 'EscolhaFuncao',
    component: Home,
    meta: { showToolbar: false }
  },
  {
    path: '/redefinirSenha',
    name: 'RedefinirSenha',
    component: RedefinirSenha,
    meta: { showToolbar: false }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
