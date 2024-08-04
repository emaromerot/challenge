<template>
  <v-card class="mx-auto my-4 pa-2">
    <v-card-title class="d-flex justify-space-between">
      <span>HEALTH MONITORING</span>
      <v-select
        v-model="selectedPeriod"
        :items="periods"
        dense
        outlined
        hide-details
        class="select-period"
      ></v-select>
    </v-card-title>

    <v-tabs v-model="selectedTab" background-color="transparent" grow>
      <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab }}</v-tab>
    </v-tabs>

    <v-card-text>
      <canvas ref="chart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  data() {
    return {
      selectedPeriod: 'Monthly',
      periods: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
      selectedTab: 0,
      tabs: ['Stress level', 'Pulse', 'Temperature', 'Calories burned'],
      chart: null,
    }
  },
  watch: {
    selectedTab() {
      this.updateChart()
    },
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    getChartData() {
      const dataSets = {
        'Stress level': [1, 3, 2, 5, 4, 3, 6, 2],
        Pulse: [3, 2, 5, 6, 7, 4, 8, 5],
        Temperature: [36, 37, 36.5, 38, 37.5, 36, 37.2, 36.8],
        'Calories burned': [200, 300, 250, 400, 350, 300, 450, 400],
      }
      return dataSets[this.tabs[this.selectedTab]]
    },
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d')
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['September', 'October', 'November', 'December', 'January'],
          datasets: [
            {
              label: this.tabs[this.selectedTab],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              data: this.getChartData(),
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    },
    updateChart() {
      if (this.chart) {
        this.chart.data.datasets[0].data = this.getChartData()
        this.chart.data.datasets[0].label = this.tabs[this.selectedTab]
        this.chart.update()
      }
    },
  },
}
</script>

<style scoped>
.select-period {
  max-width: 120px;
}

canvas {
  max-width: 95%;
  height: 300px;
}
</style>
