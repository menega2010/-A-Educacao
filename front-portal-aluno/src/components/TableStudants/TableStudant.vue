<template>
  <v-card class="vcard-custom">
    <v-data-table
      :headers="headers"
      :items="formattedPlants"
      density="compact"
      item-key="name"
    >
      <!-- Slot para o cabeçalho da tabela -->
      <template v-slot:headers>
        <tr>
          <th>Registro Acadêmico</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Ações</th>
        </tr>
      </template>

      <!-- Slot para o corpo da tabela -->
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.light }}</td>
          <td>{{ formatCPF(item.height) }}</td>

          <td>
            <v-btn
              icon="mdi-pencil"
              size="x-small"
              @click="editItem(item)"
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              size="x-small"
              class="ml-2"
              @click="deleteItem(item)"
            ></v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

// Dados
const headers = [
  { text: "Nome", align: "start", value: "name" },
  { text: "Luz", align: "start", value: "light" },
  { text: "Amigável para Pets", align: "start", value: "height" },
];

const plants = ref([
  { name: "Fern", light: "Low", height: "03562847009" },
  { name: "Snake Plant", light: "Low", height: "03562847009" },
  { name: "Monstera", light: "Medium", height: "03562847009" },
  { name: "Pothos", light: "Low to medium", height: "03562847009" },
  { name: "ZZ Plant", light: "Low to medium", height: "03562847009" },
  { name: "Spider Plant", light: "Bright, indirect", height: "03562847009" },
  { name: "Air Plant", light: "Bright, indirect", height: "03562847009" },
  { name: "Peperomia", light: "Bright, indirect", height: "03562847009" },
  { name: "Aloe Vera", light: "Bright, direct", height: "03562847009" },
  { name: "Jade Plant", light: "Bright, direct", height: "03562847009" },
]);

// Computed property para formatar CPF
const formattedPlants = computed(() =>
  plants.value.map((plant) => ({
    ...plant,
    height: formatCPF(plant.height),
  }))
);

// Método para formatar CPF
function formatCPF(cpf) {
  return cpf
    .toString()
    .replace(/\D/g, "") // Remove qualquer caractere que não seja número
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Adiciona a máscara
}

// Métodos para ações
function editItem(item) {
  console.log("Edit item:", item);
  // Adicione a lógica de edição aqui
}

function deleteItem(item) {
  console.log("Delete item:", item);
  // Adicione a lógica de exclusão aqui
}
</script>

<style scoped>
.vcard-custom {
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}

/* Estilos adicionais para a tabela */
.v-data-table thead th {
  font-weight: bold;
}
</style>
