

<template>
    <v-app>
    <v-main>

	<Stepper :step1="step1"  :step2="step2" :step3="step3"/>
	<QuizzVuetify  v-if="showQuiz"/>

<div class="container"  v-if="nameplh">
      <v-card
    class="mx-auto"
    variant="outlined"
  >
    <v-card-item>
      <v-sheet class="mx-auto">

<v-form ref="form">
  <v-text-field
    v-model="name"
    :counter="10"
    :rules="nameRules"
    label="Name"
    required
></v-text-field>



  <v-checkbox
    v-model="checkbox"
    :rules="[v => !!v || 'You must agree to continue!']"
    label="Do you agree?"
    required
  ></v-checkbox>

  <div class="d-flex flex-column">
    <v-btn
      color="success"
      class="mt-4"
      block
      @click="startQuiz()"
    > start the quizz
    </v-btn>

    <v-btn
      color="error"
      class="mt-4"
      block
      @click="reset"
    >
      turn back
    </v-btn>
  </div>
</v-form>
</v-sheet>
    </v-card-item>
  </v-card>
      </div>

   
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
    
  },
  //hide the quizz vutify component until the user enter his name
  data () {
	return {
	step1:"green",
	step2:"grey",
	step3:"grey",
	showQuiz: false,
	nameplh: true,
	valid: true,
	nameRules: [
	v => !!v || 'Name is required',
	v => (v && v.length <= 10) || 'Name must be less than 10 characters',
	],
		checkbox: false,
	}
  },

  methods: {

  async validate () {
      const { valid } = await this.$refs.form.validate()
	console.log('hey');
	if (valid) {
	this.showQuiz = true
	this.nameplh = false
	this.step2 = "green"
      }
      },
	
	startQuiz() {
	this.validate()
	
	console.log(this.showQuiz)
    },

      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  }
  }
</script>
