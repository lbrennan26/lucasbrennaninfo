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
  <v-layout class="rounded rounded-md">
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
      <v-main class="d-flex align-center justify-center">
        <v-container fluid>
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
</template>

<style scoped>

</style>
