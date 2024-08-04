<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    about() {
      this.$router.push('/about')
    },
  },
}
</script>

<style>
/* Estilos globales si es necesario */
</style>
