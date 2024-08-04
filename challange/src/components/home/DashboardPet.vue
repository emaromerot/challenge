<template>
  <v-container fluid style="background-color: #dae3f8">
    <br />
    <v-row align="start">
      <v-col cols="6">
        <v-row>
          <CardProgressCircularVue
            title="Activity"
            color="pink"
            :number="25"
            item="Daily"
          />
          <CardProgressCircularVue
            title="Sleep"
            color="#27A468"
            :number="79"
            item="Weekly"
          />
          <CardProgressCircularVue
            title="Wellness"
            color="orange"
            :number="52"
            item="Weekly"
          />
        </v-row>
        <card-chart-vue />
      </v-col>
      <v-col cols="6">
        <table-vaccination-vue />
        <br />
        <chat-pet-vue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardChartVue from './CardChart.vue'
import CardProgressCircularVue from './CardProgressCircular.vue'
import ChatPetVue from './ChatPet.vue'
import TableVaccinationVue from './TableVaccination.vue'
export default {
  components: {
    CardProgressCircularVue,
    TableVaccinationVue,
    ChatPetVue,
    CardChartVue,
  },
}
</script>

<style lang="scss" scoped></style>
