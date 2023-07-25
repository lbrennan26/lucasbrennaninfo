<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
          <v-col
            cols="12"
            sm="2"
          >

              <v-text class="main-text">
                Hi, I'm Lucas Brennan.
              </v-text>


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
        <v-row>
          <v-col 
          cols ="12"
          sm="12">
          <Timeline></Timeline>
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
