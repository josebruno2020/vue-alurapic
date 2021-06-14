<template>
    <img class="img-respons" :src="url" :alt="titulo">
</template>

<script>
export default {
    name:'ImageResponsive',
    props:['url', 'titulo']
}
</script>

<style scoped>
.img-respons {
    width: 100%;
}
</style>