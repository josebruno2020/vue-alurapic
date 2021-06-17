import Home from './components/Home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
export const routes = [
    {
        name:'Home',
        path:'',
        component:Home,
        menu:true
    },
    {
        name:'Cadastro',
        path:'/cadastro',
        component:Cadastro,
        menu:true
    },
    {
        name:'Altera',
        path:'/cadastro/:id',
        component:Cadastro
    },
    {
        path:'*',
        component:Home
    }
];