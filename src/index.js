import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/router/Home.vue"),
    },
    {
      path: "/projetos",
      name: "Projetos",
      component: () => import("@/router/Projeto.vue"),
    },
    {
      path: "/fotos",
      name: "Foto",
      component: () => import("@/router/Foto.vue"),
    },
    {
      path: "/aulas",
      name: "Aula",
      component: () => import ("@/router/Aula.vue"),
    },
    {
      path: "/sobre",
      name: "Sobre",
      component: () => import("@/router/Sobre.vue")
    }
  ],
});

export default router;