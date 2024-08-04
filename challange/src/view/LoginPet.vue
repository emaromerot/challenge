<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Ingresar a PetCare</span>
            <v-icon x-large color="primary" >mdi-cat</v-icon>

          </v-card-title>
          <v-card-text>
            <v-form>
              <span class="info--text font-weight-bold">Email</span>
              <v-text-field
                v-model="email"
                name="name"
                solo
                rounded
                dense
                placeholder="Ej. usuario@gmmail.com"
              ></v-text-field>
              <span class="info--text font-weight-bold">Contraseña</span>
              <v-text-field
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                name="password"
                solo
                dense
                rounded
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex flex-column align-center">
            <v-btn color="primary" @click="login" class="mb-2"
              >Iniciar Sesión</v-btn
            >
            <v-btn color="secondary" to="/registro" class="mb-2"
              >Registrarse</v-btn
            >
            <router-link to="/forgot-password" class="mb-2"
              >¿Olvidaste tu contraseña?</router-link
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (this.email === `admin@admin.com` && this.password === `admin`) {
        this.$router.push('/home')
      } else {
        alert('usuario y/o contrasena incorrecta')
      }
    },
  },
}
</script>

<style scoped></style>
