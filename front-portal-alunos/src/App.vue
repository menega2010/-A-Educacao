
<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Portal Alunos</v-app-bar-title>
    </v-app-bar>
<v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card height="200">
            <TableAlunos />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
   </v-main>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
import TableAlunos from './components/TableAlunos.vue'

  export default {
    data: () => ({ drawer: null }),
    components: {
    TableAlunos
  }
  }
</script>