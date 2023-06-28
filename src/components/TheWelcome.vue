<script setup>
import WelcomeItem from './WelcomeItem.vue'
import ProjectIcon from './icons/IconProject.vue'
import CameraIcon from './icons/IconCamera.vue'
import AulaIcon from './icons/IconAula.vue'
import SobreIcon from './icons/IconSobre.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <WelcomeItem>
      <template #icon>
        <ProjectIcon />
      </template>
      <template #heading>Projetos</template>
      <RouterLink to="/projetos"> Veja meus projetos</RouterLink>
      pessoais ou projetos em parceria com instituições e empresas.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CameraIcon />
      </template>
      <template #heading>Fotos</template>

      Veja minhas
      <RouterLink to="/fotos">Fotos</RouterLink>
      em projetos e eventos.

      <br />
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <AulaIcon />
      </template>
      <template #heading>Aulas</template>
      Dou
      <RouterLink to="/aulas">Aulas</RouterLink>
      como hobby. Tá aí uma coisa que me faz bem e ajudam no meu conhecimento.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SobreIcon />
      </template>
      <template #heading>Sobre</template>

      Saiba mais
      <RouterLink to="/sobre">Sobre </RouterLink>mim.
    </WelcomeItem>
  </section>
</template>

<style scoped>
section {
  width: 35em;
}

@media (max-width: 650px) {
  section {
    width: 12em;
  }
}

@media (max-width: 1024px) {
  section {
    width: 25em;
  }
}
</style>