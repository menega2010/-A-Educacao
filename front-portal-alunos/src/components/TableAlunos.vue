<template>
  <v-card class="vcard-custom">
    <v-data-table
      :headers="headers"
      :items="plants"
      density="compact"
      item-key="name"
    >
   

      <!-- Slot para o corpo da tabela -->
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.light }}</td>
          <td>{{ item.petFriendly }}</td>
          <td>{{ formatCPF(item.height) }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
  
 <script>
export default {
  data: () => ({
    headers: [
  { text: 'Nome', align: 'start', value: 'name' },
      { text: 'Luz', align: 'start', value: 'light' },
      { text: 'Amigável para Pets', align: 'start', value: 'petFriendly' },
      { text: 'CPF', align: 'start', value: 'height' },
      { text: 'Preço', align: 'start', value: 'price' }
    ],
    plants: [
      { name: 'Fern', light: 'Low', height: '03562847009', petFriendly: 'Yes', price: 20 },
      { name: 'Snake Plant', light: 'Low', height: '03562847009', petFriendly: 'No', price: 35 },
      { name: 'Monstera', light: 'Medium', height: '03562847009', petFriendly: 'No', price: 50 },
      { name: 'Pothos', light: 'Low to medium', height: '03562847009', petFriendly: 'Yes', price: 25 },
      { name: 'ZZ Plant', light: 'Low to medium', height: '03562847009', petFriendly: 'Yes', price: 30 },
      { name: 'Spider Plant', light: 'Bright, indirect', height: '03562847009', petFriendly: 'Yes', price: 15 },
      { name: 'Air Plant', light: 'Bright, indirect', height: '03562847009', petFriendly: 'Yes', price: 10 },
      { name: 'Peperomia', light: 'Bright, indirect', height: '03562847009', petFriendly: 'Yes', price: 20 },
      { name: 'Aloe Vera', light: 'Bright, direct', height: '03562847009', petFriendly: 'Yes', price: 15 },
      { name: 'Jade Plant', light: 'Bright, direct', height: '03562847009', petFriendly: 'Yes', price: 25 },
    ],
  }),
  computed: {
    formattedPlants() {
      return this.plants.map(plant => ({
        ...plant,
        height: this.formatCPF(plant.height)
      }));
    }
  },
  methods: {
    formatCPF(cpf) {
      return cpf
        .toString()
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); 
    }
  },
  name: "TableAlunos",
}
</script>

<style scoped>
.vcard-custom {
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>