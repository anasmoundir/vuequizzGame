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
        {{this.name}}
      </v-toolbar-items>
    </v-toolbar>
  </div>
<v-timeline direction="horizontal" line-inset="12">
    <v-timeline-item  :dot-color = "step1" >
      enter your name 
    </v-timeline-item>

    <v-timeline-item  :dot-color="step2" >
       play the quizz 
  
    </v-timeline-item>

    <v-timeline-item  :dot-color="step3">
    Get you score
    </v-timeline-item>

  </v-timeline>
 
</template>

<script>
export default {
  
  props: {
    step1: String,
    step2: String,
    step3: String,
  },
  methods: {  

    methode (){
      console.log(this.step1)
      this.variable = this.step1
      return this.step1;
    }
  
 
  },


data ()
{
  return
  { 
  }
}
}
</script>