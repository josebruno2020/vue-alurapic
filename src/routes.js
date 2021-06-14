import Home from './components/Home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
export const routes = [
    {
        name:'Home',
        path:'',
        component:Home
    },
    {
        name:'Cadastro',
        path:'/cadastro',
        component:Cadastro
    }
];