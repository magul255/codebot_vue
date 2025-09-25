import { createRouter, createWebHistory } from 'vue-router'
import Chat from '../components/Chat.vue'
import Compiler from '../components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'chatbot', component: Chat },
  { path: '/compiler', name: 'compiler', component: Compiler }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router