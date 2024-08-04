<template>
  <v-card outlined rounded="lg">
    <v-card-subtitle>Chats</v-card-subtitle>
    <v-list two-line>
      <v-list-item-group active-class="info--text">
        <v-list-item v-for="(chat, index) in chats" :key="chat.id">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon :color="getIconColor(index)" x-small class="mr-2">
                mdi-circle
              </v-icon>
              {{ chat.name }}
              <div class="d-flex align-center">
                <span class="text-truncate" style="max-width: 680px">
                  {{ chat.text }}
                </span>
              </div>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text class="black--text">
              {{ chat.date }}
            </v-list-item-action-text>
            <v-row align="center" class="pa-4">
              <v-badge v-if="chat.number > 0" color="error" overlap>
                <template #badge>
                  <span class="blanco--text">{{ chat.number }}</span>
                </template>
              </v-badge>
            </v-row>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    chats() {
      return this.$store.getters.allChats
    },
  },
  methods: {
    getIconColor(index) {
      // Cambia los colores según el índice del elemento
      if (index < 2) {
        return 'green'
      } else if (index < 4) {
        return 'pink'
      } else {
        return 'default'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
