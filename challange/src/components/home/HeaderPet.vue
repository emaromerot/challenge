<template>
  <v-row align="center">
    <v-col cols="6">
      <v-text-field
        append-icon="mdi-magnify"
        solo
        dense
        placeholder="Search"
        style="margin-top: 25px"
      ></v-text-field>
    </v-col>
    <v-col class="text-right">
      <v-icon class="mr-2">mdi-help-rhombus-outline</v-icon>
      <v-icon class="mr-2">mdi-bell-outline</v-icon>
      <v-btn color="primary">Add widget</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
