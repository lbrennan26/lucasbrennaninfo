<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-card
              rounded="lg"
              min-height="268"
            >
              <v-card-text>
                Hi, I'm Lucas Brennan. A Software Developer in the fintech industry.
              </v-card-text>

              <v-card-actions>
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
              </v-card-actions>
              
            </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-card
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-card
              rounded="lg"
              min-height="268"
            >
            
            </v-card>
          </v-col>
        </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>

