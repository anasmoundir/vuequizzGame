
<template>
 <div>
    <v-toolbar
      dark
      prominent
      image=""
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title> AWS Quizz Application </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Home</v-btn>
        <v-btn text>About</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
<v-timeline direction="horizontal" line-inset="12">
    <v-timeline-item @click="next" dot-color="green">
      enter your name
    </v-timeline-item>

    <v-timeline-item >
       play the quizz 
    </v-timeline-item>

    <v-timeline-item>
    Get you score
    </v-timeline-item>
  </v-timeline>
 
</template>

<script>
export default {
  
  methods: {
    next () {
      console.log('next');
      this.step++

    },
    prev () {
      this.step--
    }
  },
  name: 'Stepper-Example',

  data: () => ({
    step: 1
  })
}
</script>