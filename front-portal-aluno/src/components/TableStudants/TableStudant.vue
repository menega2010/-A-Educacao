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
          <td>{{ item.email }}</td>
          <td>{{ formatCPF(item.cpf) }}</td>

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
              @click="deleteStudant"
            ></v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>


<script setup>
import { ref, computed,onMounted } from "vue";
import { useRouter } from "vue-router";
import { EventBus } from "../../plugins/EventBus.js";
import axios from '../../axios'; // Importa o arquivo de configuração do axios

const plants = ref([]);



const router = useRouter();


// Dados
const headers = [
  { text: "Nome", align: "start", value: "name" },
  { text: "Luz", align: "start", value: "email" },
  { text: "Amigável para Pets", align: "start", value: "cpf" },
];



const fetchUsers = async () => {
  try {
    const response = await axios.get('/user/me'); 
    console.log(response.data)
    plants.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Computed property para formatar CPF
const formattedPlants = computed(() =>
  plants.value.map((plant) => ({
    ...plant,
    cpf: formatCPF(plant.cpf),
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

  // const data =  JSON.stringify(item);
  EventBus.emit("userData", item);
  router.push({
    path: "/AddStudantAndEdit",
     query: {
      name: item.name,
      email: item.email,
      cpf: item.cpf,
    }
  });


  // // Adicione a lógica de edição aqui
}

function deleteStudant() {
  router.push("/DeleteStudant");
  // Adicione a lógica de exclusão aqui
}

onMounted(() => {
  fetchUsers();
})
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


