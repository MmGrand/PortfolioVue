<template>
  <Nav />
  <Header v-if="isHomePage" />
  <main class="section">
    <div class="container">
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

<script setup>
  import Nav from './components/Nav.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute();

  const isHomePage = computed(() => route.path === '/');
</script>

<style scoped>

</style>
