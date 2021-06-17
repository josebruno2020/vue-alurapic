<template>
    <div class="corpo">
        <meu-menu :routes="routes"></meu-menu>
        <transition name="pagina">
            <router-view></router-view>
        </transition>
       
    </div>
</template>

<script>
import MenuVue from './components/shared/menu/Menu.vue'
import { routes } from './routes';
export default {
    name: 'App',
    data() {
        return {
            routes:routes.filter(route => route.menu)
        }
    },
    components: {
        'meu-menu':MenuVue
    }
}
</script>

<style scoped>
.corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {
    opacity: 0;
}
.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s ;
}
</style>
