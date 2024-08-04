<template>
  <v-container fluid>
    <v-col>
      <h3 class="black--text font-weight-bold">Registrarse en PetCare</h3>
    </v-col>
    <FormRegisterVue />
  </v-container>
</template>

<script>
import FormRegisterVue from '@/components/FormRegister.vue'
export default {
  components: {
    FormRegisterVue,
  },
}
</script>

<style lang="scss" scoped></style>
