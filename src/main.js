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
