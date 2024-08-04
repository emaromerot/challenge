<template>
  <v-card rounded="lg">
    <v-row align="center"   justify="space-between">
      <v-col cols="9">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          placeholder="Search"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select outlined dense class="mr-2 mt-5" placeholder="By Type">
        </v-select>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="mt-5"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text': 'Items por Pag',
      }"
    >
      <template #item="{ item }">
        <tr>
          <td class="black--text font-weight-bold">{{ item.name }}</td>
          <td>
            <v-chip :class="getChipClass(item.type)">
              {{ item.type }}
            </v-chip>
          </td>
          <td class="black--text font-weight-bold">{{ item.date }}</td>
          <td>
            <v-btn v-if="item.vetetinar === 'Find veterinar'" color="primary">
              {{ item.vetetinar }}
            </v-btn>
            <v-btn v-else>
              {{ item.vetetinar }}
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Type',
          value: 'type',
        },
        {
          text: 'Date',
          value: 'date',
        },
        {
          text: 'Veterinar',
          value: 'vetetinar',
        },
      ],
      search: '',
    }
  },
  computed: {
    items() {
      return this.$store.getters.allItems
    },
  },
  methods: {
    getChipClass(type) {
      let chipClass = ''
      switch (type) {
        case 'Overdue':
          chipClass = 'red-chip'
          break
        case 'Noncore':
          chipClass = 'blue-chip'
          break
        case 'Core':
          chipClass = 'green-chip'
          break
        default:
          chipClass = '' // Clase por defecto si no se encuentra el tipo
      }
      return chipClass
    },
  },
}
</script>

<style scoped>
.red-chip {
  background-color: rgba(247, 193, 206, 1) !important/* Rojo con opacidad */;
  color: rgba(208, 50, 88, 1) !important;
}

.blue-chip {
  background-color: rgba(247, 225, 193, 1) !important; /* Azul con opacidad */
  color: rgba(242, 167, 53, 1) !important;
}

.green-chip {
  background-color: rgba(189, 232, 211, 1) !important; /* Verde con opacidad */
  color: rgba(39, 164, 104, 1) !important;
}
</style>
