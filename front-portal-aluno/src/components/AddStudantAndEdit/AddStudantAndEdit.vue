<template>
  <!-- <div v-if="loading" class="loading-overlay">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div> -->
  <div  class="modal-overlay">
    <v-card class="mx-auto modal-card" max-width="344" title="User Registration">
      <v-btn @click="closeModal" icon size="x-small" class="modal-close-button">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-container>
        <v-text-field
          v-model="nome"
          color="primary"
          label="Nome"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          color="primary"
          label="E-mail"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="ra"
          color="primary"
          label="RA"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="cpf"
          color="primary"
          label="CPF"
          variant="underlined"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="button-custom-cancel" @click="closeModal">
          Cancelar
        </v-btn>

        <v-btn class="button-custom-success" @click="save">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { EventBus } from '../../plugins/EventBus.js';


// Estado dos dados e do carregamento
const nome = ref('');
const email = ref('');
const ra = ref('');
const cpf = ref('');
const loading = ref(true);
const router = useRouter();
const route = useRoute()

// Use onMounted to call the functions when the component is mounted
// function  created() {
//   const studentData = route.state?.studentData;
//   console.log(studentData)
//   if (studentData) {
//     nome.value = studentData.name || '';
//     email.value = studentData.email || '';
//     ra.value = studentData.ra || '';
//     cpf.value = studentData.cpf || '';
//   }

//     // EventBus.on('userData', (data) => {
//     //   cpf.value = data.name
//     //   console.log()

//     // });
  
//   }
onMounted(() => {
  // Obtendo os dados passados pela rota
  nome.value = route.query.name || '';
  email.value = route.query.email || '';
  cpf.value = route.query.cpf || '';
});



function closeModal() {
  router.back();
}

function save() {

}
</script>

<style scoped>
.button-custom-success {
  background-color: #59CE72;
  color: white;
}

.button-custom-cancel {
  background-color: #000000;
  color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 2000;
}

.modal-card {
  position: relative;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}

.modal-close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2001;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
</style>
