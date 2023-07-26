<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
          <v-col
            cols="12"
            sm="2"
          >
             <div class="main-text pb-6">
                Hi, I'm Lucas Brennan.
              </div>

          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col 
          cols ="12"
          sm="12">
          <Timeline></Timeline>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="12"
            sm="2">
            <v-btn 
                variant="tonal" 
                href="Resume.pdf" 
                download
                ripple
                prepend-icon="mdi-paperclip"
                class="justify-center"
                >
                Resume
              </v-btn>
          </v-col>
        </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import Timeline from '@/components/Timeline.vue';
</script>
<style>
  .main-text {
    font-size: 48px !important;
  }
</style>
