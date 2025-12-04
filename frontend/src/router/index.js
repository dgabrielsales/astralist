import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path :'/', component : ()=> import('../views/Inicio.vue')},
    {path :'/sobre', component : ()=> import('../views/Sobre.vue')},
    {path : '/login', component : ()=> import('../views/Login.vue')}
]

export default createRouter({
  history: createWebHistory(),
  routes
})