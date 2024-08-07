<template>
  <div class="modal-overlay ">
    <v-card
    class="mx-auto modal-card"
    max-width="344"
    title="User Registration"
  >
   <v-btn
          @click="closeModal"
          icon
          size="x-small"
          class="modal-close-button"
        >
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

     <v-btn class="button-custom-sucess">
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      nome: null,
      email: null,
      ra: null,
      cpf: null,
    }),
    name: "AddStudantAndEdit"
  }
</script>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { EventBus } from '../../plugins/EventBus.js';

const user = ref({});

onMounted(() => {
  EventBus.on('userData', (data) => {
    
    user.value = data;
  });
});

const router = useRouter();
function closeModal() {
  router.back();
}
</script>

<style scoped> 
.button-custom-sucess {
  background-color: 	#59CE72;
}
.button-custom.cancel {
  background-color: #000000;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay background */
  backdrop-filter: blur(5px); /* Blur effect */
  z-index: 2000; /* Ensure the overlay is above the page content */
}

/* Styles for the modal card */
.modal-card {
  position: relative;
  margin: auto; /* Center the modal horizontally */
  top: 50%;
  transform: translateY(-50%); /* Center the modal vertically */
}

/* Styles for the close button inside the modal */
.modal-close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2001; /* Ensure the button is above the modal content */
}
</style>

