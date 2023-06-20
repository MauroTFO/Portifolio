<script setup>
import WelcomeItem from './WelcomeItem.vue'
import ProjectIcon from './icons/IconProject.vue'
import CameraIcon from './icons/IconCamera.vue'
import AulaIcon from './icons/IconAula.vue'
import SobreIcon from './icons/IconSobre.vue'
import SupportIcon from './icons/IconTecnologia.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ProjectIcon />
    </template>
    <template #heading>Projetos</template>
    <a href="https://github.com/maurotfo"> Veja meus projetos</a>
    pessoais ou projetos em parceria com instituições e empresas.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CameraIcon />
    </template>
    <template #heading>Fotos</template>

    Veja minhas
    <a href="">Fotos</a>
    em projetos e eventos.

    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <AulaIcon />
    </template>
    <template #heading>Aulas</template>
    Dou
    <a href="">Aulas</a>
    como hobby. Tá aí uma coisa que me faz bem e ajudam no meu conhecimento.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SobreIcon />
    </template>
    <template #heading>Sobre</template>

    Saiba mais
    <a href="">Sobre </a>mim.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Tecnologias</template>
    <a href="">Tecnologias</a> que tenho experiência ou estou estudando.
  </WelcomeItem>
</template>
