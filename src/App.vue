<script setup>
</script>

<template>
  <main>
      <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  place-items: center;
}

@media (max-width: 650px) {
  main {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 0 2rem;
  }
}

@media (max-width: 1024px) {
  main {
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
}
</style>