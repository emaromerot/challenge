<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Nueva Contraseña</span>
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
              <span class="info--text font-weight-bold">Contraseña</span>
              <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="password"
                :rule="passwordRules"
                place-holder="*******"
                counter
                hint="Minimo 8 caracteres"
                solo
                dense
                rounded
                @click:append="show1 = !show1"
              ></v-text-field>
              <span class="info--text font-weight-bold"
                >Confirmar Contraseña</span
              >
              <v-text-field
                v-model="form.password_confirmation"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="password_confirmation"
                :rules="confirmPasswordRules"
                place-holder="*******"
                counter
                hint="Minimo 8 caracteres"
                solo
                dense
                rounded
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" @click="registrar">
              Registrar
            </v-btn>
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
      form: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      required: [(v) => !!v || 'Este campo es obligatorio'],
      emailRules: [
        (v) => !!v || 'Correo electrónico es obligatorio',
        (v) => /.+@.+\..+/.test(v) || 'Correo electrónico no válido',
      ],
      passwordRules: [
        (v) => !!v || 'Contraseña es obligatoria',
        (v) => (v && v.length >= 8) || 'minimo 8 caracteres',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'Contraseña es obligatoria',
        (v) => (v && v.length >= 8) || 'minimo 8 caracteres',
        (v) => v === this.form.password || 'las contraseñas no coinciden',
      ],
      formulario: [],
    }
  },
  methods: {
    async registrar() {},
  },
}
</script>
