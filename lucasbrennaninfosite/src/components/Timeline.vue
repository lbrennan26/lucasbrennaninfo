<template>
  <v-timeline 
  :direction=direction
  truncate-line="end"
  >
    <v-timeline-item>
      <template v-slot:opposite>
        2015 - 2018
      </template>
      <div>
        <div class="text-h6 pb-2">University of Pittsburgh</div>
        <p>
          Bachelor of Science in Computer Science. 3.5 GPA. Minor: Applied Statistics.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        2018-2018
      </template>
      <div>
        <div class="text-h6 pb-2">Quality Computer Systems Intern, American Reagent</div>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        2019 - Present
      </template>
      <div>
        <div class="text-h6 pb-2">Full Stack Engineer, BlueMatrix</div>
      </div>
    </v-timeline-item>

    <v-timeline-item>
        <div class="text-h6">What's Next?</div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  computed: {
    direction() {
      return this.$vuetify.display.mobile ? 'vertical' : 'horizontal'
    }
  } 
}

</script>
<style>
</style>

