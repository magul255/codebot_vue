import { createRouter, createWebHistory } from 'vue-router'
import Chat from '../components/Chat.vue'
import Page404 from '../components/Page404.vue'
import Compiler from '../components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'chatbot', component: Chat },
  // { path: '/compiler', name: 'compiler', component: Compiler },

  // 404 error page
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router