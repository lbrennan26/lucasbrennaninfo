<template>
    <main>
      <v-app>
        <v-app-bar 
        :elevation="2">
        <v-btn  @click.stop="drawer = !drawer">
          <font-awesome-icon icon="fa-solid fa-bars" />
          </v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
          v-model="drawer"
        >
          <v-list>
            <v-list-item>
              <RouterLink to="/">Home</RouterLink>
            </v-list-item>
            <v-list-item>
              <RouterLink to="/about">About</RouterLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-app>
    </main>
  </template>

  <script>
  import  {RouterLink } from 'vue-router'
  export default {
    data: () => ({
      drawer: false,
      group: null
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>