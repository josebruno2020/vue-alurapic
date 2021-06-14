<template>
    <nav>
        <ul class="lista">
            <li class="menu-item" v-for="(route, i) in routes" :key="i"> 
                <router-link :to="route.path ? route.path : '/'">{{route.name}}</router-link> 
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Menu',
    props:{
        routes: {
            required:true,
            type: Array
        }
    }
}
</script>


<style scoped>
.lista {
    display: flex;
}

.menu-item {
    padding: 20px;
    list-style: none;

}
</style>

