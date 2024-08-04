<template>
  <v-card
    outlined
    max-width="290"
    max-height="331"
    rounded="lg"
    class="mx-auto my-4 pa-3"
  >
    <v-row >
      <v-col cols="5" class="d-flex align-center">
        <span class="font-weight-medium">{{ title }}</span>
      </v-col>
      <v-col cols="7">
        <v-select
          :items="periods"
          :value="item"
          dense
          outlined
          hide-details
          class="select-period"
        ></v-select>
      </v-col>
    </v-row>

    <v-card-text class="d-flex flex-column align-center pa-0">
      <v-progress-circular
        :value="number"
        :size="200"
        :width="10"
        :color="color"
        :rotate="-90"
        class="my-4"
      >
        <h1 class="black--text">{{ number }} %</h1>
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    color: {
      type: String,
      default: '#27A468',
    },
    number: {
      type: Number,
      default: 0,
    },
    item: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      periods: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    }
  },
}
</script>

<style scoped>
.select-period {
  max-width: 120px;
  margin-left: auto;
}

@media (max-width: 600px) {
  .v-card {
    max-width: 100%;
    max-height: auto;
  }

  .v-progress-circular {
    width: 100% !important;
    height: auto !important;
  }

  .v-card-text {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}
</style>
