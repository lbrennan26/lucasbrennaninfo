<template>
    <v-app-bar
      class="px-3"
      color="#212121"
      :elevation="5"
      density="compact"
    >
    <v-btn @click.stop="goToHome">
          Career
     </v-btn>
     <v-btn @click.stop="goToAbout">
          Life
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function goToAbout() {
  router.push('/life')
}
function goToHome() {
  router.push('/')
}
</script>
