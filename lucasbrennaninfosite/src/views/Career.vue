<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row align="start" justify="center">
          <v-col
          >
             <div class="main-text">
                Hi, I'm Lucas Brennan.
              </div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col>
            <CoverPhoto></CoverPhoto>
          </v-col>
        </v-row>
      
        <v-spacer></v-spacer>
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
                @click.prevent="openResume()"
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
  import CoverPhoto from '@/components/CoverPhoto.vue';
import Timeline from '@/components/Timeline.vue';
  function openResume() {
    window.open("Resume.pdf", '_blank');
  }
</script>
<style>
  .main-text {
    font-size: 48px !important;
  }
</style>
