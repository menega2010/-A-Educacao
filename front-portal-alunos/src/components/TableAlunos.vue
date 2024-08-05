<v-data-table :items="items"></v-data-table>



<script setup>
  const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
  ]
</script>

<script>
export default {
  name: 'TableAlunos'
}
</script>