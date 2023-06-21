<script setup>
import Home from '@/router/Home.vue'
</script>

<template>
  <main>
      <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: row nowrap;
}

@media (max-width: 650px) {
  main {
    display: flex;
    place-items: center;
    flex-flow: column wrap;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
   flex-flow: column;
  }
}

@media (max-width: 1030px) {
  main {
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>