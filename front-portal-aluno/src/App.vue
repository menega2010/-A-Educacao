<template>
  <v-app id="inspire">
    <v-app-bar class="custom-bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Portal Alunos</v-app-bar-title>
    </v-app-bar>

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
    <template>
      <div>
        <router-view></router-view>
      </div>
    </template>

    <v-main class="page-container">
      
      <div class="responsive-panel">
        <v-container class="p-15">
        <v-row>
          <v-col class="pl-9">
            <v-card max-width="400" >
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
            <v-btn @click="goToAnotherComponent" class="ml-auto"
              >Regular Button</v-btn
            >
            
          </v-col>
          
        </v-row>
        <TableAlunos />
        
      </v-container>
      </div>
    </v-main>

    <v-footer border>
      <v-row>
          <v-col class="text-center" cols="12">
            <p>&copy; 2024 Meu Projeto. Todos os direitos reservados.</p>
          </v-col>
        </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const drawer = ref(false);

function goToAnotherComponent() {
  router.push("/");
}
</script>

<script>
import TableAlunos from "./components/TableAlunos.vue";

export default {
  data: () => ({ drawer: false }),
  components: {
    TableAlunos,
  },
  data: () => ({
    loaded: false,
    loading: false,
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<style scoped>

.v-footer {
  background-color: #F0F0F0; /* Cor de fundo off-white */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave para efeito de relevo */
  padding: 16px; /* Espaçamento interno */
}

.v-footer p {
  margin: 0; /* Remove margens padrão do parágrafo */
  color: #333; /* Cor do texto */
}

.page-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin: 0;
  margin-bottom: 10px;
}

.responsive-panel {
  background-color: #F0F0F0; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.219); 
  padding: 16px; 
  max-width: 80%;
  width: 1000px;
  box-sizing: border-box; 
  
}

.custom-bar {
  background-color: #F0F0F0;
  z-index: 1200; 
  margin: 0px;
}

.custom-drawer {
  z-index: 1100; 
  position: fixed;
  top: 64px; 
  width: 200px; 
}

.main-content {
  margin-bottom: 40px;
}

v-footer {
  z-index: 1000; 
  background-color: #F0F0F0 !important;
}
</style>
