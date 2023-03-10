<template>
      <Stepper :value="value" @change="handleChange" :items="items" />
   </template>
   
   <script>
   import {
    Stepper
       } from '@progress/kendo-vue-layout';
   export default {
       components: {
          Stepper
       },
       data () {
         return {
           value: 0,
           items: [
             {
               label: "step 1",
               icon: "k-start",
             },
         
             {
               label: "step 2",
               icon: "k-i-step-forward",
             },
   
             {
               label: "Fin",
               icon: "k-finallay-i",
             },
           ]
         }
       },
       methods: {
         handleChange (e) {
           this.value = e.value;
         }
       }
   };
   </script>