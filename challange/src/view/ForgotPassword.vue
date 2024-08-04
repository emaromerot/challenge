<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Recuperar Contraseña</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <span class="info--text font-weight-bold">Email</span>
              <v-text-field
                name="name"
                :rules="emailRules"
                solo
                rounded
                dense
                placeholder="Ej. usuario@gmmail.com"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" to="recover-password">
              Enviar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    recoverPassword() {
      console.log('Email:', this.email)
    },
  },
}
</script>

<style scoped>
/* Estilos específicos para la vista ForgotPassword */
</style>
