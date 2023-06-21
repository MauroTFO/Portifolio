<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div class="caixa">
      <img alt="logo" class="logo" src="./assets/homem.png" width="155" height="155" />
      <div class="redes">
        <a href="https://instagram.com/maurinhuoff"><img src="/src/assets/instagram.png" width="30" height="30" /></a> 
        <a href="https://github.com/maurotfo"><img src="/src/assets/placa-do-github.png" width="30" height="30" /></a> 
        <a href="https://linkedin.com/in/maurinhu"><img src="/src/assets/linkedin.png" width="30" height="30" /></a> 
      </div>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Oi, Meu nome é Mauro" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.caixa {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.redes {
  display: flex;
  padding-right: 2.2em;
  gap: 0.3em;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
