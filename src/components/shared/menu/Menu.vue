<template>
    <nav>
      <ul>
        <li v-for="routee in routing" v-bind:key=routee>
          <router-link :to="routee.path ? routee.path : '/'">{{ routee.title }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: ['routing']
}
</script>

<style scoped>

</style>