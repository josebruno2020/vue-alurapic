import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import VeeValidate, { Validator } from 'vee-validate';
import msg from 'vee-validate/dist/locale/pt_BR';
import './directives/Transform';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {

    // é possível colocar informações no header antes do envio da requisição
    // req.headers.set('Authorization', 'informação de segurança aqui');
    console.log('Lidando com o request');

    next(res => {
      console.log('Lidando com a resposta')
      // é possível acessar os dados da reposta e realizar transformações antes
      console.log(res.body);
    });

});

Vue.use(VueRouter);
Vue.use(VeeValidate);
Validator.localize('pt_BR', msg);

const router = new VueRouter({
    routes,
    mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
