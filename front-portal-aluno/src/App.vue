<template>
  <v-app id="inspire">
    <!-- App Bar -->
    <v-app-bar class="custom-bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Portal Alunos</v-app-bar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="custom-drawer"
      :width="200"
    >
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="main-content">
      <div class="responsive-panel">
        <v-container class="p-15">
          <v-row>
            <v-col class="pl-9">
              <v-card max-width="400">
                <v-text-field
                  :loading="loading"
                  append-inner-icon="mdi-magnify"
                  density="compact"
                  label="Search templates"
                  variant="solo"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                  class="my-text-field"
                ></v-text-field>
              </v-card>
            </v-col>
            <v-col cols="auto" class="d-flex align-center pr-9">
              <v-btn @click="goToAnotherComponent" class="ml-auto">Regular Button</v-btn>
            </v-col>
          </v-row>
          <router-view />
          <TableStudant />
        </v-container>
      </div>
    </v-main>

    <!-- Footer -->
    <v-footer class="v-footer">
      <v-row>
        <v-col class="text-center" cols="12">
          <p>&copy; 2024 Meu Projeto. Todos os direitos reservados.</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false);

function goToAnotherComponent() {
  router.push('/AddStudantAndEdit');
}
</script>

<script>
import TableStudant from './components/TableStudants/TableStudant.vue';

export default {
  components: {
    TableStudant,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>

.custom-add-studant-router {
  z-index: 900;
}

/* Estilos para o App Bar */
.custom-bar {
  background-color: #F0F0F0;
  z-index: 1200; 
}

/* Estilos para o Navigation Drawer */
.custom-drawer {
  z-index: 1100; 
  position: fixed;
  top: 64px; /* Ajuste se necessário para o App Bar */
  width: 200px; 
}

/* Estilos para o Main Content */
.main-content {
  min-height: calc(100vh - 64px - 60px); /* Ajuste para o App Bar e o Footer */
  display: flex;
  flex-direction: column;
}

/* Estilos para o painel responsivo */
.responsive-panel {
  background-color: #F0F0F0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.219);
  padding: 16px;
  max-width: 80%;
  width: 1000px;
  box-sizing: border-box;
  margin: 0 auto; /* Centraliza horizontalmente */
}

/* Estilos para o Footer */
.v-footer {
  background-color: #F0F0F0; /* Cor de fundo off-white */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave para efeito de relevo */
  padding: 16px; /* Espaçamento interno */
  z-index: 1000; /* Garantir que o footer fique abaixo do app bar e do drawer */
  margin-top: 20px;
}

/* Estilos adicionais para o texto no footer */
.v-footer p {
  margin: 0; /* Remove margens padrão do parágrafo */
  color: #333; /* Cor do texto */
}
</style>
