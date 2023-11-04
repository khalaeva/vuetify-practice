<template>
<v-app class="bg-grey-lighten-4">
  <v-main class="mx-6 mb-4">
    <navbar/>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
  //
</script>
