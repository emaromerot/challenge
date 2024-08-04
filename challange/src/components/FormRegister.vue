<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around ma-0 pa-0">
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Nombre</span>
        <v-text-field
          v-model="form.name"
          name="name"
          :rules="required"
          solo
          rounded
          dense
          placeholder="Ej. Juan"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Apellido</span>
        <v-text-field
          v-model="form.apellido"
          name="name"
          :rules="required"
          solo
          rounded
          dense
          placeholder="Ej. Ramirez"
        ></v-text-field>
      </v-col>
    </div>
    <div class="d-flex flex-wrap justify-space-around ma-0 pa-0">
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Email</span>
        <v-text-field
          v-model="form.email"
          name="name"
          :rules="emailRules"
          solo
          rounded
          dense
          placeholder="Ej. usuario@gmmail.com"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Teléfono </span>
        <v-text-field
          v-model="form.telefono"
          name="name"
          :rules="required"
          solo
          rounded
          dense
          placeholder="Ej. +594...."
        ></v-text-field>
      </v-col>
    </div>
    <div class="d-flex flex-wrap justify-space-around ma-0 pa-0">
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Fecha de Nacimiento</span>
        <v-menu
          v-model="menuDate"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          min-width="auto"
          :return-value.sync="fecha"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="form.fecha_nacimiento"
              label="Fecha"
              color="secondary"
              prepend-icon="mdi-calendar"
              readonly
              solo
              rounded
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="fecha"
            locale="es-Es"
            color="secondary"
            @input="menuDate = false"
            @change="updateFecha"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-0 py-0">
        <span class="info--text font-weight-bold">Sexo</span>
        <v-radio-group v-model="form.sexo_id" row class="mt-md-n1 mt-lg-1">
          <v-radio label="Masculino" :value="1"></v-radio>
          <v-radio label="Femenino" :value="2"></v-radio>
        </v-radio-group>
      </v-col>
    </div>
    <div class="d-flex flex-wrap justify-space-around ma-0 pa-0">
      <v-col cols="12" md="4" class="my-0 py-0">
        <span class="info--text font-weight-bold">Usuario</span>
        <v-text-field
          v-model="form.username"
          name="name"
          solo
          rounded
          dense
          placeholder="Ej. Juan"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4" class="my-0 py-0">
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
      </v-col>

      <v-col cols="12" md="4" class="my-0 py-0">
        <span class="info--text font-weight-bold">Confirmar Contraseña</span>
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
      </v-col>
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="primary" rounded @click="registrar">
        Registrar
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        apellido: '',
        email: '',
        telefono: '',
        username: '',
        password: '',
        password_confirmation: '',
        fecha_nacimiento: '',
        sexo_id: '',
        tipo_usuario: 1,
      },
      show1: false,
      fecha: new Date('2000-01-01').toISOString().substr(0, 10),
      menuDate: false,
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
    updateFecha() {
      this.form.fecha_nacimiento = this.fecha
    },

    async registrar() {},
  },
}
</script>
