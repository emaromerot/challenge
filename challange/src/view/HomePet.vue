<template>
  <v-container fluid>
    <v-row align="start">
      <v-col cols="2">
        <SideBarVue />
      </v-col>
      <v-col cols="10">
        <header-pet-vue />
        <dashboard-pet-vue />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideBarVue from '@/components/home/SideBar.vue'
import HeaderPetVue from '@/components/home/HeaderPet.vue'
import DashboardPetVue from '@/components/home/DashboardPet.vue'
export default {
  components: {
    SideBarVue,
    HeaderPetVue,
    DashboardPetVue,
  },
}
</script>

<style lang="scss" scoped></style>
