<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Sou um programador FullStack, porém mais focado no FrontEnd. Estudante do Instituto Federal de Pernambuco, Campus Igarassu. <br />
      <a href="https://instagram.com/maurinhuoff" ><img src="/src/assets/instagram.png" width="30" height="30" /></a> |
      <a href="https://github.com/maurotfo" ><img src="/src/assets/placa-do-github.png" width="30" height="30" /></a> |
      <a href="https://linkedin.com/in/maurinhu" ><img src="/src/assets/linkedin.png" width="30" height="30" /></a> |
      </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.1em;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
