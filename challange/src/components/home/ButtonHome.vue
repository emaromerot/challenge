<template>
  <v-btn :color="color" class="ml-2">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
