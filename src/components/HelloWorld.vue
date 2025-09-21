<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
<h1>Hello in CodeBot</h1>

<div class="card">
  <p class="" @click="count++">count is {{ count }}</p>
  <button type="button" @click="count++">plus</button>
  <button type="button" @click="count--">minus</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test HMR
  </p>
</div>
</template>