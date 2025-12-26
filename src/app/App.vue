<script setup lang="ts">
import './styles/style.css'

import Header from '@/widgets/header/ui/Header.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    padding: 1rem;
  }
</style>
