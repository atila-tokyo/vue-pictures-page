<template>
    <img class="responsive-img" :src="url" :alt="titulo">
</template>

<script>
export default {

    props: ['url', 'titulo']
}
</script>

<style scoped>

.responsive-img {
    width: 100%;
}
</style>
