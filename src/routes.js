export const routes = [
    {
        name:'Home',
        path:'',
        component:() => import('./components/Home/Home.vue'),
        menu:true
    },
    {
        name:'Cadastro',
        path:'/cadastro',
        component:() => import('./components/cadastro/Cadastro.vue'),
        menu:true
    },
    {
        name:'Altera',
        path:'/cadastro/:id',
        component:() => import('./components/cadastro/Cadastro.vue')
    },
    {
        path:'*',
        component:() => import('./components/notFound/NotFound.vue')
    }
];