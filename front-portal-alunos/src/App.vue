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

    <v-main>
      <div class="main-content">
        <v-col cols="auto" class="d-flex justify-end m-t-3" >
          <v-btn>Regular Button</v-btn>
        </v-col>
        <TableAlunos />
      </div>
    </v-main>

    <v-footer border>
      <p>Teste</p>
    </v-footer>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)
</script>

<script>
import TableAlunos from './components/TableAlunos.vue'

  export default {
    data: () => ({ drawer: false }),
    components: {
    TableAlunos
  }
  }
</script>

<style scoped>
.custom-bar {
  z-index: 1200; /* Garante que o app bar esteja acima do drawer */
  margin: 0px;
}

.custom-drawer {
  z-index: 1100; /* Garante que o drawer esteja abaixo do app bar */
  position: fixed;
  top: 64px; /* Ajuste conforme a altura do v-app-bar */
  margin-top: 63px;
  width: 200px; /* Ajuste a largura do drawer conforme necessário */
}

.main-content {
  margin-bottom: 40px;

  
}

v-footer {
  z-index: 1000; /* Garante que o footer esteja abaixo do app bar e do drawer */
}
</style>
