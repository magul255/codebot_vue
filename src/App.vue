<template>
  <!-- Navgiation bar-->
  <Navbar/>

  <!-- Changed pages -->
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
</script>