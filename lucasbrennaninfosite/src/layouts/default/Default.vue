<template>
  <v-app :style="{background: `url(${imagePath}) no-repeat center center fixed !important`}">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import imagePath from '@/assets/peakpx.png'
</script>

<style>

</style>
