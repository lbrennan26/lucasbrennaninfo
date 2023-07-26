<template>
  <v-app basic-back>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<style>
.basic-back{
  background: url("~@/assets/peakpx.jpg") no-repeat center center fixed !important;
  background-size: cover;
}
</style>
