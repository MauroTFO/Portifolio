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
      Sou um programador FullStack, porém mais focado no FrontEnd. Estudante do Instituto Federal de Pernambuco, Campus
      Igarassu.
    </h3>
    <br />
    <div style="display: inline_block">
      <img align="center" alt="HTML" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg">
      <img align="center" alt="CSS" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg">
      <img align="center" alt="JS" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
      <img align="center" alt="React" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      <img align="center" alt="Node" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      <img align="center" alt="PHP" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
      <img align="center" alt="SQL" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
      <img align="center" alt="Vue.js" height="30" width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.1em;
  top: -10px;
}

h3 {
  display: grid;
  flex-flow: column wrap;
  width: 18em;
  font-size: 1.2rem;
}

@media (max-width: 650px) {
  h3 {
    display: flex;
    place-items: center;
    flex-flow: column wrap;
    margin-right: none;
    width: 17em;
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}</style>
