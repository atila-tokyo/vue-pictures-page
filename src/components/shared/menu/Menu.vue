<template>
    <nav>
      <ul>
        <li v-for="route in routes" v-bind:key=route>
          <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>