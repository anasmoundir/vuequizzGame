

<template>
    <v-app>
    <v-main>

    <Stepper/>
    <QuizzVuetify/>
    <enterName/>

    </v-main>
  </v-app>
</template>
<script>
import Stepper from './components/stepper.vue'
import  QuizzVuetify from './components/quizz-vutify.vue'
import enterName from './components/enterName.vue'


export default {
  name: 'App',

  components: {
    Stepper,
    QuizzVuetify,
    enterName
  }
}
</script>