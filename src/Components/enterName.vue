<template>
      <div class="container">
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
      @click="validate"
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
</template>
<script>
  export default {
    data: () => ({

      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      select: null,

      checkbox: false,
    }),
    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()
        if (valid) alert('Form is valid') 
      
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
