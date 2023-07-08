<template>
    <v-app-bar
      class="px-3"
      color="white"
      :elevation="2"
      density="compact"
    >
    <v-btn @click.stop="goToHome">
          Home
     </v-btn>
     <v-btn @click.stop="goToAbout">
          About Me
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function goToAbout() {
  router.push('/about')
}
function goToHome() {
  router.push('/')
}
</script>
