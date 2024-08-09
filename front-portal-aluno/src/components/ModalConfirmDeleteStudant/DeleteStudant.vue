<template>
  <div class="modal-overlay">
    <v-card class="modal-card">
      <v-card-title>
        <span class="headline">Confirmar Exclusão</span>
      </v-card-title>
      <v-spacer></v-spacer>
 <v-divider></v-divider>
      <v-card-subtitle class="mt-6 mb-6">
        Você deseja mesmo excluir este aluno? Esta ação não pode ser desfeita.
      </v-card-subtitle>
 <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="confirmDelete">Confirmar</v-btn>
        <v-btn @click="closeModal">Cancelar</v-btn>
      </v-card-actions></v-card
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const showModal = ref(false);

// Function to open the modal
function openModal() {
  showModal.value = true;
}

// Function to close the modal
function closeModal() {
  showModal.value = false;
  document.body.style.overflow = ''; // Enable scrolling
  router.back(); // Navigate back to the previous route
}

// Function to handle confirmation
function confirmDelete() {
  // Handle the deletion logic here
  console.log("Aluno excluído.");
  closeModal(); // Close the modal after confirmation
}
</script>

<script>
export default {
  name: "DeleteStudant",
};
</script>

<style scoped>
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

.modal-card {
  position: relative;
  margin: auto; /* Center the modal horizontally */
  width: 1000px;
  top: 50%;
  transform: translateY(-50%); /* Center the modal vertically */
}
</style>
