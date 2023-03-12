<template>
      <div class="container">
        <v-timeline class="timeline-horizontal" color="primary">
          <v-timeline-item
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'v-timeline-item--active': step === index + 1 }"
            color="teal"
          >
            <template v-slot:opposite>
              Step {{ index + 1 }}
            </template>
            {{ item }}
          </v-timeline-item>
        </v-timeline>
        <v-btn @click="prev" v-if="step > 1">Prev</v-btn>
        <v-btn @click="next" v-if="step < items.length">Next</v-btn>
      </div>
    </template>
    
    <style>
    .container {
      max-width: 800px;
      margin: 0 auto;
      direction: rtl;
    }
    
    .timeline-horizontal .v-timeline-items {
      display: flex;
      flex-direction: row-reverse;
    }
    </style>
    
    <script>
    export default {
      data() {
        return {
          step: 1,
          items: ['Step 1', 'Step 2', 'Step 3']
        };
      },
      methods: {
        prev() {
          this.step--;
        },
        next() {
          this.step++;
        }
      }
    };
    </script>