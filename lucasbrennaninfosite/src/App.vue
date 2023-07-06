<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter()
function goToAbout() {
  router.push('/about')
}
function goToHome() {
  router.push('/')
}
</script>

<template>
  <v-app>
    <v-app-bar 
        app
        :elevation="2">
        <v-btn @click.stop="goToHome">
          Home
          </v-btn>
        <v-btn @click.stop="goToAbout">
          About Me
          </v-btn>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <RouterView />
        </v-container>
      </v-main>
</v-app>
</template>

<style scoped>
</style>
