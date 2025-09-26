<template>
<div class="mx-3">
  <h1>CodeBot compiler wiil be here</h1>
</div>

<div class="card mx-3">
  <h3 class="" @click="count++">Count: {{ count }}</h3>
  <button class="btn btn-primary mb-1" @click="count++">plus</button>
  <button class="btn btn-primary" @click="count--">minus</button>

  <button class="btn btn-primary mt-2" @click="goToChat()">To chat</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test HMR
  </p>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const count = ref(0)

const goToChat = () => {
  router.push({ name: 'chatbot' })
}
</script>