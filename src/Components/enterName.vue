<template>
      <div class="container">
      
   
      </div>
</template>
<script>
export default {
      name : 'enterName',
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
