<template>
  <v-card class="d-flex flex-column" height="100vh">
    <v-row align="center">
      <v-col class="d-flex align-center">
        <v-icon color="primary" class="mr-2">mdi-cat</v-icon>
        <h3 class="black--text font-weight-bold">PetCare</h3>
      </v-col>
    </v-row>

    <v-list dense two-line>
      <v-list-item-group>
        <p class="ma-4">Menu</p>
        <v-list-item color="primary">
          <v-icon small>mdi-view-dashboard</v-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <v-icon small>mdi-paw</v-icon>
          <v-list-item-title>Pet Profile</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <p class="ma-4">ANALYTICS</p>

        <v-list-item color="primary">
          <v-icon small>mdi-heart-pulse</v-icon>
          <v-list-item-title>Health Monitoring</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <v-icon small>mdi-needle</v-icon>
          <v-list-item-title>Vaccination Schedule</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <p class="ma-4">SCHEDULE</p>

        <v-list-item color="primary">
          <v-icon small>mdi-chat</v-icon>
          <v-list-item-content>
            <v-list-item-title>Chat</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="primary">
          <v-icon small>mdi-calendar</v-icon>
          <v-list-item-content>
            <v-list-item-title>Appointments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <p class="ma-4">HELP</p>

        <v-list-item color="primary">
          <v-icon small>mdi-cog</v-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="primary">
          <v-icon small>mdi-book</v-icon>
          <v-list-item-content>
            <v-list-item-title>Documentation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>

    <v-spacer></v-spacer>

    <v-btn rounded color="error" to="/" small text class="mb-4">
      <v-icon small color="error" class="mr-2">mdi-logout</v-icon>
      Log out
    </v-btn>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped></style>
